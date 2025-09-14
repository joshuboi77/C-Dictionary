# C Grammar with Examples

## Program

```
program ::= { declaration | function-definition }
```

```c
int x;                        // declaration
int main(void) { return 0; }  // function-definition
```

**Token breakdown:**
- `int` → keyword (type specifier)
- `x` → identifier (variable name)
- `;` → punctuation (statement terminator)
- `main` → identifier (function name)
- `(void)` → punctuation + keyword + punctuation (parameter list)
- `{` → punctuation (block opener)
- `return` → keyword (jump statement)
- `0` → integer literal (expression)
- `;` → punctuation (statement terminator)
- `}` → punctuation (block closer)

---

## Declaration

```
declaration ::= declaration-specifiers init-declarator-list ";"
```

```c
int a;                  // declaration-specifiers: int ; init-declarator-list: a
double y, z = 3.0;      // multiple declarators
const long *p;          // qualified type
```

**Token breakdown:**
- `int` → keyword (type specifier)
- `a` → identifier (variable name)
- `;` → punctuation (statement terminator)
- `double` → keyword (type specifier)
- `y` → identifier (variable name)
- `,` → punctuation (separator)
- `z` → identifier (variable name)
- `=` → operator (assignment)
- `3.0` → floating-point literal (initializer)
- `;` → punctuation (statement terminator)
- `const` → keyword (type qualifier)
- `long` → keyword (type specifier)
- `*` → operator (pointer declarator)
- `p` → identifier (variable name)
- `;` → punctuation (statement terminator)

---

## Function Definition

```
function-definition ::= declaration-specifiers declarator compound-statement
```

```c
int square(int n) {      // declaration-specifiers: int ; declarator: square(int n)
    return n*n;          // compound-statement
}
```

**Token breakdown:**
- `int` → keyword (return type specifier)
- `square` → identifier (function name)
- `(` → punctuation (parameter list opener)
- `int` → keyword (parameter type specifier)
- `n` → identifier (parameter name)
- `)` → punctuation (parameter list closer)
- `{` → punctuation (function body opener)
- `return` → keyword (jump statement)
- `n` → identifier (variable reference)
- `*` → operator (multiplication)
- `n` → identifier (variable reference)
- `;` → punctuation (statement terminator)
- `}` → punctuation (function body closer)

---

## Compound Statement

```
compound-statement ::= "{" { declaration | statement } "}"
```

```c
{
    int t = 0;           // declaration inside block
    t++;                 // statement inside block
}
```

**Token breakdown:**
- `{` → punctuation (block opener)
- `int` → keyword (type specifier)
- `t` → identifier (variable name)
- `=` → operator (assignment)
- `0` → integer literal (initializer)
- `;` → punctuation (statement terminator)
- `t` → identifier (variable reference)
- `++` → operator (post-increment)
- `;` → punctuation (statement terminator)
- `}` → punctuation (block closer)

---

## Statement

```
statement ::= expression-statement
            | compound-statement
            | selection-statement
            | iteration-statement
            | jump-statement
```

```c
x = 5;                   // expression-statement
{ int k = 1; }           // compound-statement
if (x) y = 1;            // selection-statement
while (i--) ;            // iteration-statement
return;                  // jump-statement
```

**Token breakdown:**
- `x` → identifier (variable reference)
- `=` → operator (assignment)
- `5` → integer literal (assigned value)
- `;` → punctuation (statement terminator)
- `{` → punctuation (block opener)
- `int` → keyword (type specifier)
- `k` → identifier (variable name)
- `=` → operator (assignment)
- `1` → integer literal (initializer)
- `;` → punctuation (statement terminator)
- `}` → punctuation (block closer)
- `if` → keyword (selection statement)
- `(` → punctuation (condition opener)
- `x` → identifier (variable reference)
- `)` → punctuation (condition closer)
- `y` → identifier (variable reference)
- `=` → operator (assignment)
- `1` → integer literal (assigned value)
- `;` → punctuation (statement terminator)
- `while` → keyword (iteration statement)
- `(` → punctuation (condition opener)
- `i` → identifier (variable reference)
- `--` → operator (post-decrement)
- `)` → punctuation (condition closer)
- `;` → punctuation (statement terminator)
- `return` → keyword (jump statement)
- `;` → punctuation (statement terminator)

---

## Expression Statement

```
expression-statement ::= [expression] ";"
```

```c
;                        // empty statement
n = n + 1;               // expression followed by ;
```

**Token breakdown:**
- `;` → punctuation (statement terminator - empty statement)
- `n` → identifier (variable reference)
- `=` → operator (assignment)
- `n` → identifier (variable reference)
- `+` → operator (addition)
- `1` → integer literal (addend)
- `;` → punctuation (statement terminator)

---

## Selection Statement (if / else)

```
selection-statement ::= "if" "(" expression ")" statement ["else" statement]
```

```c
if (x > 0)
    y = 1;
```

**Token breakdown:**
- `if` → keyword (selection statement)
- `(` → punctuation (condition opener)
- `x` → identifier (variable reference)
- `>` → operator (greater than comparison)
- `0` → integer literal (comparison value)
- `)` → punctuation (condition closer)
- `y` → identifier (variable reference)
- `=` → operator (assignment)
- `1` → integer literal (assigned value)
- `;` → punctuation (statement terminator)

if (x > 0)
    y = 1;
else
    y = -1;
```

**Token breakdown:**
- `if` → keyword (selection statement)
- `(` → punctuation (condition opener)
- `x` → identifier (variable reference)
- `>` → operator (greater than comparison)
- `0` → integer literal (comparison value)
- `)` → punctuation (condition closer)
- `y` → identifier (variable reference)
- `=` → operator (assignment)
- `1` → integer literal (assigned value)
- `;` → punctuation (statement terminator)
- `else` → keyword (alternative branch)
- `y` → identifier (variable reference)
- `=` → operator (assignment)
- `-` → operator (unary minus)
- `1` → integer literal (assigned value)
- `;` → punctuation (statement terminator)
```

---

## Selection Statement (switch)

```
selection-statement ::= "switch" "(" expression ")" statement
```

```c
switch (n) {
    case 1: puts("one"); break;
    case 2: puts("two"); break;
    default: puts("other"); break;
}
```

**Token breakdown:**
- `switch` → keyword (selection statement)
- `(` → punctuation (expression opener)
- `n` → identifier (variable reference)
- `)` → punctuation (expression closer)
- `{` → punctuation (switch body opener)
- `case` → keyword (case label)
- `1` → integer literal (case value)
- `:` → punctuation (label terminator)
- `puts` → identifier (function call)
- `(` → punctuation (argument list opener)
- `"one"` → string literal (argument)
- `)` → punctuation (argument list closer)
- `;` → punctuation (statement terminator)
- `break` → keyword (jump statement)
- `;` → punctuation (statement terminator)
- `case` → keyword (case label)
- `2` → integer literal (case value)
- `:` → punctuation (label terminator)
- `puts` → identifier (function call)
- `(` → punctuation (argument list opener)
- `"two"` → string literal (argument)
- `)` → punctuation (argument list closer)
- `;` → punctuation (statement terminator)
- `break` → keyword (jump statement)
- `;` → punctuation (statement terminator)
- `default` → keyword (default label)
- `:` → punctuation (label terminator)
- `puts` → identifier (function call)
- `(` → punctuation (argument list opener)
- `"other"` → string literal (argument)
- `)` → punctuation (argument list closer)
- `;` → punctuation (statement terminator)
- `break` → keyword (jump statement)
- `;` → punctuation (statement terminator)
- `}` → punctuation (switch body closer)

---

## Iteration Statement (while)

```
iteration-statement ::= "while" "(" expression ")" statement
```

```c
while (i < 10)
    i++;
```

**Token breakdown:**
- `while` → keyword (iteration statement)
- `(` → punctuation (condition opener)
- `i` → identifier (variable reference)
- `<` → operator (less than comparison)
- `10` → integer literal (comparison value)
- `)` → punctuation (condition closer)
- `i` → identifier (variable reference)
- `++` → operator (post-increment)
- `;` → punctuation (statement terminator)

---

## Iteration Statement (do while)

```
iteration-statement ::= "do" statement "while" "(" expression ")" ";"
```

```c
do {
    i++;
} while (i < 10);
```

**Token breakdown:**
- `do` → keyword (iteration statement)
- `{` → punctuation (block opener)
- `i` → identifier (variable reference)
- `++` → operator (post-increment)
- `;` → punctuation (statement terminator)
- `}` → punctuation (block closer)
- `while` → keyword (condition keyword)
- `(` → punctuation (condition opener)
- `i` → identifier (variable reference)
- `<` → operator (less than comparison)
- `10` → integer literal (comparison value)
- `)` → punctuation (condition closer)
- `;` → punctuation (statement terminator)

---

## Iteration Statement (for)

```
iteration-statement ::= "for" "(" [expr] ";" [expr] ";" [expr] ")" statement
```

```c
for (int i = 0; i < 10; i++)
    sum += i;
```

**Token breakdown:**
- `for` → keyword (iteration statement)
- `(` → punctuation (for clause opener)
- `int` → keyword (type specifier)
- `i` → identifier (variable name)
- `=` → operator (assignment)
- `0` → integer literal (initial value)
- `;` → punctuation (clause separator)
- `i` → identifier (variable reference)
- `<` → operator (less than comparison)
- `10` → integer literal (comparison value)
- `;` → punctuation (clause separator)
- `i` → identifier (variable reference)
- `++` → operator (increment)
- `)` → punctuation (for clause closer)
- `sum` → identifier (variable reference)
- `+=` → operator (compound assignment)
- `i` → identifier (variable reference)
- `;` → punctuation (statement terminator)

---

## Jump Statement (return)

```
jump-statement ::= "return" [expression] ";"
```

```c
return;        // in a void function
return 42;     // in a non-void function
```

**Token breakdown:**
- `return` → keyword (jump statement)
- `;` → punctuation (statement terminator)
- `return` → keyword (jump statement)
- `42` → integer literal (return value)
- `;` → punctuation (statement terminator)

---

## Jump Statement (break)

```
jump-statement ::= "break" ";"
```

```c
while (1) {
    if (done) break;
}
```

**Token breakdown:**
- `while` → keyword (iteration statement)
- `(` → punctuation (condition opener)
- `1` → integer literal (condition value - always true)
- `)` → punctuation (condition closer)
- `{` → punctuation (block opener)
- `if` → keyword (selection statement)
- `(` → punctuation (condition opener)
- `done` → identifier (variable reference)
- `)` → punctuation (condition closer)
- `break` → keyword (jump statement)
- `;` → punctuation (statement terminator)
- `}` → punctuation (block closer)

---

## Jump Statement (continue)

```
jump-statement ::= "continue" ";"
```

```c
for (int i = 0; i < n; i++) {
    if (skip(i)) continue;
    use(i);
}
```

**Token breakdown:**
- `for` → keyword (iteration statement)
- `(` → punctuation (for clause opener)
- `int` → keyword (type specifier)
- `i` → identifier (variable name)
- `=` → operator (assignment)
- `0` → integer literal (initial value)
- `;` → punctuation (clause separator)
- `i` → identifier (variable reference)
- `<` → operator (less than comparison)
- `n` → identifier (variable reference)
- `;` → punctuation (clause separator)
- `i` → identifier (variable reference)
- `++` → operator (increment)
- `)` → punctuation (for clause closer)
- `{` → punctuation (block opener)
- `if` → keyword (selection statement)
- `(` → punctuation (condition opener)
- `skip` → identifier (function call)
- `(` → punctuation (argument list opener)
- `i` → identifier (argument)
- `)` → punctuation (argument list closer)
- `)` → punctuation (condition closer)
- `continue` → keyword (jump statement)
- `;` → punctuation (statement terminator)
- `use` → identifier (function call)
- `(` → punctuation (argument list opener)
- `i` → identifier (argument)
- `)` → punctuation (argument list closer)
- `;` → punctuation (statement terminator)
- `}` → punctuation (block closer)

---

## Jump Statement (goto)

```
jump-statement ::= "goto" identifier ";"
```

```c
goto L;
L: puts("jumped");
```

**Token breakdown:**
- `goto` → keyword (jump statement)
- `L` → identifier (label name)
- `;` → punctuation (statement terminator)
- `L` → identifier (label definition)
- `:` → punctuation (label terminator)
- `puts` → identifier (function call)
- `(` → punctuation (argument list opener)
- `"jumped"` → string literal (argument)
- `)` → punctuation (argument list closer)
- `;` → punctuation (statement terminator)
