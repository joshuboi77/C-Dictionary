#!/usr/bin/env python3

import argparse
import os
import re
from typing import Dict, List, Optional, Tuple


HEADING_ITEM_RE = re.compile(r"^###\s+(.*)\s*$")
BACKTICKED_TOKEN_RE = re.compile(r"^`([^`]+)`$")


def read_file(path: str) -> str:
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()


def normalize_token(raw: str) -> str:
    m = BACKTICKED_TOKEN_RE.match(raw.strip())
    if m:
        return m.group(1)
    return raw.strip()


def js_escape(s: Optional[str]) -> str:
    if s is None:
        return ''
    s = s.replace('\\', '\\\\').replace("'", "\\'")
    s = s.replace('\r\n', '\n').replace('\n', '\\n')
    return s


class SectionType:
    NONE = 'none'
    KEYWORD = 'keyword'
    IDENTIFIER = 'identifier'
    OPERATOR = 'operator'


def detect_section_type(line: str, state: Dict[str, str]) -> None:
    text = line.strip().lower()
    if text.startswith('# c language reference'):
        return
    if text.startswith('### keywords'):
        state['current_type'] = SectionType.KEYWORD
        return
    if text.startswith('### operators'):
        state['current_type'] = SectionType.OPERATOR
        return
    if text.startswith('### standard library identifiers'):
        state['current_type'] = SectionType.IDENTIFIER
        return


def parse_items(md_text: str) -> List[Dict[str, Optional[str]]]:
    lines = md_text.splitlines()
    state: Dict[str, str] = { 'current_type': SectionType.NONE }
    items: List[Dict[str, Optional[str]]] = []

    i = 0
    n = len(lines)
    while i < n:
        line = lines[i]
        detect_section_type(line, state)

        m = HEADING_ITEM_RE.match(line)
        if m and state['current_type'] in (SectionType.KEYWORD, SectionType.IDENTIFIER, SectionType.OPERATOR):
            token_name_raw = m.group(1)
            token_name = normalize_token(token_name_raw)

            description = ''
            example = ''
            found_description = False

            j = i + 1
            # Find description delimiter lines used in C_Dictionary.md
            while j < n:
                s = lines[j]
                if s.lstrip().startswith('_Description:_'):
                    found_description = True
                    # Next line is '---', then description lines until blank line or 'Example:'
                    j += 1
                    if j < n and lines[j].strip().startswith('---'):
                        j += 1
                    # Accumulate description
                    while j < n:
                        t = lines[j]
                        if t.strip() == '' or t.strip().lower().startswith('example:') or HEADING_ITEM_RE.match(t):
                            break
                        description += (('\n' if description else '') + t.rstrip())
                        j += 1
                    break
                if HEADING_ITEM_RE.match(s):
                    break
                detect_section_type(s, state)
                j += 1

            # Find example block following 'Example:' label
            while j < n and not lines[j].strip().lower().startswith('example:'):
                if HEADING_ITEM_RE.match(lines[j]):
                    break
                j += 1
            if j < n and lines[j].strip().lower().startswith('example:'):
                j += 1
                # Skip blank lines
                while j < n and lines[j].strip() == '':
                    j += 1
                # Expect fenced code block
                if j < n and lines[j].strip().startswith('```'):
                    j += 1
                    code_lines: List[str] = []
                    while j < n and not lines[j].strip().startswith('```'):
                        code_lines.append(lines[j].rstrip())
                        j += 1
                    if j < n and lines[j].strip().startswith('```'):
                        j += 1
                    example = '\n'.join(code_lines).rstrip()

            if found_description:
                item_type = state['current_type']
                items.append({
                    'token': token_name,
                    'type': item_type,
                    'description': description.strip(),
                    'example': example.strip() if example else ''
                })

            i = j
            continue

        i += 1

    return items


def merge_items(items: List[Dict[str, Optional[str]]]) -> Dict[str, Dict[str, Optional[str]]]:
    precedence = { 'keyword': 3, 'operator': 2, 'identifier': 1 }
    merged: Dict[str, Dict[str, Optional[str]]] = {}
    for it in items:
        tok = (it.get('token') or '').strip()
        if not tok:
            continue
        if tok not in merged:
            merged[tok] = it
            continue
        # Prefer higher precedence; if equal, prefer longer description/example
        if precedence.get(it['type'], 0) > precedence.get(merged[tok]['type'], 0):
            merged[tok] = it
        elif precedence.get(it['type'], 0) == precedence.get(merged[tok]['type'], 0):
            if len((it.get('description') or '')) > len((merged[tok].get('description') or '')):
                merged[tok]['description'] = it.get('description')
            if len((it.get('example') or '')) > len((merged[tok].get('example') or '')):
                merged[tok]['example'] = it.get('example')
    return merged


def to_built_in_definitions_js(merged: Dict[str, Dict[str, Optional[str]]]) -> str:
    arr = []
    for token in sorted(merged.keys(), key=lambda s: s.lower()):
        it = merged[token]
        arr.append({
            'token': token,
            'type': it.get('type') or '',
            'description': it.get('description') or '',
            'example': it.get('example') or ''
        })
    lines: List[str] = []
    lines.append("// Auto-generated from C_Dictionary.md. Do not edit manually.")
    lines.append("module.exports = [")
    for i, obj in enumerate(arr):
        comma = ',' if i < len(arr) - 1 else ''
        lines.append(
            "  { token: '%s', type: '%s', description: '%s'%s }%s" % (
                js_escape(obj['token']),
                js_escape(obj['type']),
                js_escape(obj['description']),
                (", example: '%s'" % js_escape(obj['example'])) if obj['example'] else '',
                comma)
        )
    lines.append("];")
    lines.append("")
    return '\n'.join(lines)


def to_c_dictionary_js(merged: Dict[str, Dict[str, Optional[str]]]) -> str:
    sections: List[Tuple[str, str]] = [
        ('Keywords', 'keyword'),
        ('Operators', 'operator'),
        ('Standard Library Identifiers', 'identifier')
    ]
    lines: List[str] = []
    lines.append("// Auto-generated from C_Dictionary.md. Do not edit manually.")
    lines.append("module.exports = {")
    lines.append("  title: 'C Language Reference',")
    lines.append("  sections: [")
    for si, (title, typ) in enumerate(sections):
        lines.append("    {")
        lines.append("      title: '%s'," % js_escape(title))
        lines.append("      items: [")
        section_items = [it for it in merged.values() if (it.get('type') == typ)]
        section_items.sort(key=lambda x: (x.get('token') or '').lower())
        for ii, it in enumerate(section_items):
            comma = ',' if ii < len(section_items) - 1 else ''
            lines.append(
                "        { token: '%s', type: '%s', description: '%s'%s }%s" % (
                    js_escape(it.get('token') or ''),
                    js_escape(it.get('type') or ''),
                    js_escape(it.get('description') or ''),
                    (", example: '%s'" % js_escape(it.get('example') or '')) if (it.get('example')) else '',
                    comma)
            )
        lines.append("      ]")
        lines.append("    }%s" % (',' if si < len(sections) - 1 else ''))
    lines.append("  ]")
    lines.append("};")
    lines.append("")
    return '\n'.join(lines)


def main():
    parser = argparse.ArgumentParser(description='Generate JS dictionary files from C_Dictionary.md')
    parser.add_argument('--source', default='C_Dictionary.md', help='Path to C_Dictionary.md')
    parser.add_argument('--out-dir', default='c-token-analyzer', help='Directory to write JS outputs')
    parser.add_argument('--builtins-out', default='built-in-definitions.js', help='Output filename for built-in definitions')
    parser.add_argument('--dictionary-out', default='c-dictionary.js', help='Output filename for dictionary index')
    args = parser.parse_args()

    md = read_file(args.source)
    raw_items = parse_items(md)
    merged = merge_items(raw_items)

    os.makedirs(args.out_dir, exist_ok=True)
    builtins_path = os.path.join(args.out_dir, args.builtins_out)
    dictionary_path = os.path.join(args.out_dir, args.dictionary_out)

    with open(builtins_path, 'w', encoding='utf-8') as f:
        f.write(to_built_in_definitions_js(merged))
    with open(dictionary_path, 'w', encoding='utf-8') as f:
        f.write(to_c_dictionary_js(merged))

    print(f"Wrote {builtins_path}")
    print(f"Wrote {dictionary_path}")


if __name__ == '__main__':
    main()


