// Embedded C Dictionary content
const C_DICTIONARY = {
  "title": "C Language Reference",
  "sections": [
    {
      "title": "Keywords",
      "items": [
        {
          "id": "kw-auto",
          "token": "auto",
          "type": "keyword",
          "description": "Storage class specifier for automatic variables (block scope, automatic storage duration). Local variables declared inside a block are automatic; storage is allocated on entry and released on exit. Because non-static locals are automatic by default, writing `auto` is redundant in C.",
          "example": "void f(void) {\n    auto int x = 10;  // equivalent to: int x = 10;\n}"
        },
        {
          "id": "kw-break",
          "token": "break",
          "type": "keyword",
          "description": "Immediately terminates the nearest enclosing `switch`, `for`, `while`, or `do` loop and transfers control to the statement following it.",
          "example": "for (int i = 0; i < 10; i++) {\n    if (i == 5) {\n        break; // exits the loop when i is 5\n    }\n}"
        },
        {
          "id": "kw-case",
          "token": "case",
          "type": "keyword",
          "description": "Labels a branch inside a `switch` statement for a matching constant expression value. Must be used within `switch`.",
          "example": "int n = 2;\nswitch (n) {\n    case 1: /* ... */ break;\n    case 2: /* ... */ break;\n    default: /* ... */ break;\n}"
        },
        {
          "id": "kw-char",
          "token": "char",
          "type": "keyword",
          "description": "Integer type typically used to store character codes. Signedness is implementation-defined (`char` may be signed or unsigned). `signed char` and `unsigned char` are distinct types.",
          "example": "char letter = 'A';"
        },
        {
          "id": "kw-const",
          "token": "const",
          "type": "keyword",
          "description": "Qualifies an object or pointer target as read-only. Attempts to modify a `const` object result in undefined behavior. Does not imply static storage.",
          "example": "const int limit = 10;  /* cannot be modified */"
        },
        {
          "id": "kw-continue",
          "token": "continue",
          "type": "keyword",
          "description": "Skips to the next iteration of the nearest enclosing loop. In `for` loops, the increment expression is evaluated before the next condition check.",
          "example": "for (int i = 0; i < 5; i++) {\n    if (i == 2) continue;  // skip printing 2\n}"
        },
        {
          "id": "kw-default",
          "token": "default",
          "type": "keyword",
          "description": "Specifies the fallback branch in a `switch` when no `case` matches. At most one `default` per `switch`.",
          "example": "switch (getchar()) {\n    case 'y': /* ... */ break;\n    case 'n': /* ... */ break;\n    default:  /* ... */ break;\n}"
        },
        {
          "id": "kw-do",
          "token": "do",
          "type": "keyword",
          "description": "Starts a `do`-`while` loop, which executes the body at least once before testing the condition.",
          "example": "int i = 0;\ndo {\n    /* body */\n    i++;\n} while (i < 5);"
        },
        {
          "id": "kw-double",
          "token": "double",
          "type": "keyword",
          "description": "Double-precision floating-point type. `long double` may offer greater precision; `float` offers less.",
          "example": "double pi = 3.141592653589793;"
        },
        {
          "id": "kw-else",
          "token": "else",
          "type": "keyword",
          "description": "Introduces the alternative branch of an `if` statement when the condition is false. Pairs with the nearest unmatched `if`.",
          "example": "int x = 3;\nif (x > 0) {\n    /* ... */\n} else {\n    /* ... */\n}"
        },
        {
          "id": "kw-enum",
          "token": "enum",
          "type": "keyword",
          "description": "Defines an enumeration type with named integer constants. Enumerator values are `int` compatible and may be explicitly assigned.",
          "example": "enum Color { RED = 0, GREEN = 1, BLUE = 2 };\nenum Color c = GREEN;"
        },
        {
          "id": "kw-extern",
          "token": "extern",
          "type": "keyword",
          "description": "Declares an identifier with external linkage defined elsewhere. Commonly used for variables or functions defined in another translation unit.",
          "example": "/* file1.c */\nint counter = 0;  // definition\n\n/* file2.c */\nextern int counter;  // declaration"
        },
        {
          "id": "kw-float",
          "token": "float",
          "type": "keyword",
          "description": "Single-precision floating-point type.",
          "example": "float ratio = 0.5f;"
        },
        {
          "id": "kw-for",
          "token": "for",
          "type": "keyword",
          "description": "Creates a counted loop with initializer, condition, and iteration expressions. Any component may be omitted; expressions evaluate left-to-right each iteration.",
          "example": "for (int i = 0; i < 5; i++) {\n    /* body */\n}"
        },
        {
          "id": "kw-goto",
          "token": "goto",
          "type": "keyword",
          "description": "Transfers control to a labeled statement within the same function. Use sparingly; you cannot jump into the scope of a variable in a way that skips its initialization.",
          "example": "int i = 0;\nstart:\nif (++i <= 3) goto start;  // loops 3 times"
        },
        {
          "id": "kw-if",
          "token": "if",
          "type": "keyword",
          "description": "Executes a statement/compound-statement conditionally. `else` binds to the nearest unmatched `if`.",
          "example": "int x = 5;\nif (x > 0) {\n    /* ... */\n} else if (x < 0) {\n    /* ... */\n} else {\n    /* ... */\n}"
        },
        {
          "id": "kw-inline",
          "token": "inline",
          "type": "keyword",
          "description": "Suggests that calls to a function be inlined; also affects linkage rules for function definitions in headers. Prefer `static inline` for header-only helpers and provide one external (non-inline) definition if needed.",
          "example": "static inline int sqr(int x) { return x * x; }"
        },
        {
          "id": "kw-int",
          "token": "int",
          "type": "keyword",
          "description": "Signed integer type. Width is implementation-defined (at least 16 bits, commonly 32).",
          "example": "int count = 42;"
        },
        {
          "id": "kw-long",
          "token": "long",
          "type": "keyword",
          "description": "Integer type wider than or equal to `int` (at least 32 bits). Width varies by platform/ABI (`long` is 64-bit on LP64, 32-bit on LLP64).",
          "example": "long total = 0L;"
        },
        {
          "id": "kw-register",
          "token": "register",
          "type": "keyword",
          "description": "Obsolete hint to place a variable in a CPU register. Taking the address of a `register` variable is not allowed.",
          "example": "register int i;"
        },
        {
          "id": "kw-restrict",
          "token": "restrict",
          "type": "keyword",
          "description": "Pointer qualifier promising that, for the lifetime of the pointer, the object it points to is accessed only through that pointer (or values derived from it). Enables aliasing optimizations. Applies to pointers only.",
          "example": "void add_arrays(size_t n, const float *restrict a,\n                const float *restrict b, float *restrict out) {\n    for (size_t i = 0; i < n; i++) out[i] = a[i] + b[i];\n}"
        },
        {
          "id": "kw-return",
          "token": "return",
          "type": "keyword",
          "description": "Terminates the current function. In non-`void` functions, `return` must include an expression yielding the result. In `void` functions, `return;` returns no value.",
          "example": "int add(int a, int b) { return a + b; }"
        },
        {
          "id": "kw-short",
          "token": "short",
          "type": "keyword",
          "description": "`short int` type, at least 16 bits. May be `signed` or `unsigned`.",
          "example": "short s = 123;"
        },
        {
          "id": "kw-signed",
          "token": "signed",
          "type": "keyword",
          "description": "Type modifier indicating a signed integer type. Default for `char` is implementation-defined; `signed char` and `unsigned char` are distinct types.",
          "example": "signed int temperature = -5;"
        },
        {
          "id": "kw-sizeof",
          "token": "sizeof",
          "type": "keyword",
          "description": "Operator yielding the size in bytes of a type or expression (type `size_t`). Its operand is not evaluated, except when applied to a variable length array type.",
          "example": "size_t n = sizeof(int);"
        },
        {
          "id": "kw-static",
          "token": "static",
          "type": "keyword",
          "description": "At block scope: gives a variable static storage duration (retains value across calls, zero-initialized). At file scope: gives internal linkage (not visible outside the translation unit).",
          "example": "static int file_private;\n\nvoid counter(void) {\n    static int count;  // persists across calls\n    count++;\n}"
        },
        {
          "id": "kw-struct",
          "token": "struct",
          "type": "keyword",
          "description": "Defines a structure type aggregating named members.",
          "example": "struct Point { int x; int y; };\nstruct Point p = { .x = 1, .y = 2 };"
        },
        {
          "id": "kw-switch",
          "token": "switch",
          "type": "keyword",
          "description": "Multi-way branch on an integer-controlled expression. `case` labels must be constant integer expressions and unique; use `break` to avoid fallthrough.",
          "example": "switch (c) {\n    case 'a': /* ... */ break;\n    case 'b': /* ... */ break;\n    default:  /* ... */ break;\n}"
        },
        {
          "id": "kw-typedef",
          "token": "typedef",
          "type": "keyword",
          "description": "Creates an alias for a type. Does not create a distinct type.",
          "example": "typedef unsigned long ulong;"
        },
        {
          "id": "kw-union",
          "token": "union",
          "type": "keyword",
          "description": "Defines a union type whose members share the same storage. Only the most recently written member has a valid value.",
          "example": "union U { int i; float f; };\nunion U u; u.i = 42;  // u.f then has indeterminate value"
        },
        {
          "id": "kw-unsigned",
          "token": "unsigned",
          "type": "keyword",
          "description": "Type modifier for unsigned integer types (no negative values; modulo arithmetic).",
          "example": "unsigned int u = 10u;"
        },
        {
          "id": "kw-void",
          "token": "void",
          "type": "keyword",
          "description": "Indicates no value (function return type) or an unknown object type (`void *`). Objects of type `void` cannot be declared.",
          "example": "void log_message(const char *s);\nvoid *p = NULL;"
        },
        {
          "id": "kw-volatile",
          "token": "volatile",
          "type": "keyword",
          "description": "Type qualifier indicating that an object may be changed by factors outside the program. Inhibits certain optimizations. Not a substitute for atomicity or synchronization.",
          "example": "volatile int flag;"
        },
        {
          "id": "kw-while",
          "token": "while",
          "type": "keyword",
          "description": "Pre-test loop that repeats while the condition is nonzero.",
          "example": "int i = 0;\nwhile (i < 3) { i++; }"
        },
        {
          "id": "kw-_alignas",
          "token": "_Alignas",
          "type": "keyword",
          "description": "Specifies the alignment requirement of an object or member (may increase, not decrease, alignment). See `<stdalign.h>` for standard alignment macros.",
          "example": "_Alignas(16) unsigned char buf[64];"
        },
        {
          "id": "kw-_alignof",
          "token": "_Alignof",
          "type": "keyword",
          "description": "Yields the alignment requirement (in bytes) of a type; result type is `size_t`.",
          "example": "size_t a = _Alignof(double);"
        },
        {
          "id": "kw-_atomic",
          "token": "_Atomic",
          "type": "keyword",
          "description": "Type qualifier/specifier for atomic types. Use `_Atomic(T)` or `T _Atomic` with `<stdatomic.h>` operations to perform lock-free or atomic accesses.",
          "example": "#include <stdatomic.h>\n_Atomic int counter = 0;"
        },
        {
          "id": "kw-_bitint",
          "token": "_BitInt",
          "type": "keyword",
          "description": "Bit-precise integer type introduced in C23: `_BitInt(N)` and `unsigned _BitInt(N)` provide integers with exactly `N` value bits (where supported by the implementation).",
          "example": "unsigned _BitInt(17) x = 0u;"
        },
        {
          "id": "kw-_bool",
          "token": "_Bool",
          "type": "keyword",
          "description": "Boolean type with values 0 and 1. Include `<stdbool.h>` to use the aliases `bool`, `true`, and `false`.",
          "example": "#include <stdbool.h>\nbool ok = true;"
        },
        {
          "id": "kw-_complex",
          "token": "_Complex",
          "type": "keyword",
          "description": "Complex number type qualifier introduced in C99. Use with a real floating type (e.g., `double _Complex`). Operations and helpers are provided by `<complex.h>`.",
          "example": "#include <complex.h>\ndouble _Complex z = 1.0 + 2.0 * I;\ndouble r = creal(z), im = cimag(z);"
        },
        {
          "id": "kw-_generic",
          "token": "_Generic",
          "type": "keyword",
          "description": "C11 compile-time generic selection that chooses an expression based on the type of a controlling expression. Useful for type-generic macros.",
          "example": "#define type_name(x) _Generic((x), \\\n    int: \"int\", \\\n    double: \"double\", \\\n    default: \"other\")"
        },
        {
          "id": "kw-_imaginary",
          "token": "_Imaginary",
          "type": "keyword",
          "description": "Imaginary-only floating type qualifier from C99. Rarely implemented and seldom used; `<complex.h>` complex types are generally preferred.",
          "example": "double _Imaginary y = 2.0 * I;  // if supported"
        },
        {
          "id": "kw-_noreturn",
          "token": "_Noreturn",
          "type": "keyword",
          "description": "Function specifier indicating that a function does not return to its caller. Typically used on functions that terminate the program or never return.",
          "example": "#include <stdlib.h>\n_Noreturn void die(void) { exit(1); }"
        },
        {
          "id": "kw-_static_assert",
          "token": "_Static_assert",
          "type": "keyword",
          "description": "C11 compile-time assertion. First argument is a constant expression; second is a string literal message shown on failure.",
          "example": "_Static_assert(sizeof(void*) >= 4, \"Pointer too small\");"
        },
        {
          "id": "kw-_thread_local",
          "token": "_Thread_local",
          "type": "keyword",
          "description": "Specifies thread storage duration: each thread has its own instance initialized at thread start. Use with `static` or `extern` as needed. Deprecated in C23 in favor of `thread_local`.",
          "example": "_Thread_local int tls_counter;"
        }
      ]
    },
    {
      "title": "Operators",
      "items": [
        {
          "id": "op-5b-5d",
          "token": "[ ]",
          "type": "operator",
          "description": "Array subscript operator. For `a[b]`, computes `*(a + b)`. Behavior is undefined if the computed address is out of bounds.",
          "example": "int a[3] = {1,2,3};\nint x = a[1];  // 2"
        },
        {
          "id": "op-28-29",
          "token": "( )",
          "type": "operator",
          "description": "Parentheses for grouping expressions and for function calls.",
          "example": "int y = (2 + 3) * 4;  // 20\nint f(int);\nint r = f(42);"
        },
        {
          "id": "op-7b-7d",
          "token": "{ }",
          "type": "operator",
          "description": "Braces create a compound statement (block) or delimit initializers.",
          "example": "if (cond) { int t = 0; /* ... */ }\nint a[3] = {1,2,3};"
        },
        {
          "id": "op-2e",
          "token": ".",
          "type": "operator",
          "description": "Member access operator for structures/unions via an lvalue object.",
          "example": "struct P { int x, y; } p = {1,2};\nint x = p.x;"
        },
        {
          "id": "op--3e",
          "token": "->",
          "type": "operator",
          "description": "Member access through a pointer to a structure/union; `p->m` is `(*p).m`.",
          "example": "struct P { int x; } p = {3};\nstruct P *pp = &p;\nint x = pp->x;  // 3"
        },
        {
          "id": "op-2b2b",
          "token": "++",
          "type": "operator",
          "description": "Increment operator. Prefix form yields the incremented value; postfix yields the original value.",
          "example": "int i = 1;\nint a = ++i; // i=2, a=2\nint b = i++; // i=3, b=2"
        },
        {
          "id": "op---",
          "token": "--",
          "type": "operator",
          "description": "Decrement operator. Prefix form yields the decremented value; postfix yields the original value.",
          "example": "int i = 2;\nint a = --i; // i=1, a=1\nint b = i--; // i=0, b=1"
        },
        {
          "id": "op-26",
          "token": "&",
          "type": "operator",
          "description": "Bitwise AND (binary) and address-of (unary). Unary `&` yields the address of its operand.",
          "example": "int a = 6, b = 3; int c = a & b; // 2\nint *p = &a; // address-of"
        },
        {
          "id": "op-2a",
          "token": "*",
          "type": "operator",
          "description": "Multiplication (binary) and indirection/dereference (unary).",
          "example": "int prod = 6 * 7; // 42\nint *p = &prod; int v = *p; // dereference"
        },
        {
          "id": "op-2b",
          "token": "+",
          "type": "operator",
          "description": "Addition (binary) and unary plus (no effect on value). Pointer arithmetic is scaled by pointed-to type size.",
          "example": "int s = 1 + 2; // 3"
        },
        {
          "id": "op--",
          "token": "-",
          "type": "operator",
          "description": "Subtraction (binary) and unary negation. Pointer subtraction yields element count difference for pointers into the same array.",
          "example": "int d = 5 - 2; // 3"
        },
        {
          "id": "op-7e",
          "token": "~",
          "type": "operator",
          "description": "Bitwise NOT (ones' complement) of an integer type.",
          "example": "unsigned char m = (unsigned char)~0u; // 0xFF on 8-bit char"
        },
        {
          "id": "op-21",
          "token": "!",
          "type": "operator",
          "description": "Logical NOT. Converts nonzero to 0 and 0 to 1.",
          "example": "int t = !0; // 1"
        },
        {
          "id": "op-2f",
          "token": "/",
          "type": "operator",
          "description": "Division. Integer division truncates toward zero; division by zero is undefined.",
          "example": "int q = 7 / 3; // 2"
        },
        {
          "id": "op-25",
          "token": "%",
          "type": "operator",
          "description": "Remainder after integer division. Behavior is defined so that `(a / b) * b + (a % b) == a` when `b != 0`.",
          "example": "int r = 7 % 3; // 1"
        },
        {
          "id": "op-3c3c",
          "token": "<<",
          "type": "operator",
          "description": "Left shift. Shifts bits left; shifting into/sign on signed types is implementation-defined or undefined\u2014prefer unsigned.",
          "example": "unsigned x = 1u << 3; // 8"
        },
        {
          "id": "op-3e3e",
          "token": ">>",
          "type": "operator",
          "description": "Right shift. On unsigned, logical shift; on signed, arithmetic vs logical is implementation-defined.",
          "example": "unsigned x = 8u >> 1; // 4"
        },
        {
          "id": "op-3c",
          "token": "<",
          "type": "operator",
          "description": "Less-than relational operator.",
          "example": "int b = (2 < 3); // 1"
        },
        {
          "id": "op-3e",
          "token": ">",
          "type": "operator",
          "description": "Greater-than relational operator.",
          "example": "int b = (3 > 2); // 1"
        },
        {
          "id": "op-3c3d",
          "token": "<=",
          "type": "operator",
          "description": "Less-than-or-equal relational operator.",
          "example": "int b = (2 <= 2); // 1"
        },
        {
          "id": "op-3e3d",
          "token": ">=",
          "type": "operator",
          "description": "Greater-than-or-equal relational operator.",
          "example": "int b = (3 >= 2); // 1"
        },
        {
          "id": "op-3d3d",
          "token": "==",
          "type": "operator",
          "description": "Equality comparison. Compares values after usual conversions.",
          "example": "int b = (2 + 2 == 4); // 1"
        },
        {
          "id": "op-213d",
          "token": "!=",
          "type": "operator",
          "description": "Inequality comparison.",
          "example": "int b = (2 != 3); // 1"
        },
        {
          "id": "op-5e",
          "token": "^",
          "type": "operator",
          "description": "Bitwise XOR (exclusive OR).",
          "example": "int r = 5 ^ 3; // 6"
        },
        {
          "id": "op-7c",
          "token": "|",
          "type": "operator",
          "description": "Bitwise OR.",
          "example": "int r = 5 | 2; // 7"
        },
        {
          "id": "op-2626",
          "token": "&&",
          "type": "operator",
          "description": "Logical AND with short-circuit evaluation. Evaluates right operand only if left is nonzero.",
          "example": "if (ptr && *ptr == '\\0') { /* safe only if ptr != NULL */ }"
        },
        {
          "id": "op-7c7c",
          "token": "||",
          "type": "operator",
          "description": "Logical OR with short-circuit evaluation. Evaluates right operand only if left is zero.",
          "example": "if (err || fallback()) { /* ... */ }"
        },
        {
          "id": "op-3f",
          "token": "?",
          "type": "operator",
          "description": "Part of the conditional operator `?:` used as `cond ? expr1 : expr2`. Ternary operator selects between two expressions based on `cond`.",
          "example": "int max = (a > b) ? a : b;"
        },
        {
          "id": "op-3a",
          "token": ":",
          "type": "operator",
          "description": "Used in the conditional operator `?:` and to introduce `case` labels and bit-field widths.",
          "example": "switch (x) { case 1: /* ... */ break; }\nstruct S { unsigned f:3; };"
        },
        {
          "id": "op-3b",
          "token": ";",
          "type": "operator",
          "description": "Statement terminator; also forms the null statement when used alone.",
          "example": "while (getchar() != '\\n') ;  // null body"
        },
        {
          "id": "op-2e2e2e",
          "token": "...",
          "type": "operator",
          "description": "Variadic parameter marker in function declarators and prototypes.",
          "example": "int printf(const char *fmt, ...);"
        },
        {
          "id": "op-3d",
          "token": "=",
          "type": "operator",
          "description": "Simple assignment; stores right-hand value into left-hand lvalue.",
          "example": "int x; x = 10;"
        },
        {
          "id": "op-2a3d",
          "token": "*=",
          "type": "operator",
          "description": "Multiplication assignment.",
          "example": "x *= 3;  // x = x * 3"
        },
        {
          "id": "op-2f3d",
          "token": "/=",
          "type": "operator",
          "description": "Division assignment.",
          "example": "x /= 2;  // x = x / 2"
        },
        {
          "id": "op-253d",
          "token": "%=",
          "type": "operator",
          "description": "Remainder assignment.",
          "example": "x %= 3;  // x = x % 3"
        },
        {
          "id": "op-2b3d",
          "token": "+=",
          "type": "operator",
          "description": "Addition assignment.",
          "example": "x += 5;  // x = x + 5"
        },
        {
          "id": "op--3d",
          "token": "-=",
          "type": "operator",
          "description": "Subtraction assignment.",
          "example": "x -= 2;  // x = x - 2"
        },
        {
          "id": "op-3c3c3d",
          "token": "<<=",
          "type": "operator",
          "description": "Left shift assignment.",
          "example": "x <<= 1; // x = x << 1"
        },
        {
          "id": "op-3e3e3d",
          "token": ">>=",
          "type": "operator",
          "description": "Right shift assignment.",
          "example": "x >>= 2; // x = x >> 2"
        },
        {
          "id": "op-263d",
          "token": "&=",
          "type": "operator",
          "description": "Bitwise AND assignment.",
          "example": "x &= 0xFF;"
        },
        {
          "id": "op-5e3d",
          "token": "^=",
          "type": "operator",
          "description": "Bitwise XOR assignment.",
          "example": "x ^= 1;"
        },
        {
          "id": "op-7c3d",
          "token": "|=",
          "type": "operator",
          "description": "Bitwise OR assignment.",
          "example": "x |= 0x10;"
        },
        {
          "id": "op-2c",
          "token": ",",
          "type": "operator",
          "description": "Comma operator evaluates left expression, discards the value, then evaluates and yields the right expression.",
          "example": "int y = (x = 1, x + 2); // y = 3"
        },
        {
          "id": "op-23",
          "token": "#",
          "type": "operator",
          "description": "Preprocessor stringizing operator inside macros: converts a macro parameter to a string literal.",
          "example": "#define S(x) #x\n// S(hello) -> \"hello\""
        },
        {
          "id": "op-2323",
          "token": "##",
          "type": "operator",
          "description": "Preprocessor token pasting operator: concatenates tokens in macro expansion.",
          "example": "#define CAT(a,b) a##b\n// CAT(var, 1) -> var1"
        },
        {
          "id": "op-3c3a",
          "token": "<:",
          "type": "operator",
          "description": "Digraph for `[` in source code.",
          "example": "int a<:3:> = {1,2,3}; // same as int a[3] = {...}"
        },
        {
          "id": "op-3a3e",
          "token": ":>",
          "type": "operator",
          "description": "Digraph for `]` in source code.",
          "example": "int a<:3:> = {1,2,3};"
        },
        {
          "id": "op-3c25",
          "token": "<%",
          "type": "operator",
          "description": "Digraph for `{` in source code.",
          "example": "int main()<% return 0; %>"
        },
        {
          "id": "op-253e",
          "token": "%>",
          "type": "operator",
          "description": "Digraph for `}` in source code.",
          "example": "int main()<% return 0; %>"
        },
        {
          "id": "op-253a",
          "token": "%:",
          "type": "operator",
          "description": "Digraph for `#` in source code.",
          "example": "%:define N 10"
        },
        {
          "id": "op-253a253a",
          "token": "%:%:",
          "type": "operator",
          "description": "Digraph for `##` in source code.",
          "example": "#define CAT(a,b) a %:%: b  // token pasting"
        }
      ]
    },
    {
      "title": "Standard Library Identifiers",
      "items": [
        {
          "id": "id-abort",
          "token": "abort",
          "type": "identifier",
          "description": "Abnormal process termination. Raises `SIGABRT`; does not call `atexit` handlers.",
          "example": "#include <stdlib.h>\nvoid fatal(void) { abort(); }"
        },
        {
          "id": "id-abs",
          "token": "abs",
          "type": "identifier",
          "description": "Returns absolute value of an `int`.",
          "example": "#include <stdlib.h>\nint m = abs(-42); // 42"
        },
        {
          "id": "id-acos",
          "token": "acos",
          "type": "identifier",
          "description": "Arc cosine of a floating-point value (in radians). Domain: [-1, 1].",
          "example": "#include <math.h>\ndouble x = acos(1.0); // 0.0"
        },
        {
          "id": "id-acosf",
          "token": "acosf",
          "type": "identifier",
          "description": "`float` version of `acos`.",
          "example": "#include <math.h>\nfloat x = acosf(0.0f);"
        },
        {
          "id": "id-acosh",
          "token": "acosh",
          "type": "identifier",
          "description": "Inverse hyperbolic cosine. Domain: x >= 1.",
          "example": "#include <math.h>\ndouble y = acosh(1.0); // 0.0"
        },
        {
          "id": "id-acoshf",
          "token": "acoshf",
          "type": "identifier",
          "description": "`float` version of `acosh`.",
          "example": "#include <math.h>\nfloat y = acoshf(1.0f);"
        },
        {
          "id": "id-acoshl",
          "token": "acoshl",
          "type": "identifier",
          "description": "`long double` version of `acosh`.",
          "example": "#include <math.h>\nlong double y = acoshl(1.0L);"
        },
        {
          "id": "id-acosl",
          "token": "acosl",
          "type": "identifier",
          "description": "`long double` version of `acos`.",
          "example": "#include <math.h>\nlong double x = acosl(1.0L);"
        },
        {
          "id": "id-aligned_alloc",
          "token": "aligned_alloc",
          "type": "identifier",
          "description": "Allocates memory with the specified alignment. Size must be a multiple of alignment; alignment must be a power of two and multiple of `sizeof(void*)`.",
          "example": "#include <stdlib.h>\nvoid *p = aligned_alloc(16, 64);"
        },
        {
          "id": "id-asctime",
          "token": "asctime",
          "type": "identifier",
          "description": "Converts `struct tm` to a fixed-format string. Not thread-safe; consider `asctime_r` where available.",
          "example": "#include <time.h>\nchar *s = asctime(gmtime(&(time_t){0}));"
        },
        {
          "id": "id-asin",
          "token": "asin",
          "type": "identifier",
          "description": "Arc sine (radians). Domain: [-1, 1].",
          "example": "#include <math.h>\ndouble v = asin(0.0);"
        },
        {
          "id": "id-asinf",
          "token": "asinf",
          "type": "identifier",
          "description": "`float` version of `asin`.",
          "example": "#include <math.h>\nfloat v = asinf(0.0f);"
        },
        {
          "id": "id-asinh",
          "token": "asinh",
          "type": "identifier",
          "description": "Inverse hyperbolic sine.",
          "example": "#include <math.h>\ndouble v = asinh(0.0);"
        },
        {
          "id": "id-asinhf",
          "token": "asinhf",
          "type": "identifier",
          "description": "`float` version of `asinh`.",
          "example": "#include <math.h>\nfloat v = asinhf(0.0f);"
        },
        {
          "id": "id-asinhl",
          "token": "asinhl",
          "type": "identifier",
          "description": "`long double` version of `asinh`.",
          "example": "#include <math.h>\nlong double v = asinhl(0.0L);"
        },
        {
          "id": "id-asinl",
          "token": "asinl",
          "type": "identifier",
          "description": "`long double` version of `asin`.",
          "example": "#include <math.h>\nlong double v = asinl(0.5L);"
        },
        {
          "id": "id-assert",
          "token": "assert",
          "type": "identifier",
          "description": "Diagnostic macro that aborts the program if its condition is false (disabled if `NDEBUG` is defined).",
          "example": "#include <assert.h>\nassert(sizeof(int) >= 2);"
        },
        {
          "id": "id-atan",
          "token": "atan",
          "type": "identifier",
          "description": "Arc tangent (radians). Range: (-pi/2, pi/2).",
          "example": "#include <math.h>\ndouble a = atan(1.0);"
        },
        {
          "id": "id-atan2",
          "token": "atan2",
          "type": "identifier",
          "description": "Arc tangent of `y/x` using signs to determine the correct quadrant. Returns angle in radians.",
          "example": "#include <math.h>\ndouble a = atan2(1.0, 1.0);"
        },
        {
          "id": "id-atan2f",
          "token": "atan2f",
          "type": "identifier",
          "description": "`float` version of `atan2`.",
          "example": "#include <math.h>\nfloat a = atan2f(1.0f, 1.0f);"
        },
        {
          "id": "id-atan2l",
          "token": "atan2l",
          "type": "identifier",
          "description": "`long double` version of `atan2`.",
          "example": "#include <math.h>\nlong double a = atan2l(1.0L, 1.0L);"
        },
        {
          "id": "id-atanf",
          "token": "atanf",
          "type": "identifier",
          "description": "`float` version of `atan`.",
          "example": "#include <math.h>\nfloat a = atanf(1.0f);"
        },
        {
          "id": "id-atanh",
          "token": "atanh",
          "type": "identifier",
          "description": "Inverse hyperbolic tangent. Domain: (-1, 1).",
          "example": "#include <math.h>\ndouble t = atanh(0.5);"
        },
        {
          "id": "id-atanhf",
          "token": "atanhf",
          "type": "identifier",
          "description": "`float` version of `atanh`.",
          "example": "#include <math.h>\nfloat t = atanhf(0.5f);"
        },
        {
          "id": "id-atanhl",
          "token": "atanhl",
          "type": "identifier",
          "description": "`long double` version of `atanh`.",
          "example": "#include <math.h>\nlong double t = atanhl(0.5L);"
        },
        {
          "id": "id-atanl",
          "token": "atanl",
          "type": "identifier",
          "description": "Arc tangent of a `long double` value (radians). Range: (-pi/2, pi/2).",
          "example": "#include <math.h>\nlong double r = atanl(0.5L);"
        },
        {
          "id": "id-atexit",
          "token": "atexit",
          "type": "identifier",
          "description": "Registers a function to be called at normal program termination (via `return` from `main` or `exit`). Called in reverse registration order.",
          "example": "#include <stdlib.h>\nstatic void on_exit(void) { /* cleanup */ }\nint main(void) { atexit(on_exit); return 0; }"
        },
        {
          "id": "id-atof",
          "token": "atof",
          "type": "identifier",
          "description": "Converts a C string to `double`. No error reporting on overflow/underflow; prefer `strtod` for robust parsing.",
          "example": "#include <stdlib.h>\ndouble v = atof(\"3.14\");"
        },
        {
          "id": "id-atoi",
          "token": "atoi",
          "type": "identifier",
          "description": "Converts a C string to `int`. No error reporting; prefer `strtol` for robust parsing.",
          "example": "#include <stdlib.h>\nint n = atoi(\"42\");"
        },
        {
          "id": "id-atol",
          "token": "atol",
          "type": "identifier",
          "description": "Converts a C string to `long`. No error reporting; prefer `strtol`.",
          "example": "#include <stdlib.h>\nlong n = atol(\"123456\");"
        },
        {
          "id": "id-atoll",
          "token": "atoll",
          "type": "identifier",
          "description": "Converts a C string to `long long`. No error reporting; prefer `strtoll`.",
          "example": "#include <stdlib.h>\nlong long n = atoll(\"123456789\");"
        },
        {
          "id": "id-bsearch",
          "token": "bsearch",
          "type": "identifier",
          "description": "Binary search in a sorted array. Returns a pointer to a matching element or `NULL`.",
          "example": "#include <stdlib.h>\nint cmp(const void *a, const void *b) { return (*(const int*)a - *(const int*)b); }\nint arr[] = {1,2,3,4,5};\nint key = 3; int *found = bsearch(&key, arr, 5, sizeof(int), cmp);"
        },
        {
          "id": "id-btowc",
          "token": "btowc",
          "type": "identifier",
          "description": "Converts a single-byte character to wide character using current locale. Returns `WEOF` on failure or if `c` is `EOF`.",
          "example": "#include <wchar.h>\nwint_t wc = btowc('A');"
        },
        {
          "id": "id-calloc",
          "token": "calloc",
          "type": "identifier",
          "description": "Allocates zero-initialized storage for an array (`nmemb * size`). Returns `NULL` on failure; beware multiplication overflow.",
          "example": "#include <stdlib.h>\nint *p = calloc(10, sizeof *p);"
        },
        {
          "id": "id-cabs",
          "token": "cabs",
          "type": "identifier",
          "description": "Magnitude (absolute value) of a `double _Complex` number.",
          "example": "#include <complex.h>\ndouble _Complex z = 3.0 + 4.0*I; double m = cabs(z); // 5.0"
        },
        {
          "id": "id-cabsf",
          "token": "cabsf",
          "type": "identifier",
          "description": "`float _Complex` version of `cabs`.",
          "example": "#include <complex.h>\nfloat _Complex z = 1.0f + 2.0f*I; float m = cabsf(z);"
        },
        {
          "id": "id-cabsl",
          "token": "cabsl",
          "type": "identifier",
          "description": "`long double _Complex` version of `cabs`.",
          "example": "#include <complex.h>\nlong double _Complex z = 1.0L + 1.0L*I; long double m = cabsl(z);"
        },
        {
          "id": "id-cacos",
          "token": "cacos",
          "type": "identifier",
          "description": "Complex arc cosine of a `double _Complex` argument (radians).",
          "example": "#include <complex.h>\ndouble _Complex z = 1.0 + 0.0*I; double _Complex w = cacos(z);"
        },
        {
          "id": "id-cacosf",
          "token": "cacosf",
          "type": "identifier",
          "description": "`float _Complex` version of `cacos`.",
          "example": "#include <complex.h>\nfloat _Complex z = 0.5f + 0.0f*I; float _Complex w = cacosf(z);"
        },
        {
          "id": "id-cacosl",
          "token": "cacosl",
          "type": "identifier",
          "description": "`long double _Complex` version of `cacos`.",
          "example": "#include <complex.h>\nlong double _Complex z = 1.0L + 0.0L*I; long double _Complex w = cacosl(z);"
        },
        {
          "id": "id-cacosh",
          "token": "cacosh",
          "type": "identifier",
          "description": "Complex inverse hyperbolic cosine for `double _Complex`.",
          "example": "#include <complex.h>\ndouble _Complex w = cacosh(1.0 + 2.0*I);"
        },
        {
          "id": "id-cacoshf",
          "token": "cacoshf",
          "type": "identifier",
          "description": "`float _Complex` version of `cacosh`.",
          "example": "#include <complex.h>\nfloat _Complex w = cacoshf(1.0f + 0.5f*I);"
        },
        {
          "id": "id-cacoshl",
          "token": "cacoshl",
          "type": "identifier",
          "description": "`long double _Complex` version of `cacosh`.",
          "example": "#include <complex.h>\nlong double _Complex w = cacoshl(1.0L + 1.0L*I);"
        },
        {
          "id": "id-carg",
          "token": "carg",
          "type": "identifier",
          "description": "Argument (phase angle) of a `double _Complex` number, in radians.",
          "example": "#include <complex.h>\ndouble _Complex z = -1.0 + 0.0*I; double a = carg(z); // ~pi"
        },
        {
          "id": "id-cargf",
          "token": "cargf",
          "type": "identifier",
          "description": "`float _Complex` version of `carg`.",
          "example": "#include <complex.h>\nfloat _Complex z = 1.0f + 1.0f*I; float a = cargf(z);"
        },
        {
          "id": "id-cargl",
          "token": "cargl",
          "type": "identifier",
          "description": "`long double _Complex` version of `carg`.",
          "example": "#include <complex.h>\nlong double _Complex z = 1.0L - 1.0L*I; long double a = cargl(z);"
        },
        {
          "id": "id-casin",
          "token": "casin",
          "type": "identifier",
          "description": "Complex arc sine for `double _Complex`.",
          "example": "#include <complex.h>\ndouble _Complex w = casin(0.5 + 0.5*I);"
        },
        {
          "id": "id-casinf",
          "token": "casinf",
          "type": "identifier",
          "description": "`float _Complex` version of `casin`.",
          "example": "#include <complex.h>\nfloat _Complex w = casinf(0.5f + 0.0f*I);"
        },
        {
          "id": "id-casinl",
          "token": "casinl",
          "type": "identifier",
          "description": "`long double _Complex` version of `casin`.",
          "example": "#include <complex.h>\nlong double _Complex w = casinl(0.0L + 1.0L*I);"
        },
        {
          "id": "id-casinh",
          "token": "casinh",
          "type": "identifier",
          "description": "Complex inverse hyperbolic sine for `double _Complex`.",
          "example": "#include <complex.h>\ndouble _Complex w = casinh(1.0 + 1.0*I);"
        },
        {
          "id": "id-casinhf",
          "token": "casinhf",
          "type": "identifier",
          "description": "Complex inverse hyperbolic sine for `float _Complex`.",
          "example": "#include <complex.h>\nfloat _Complex z = 1.0f + 2.0f * I;\nfloat _Complex r = casinhf(z);\n// r holds asinh(z) in complex plane"
        },
        {
          "id": "id-catan",
          "token": "catan",
          "type": "identifier",
          "description": "Complex arc tangent for `double _Complex`.",
          "example": "#include <complex.h>\ndouble _Complex z = 1.0 + 2.0 * I;\ndouble _Complex r = catan(z);\n// r is atan(z) (principal value)"
        },
        {
          "id": "id-catanf",
          "token": "catanf",
          "type": "identifier",
          "description": "`float _Complex` version of `catan`.",
          "example": "#include <complex.h>\nfloat _Complex z = 1.0f + 2.0f * I;\nfloat _Complex r = catanf(z);\n// r is atan(z) for float complex"
        },
        {
          "id": "id-catanl",
          "token": "catanl",
          "type": "identifier",
          "description": "`long double _Complex` version of `catan`.",
          "example": "#include <complex.h>\nlong double _Complex z = 1.0L + 2.0L * I;\nlong double _Complex r = catanl(z);"
        },
        {
          "id": "id-catanh",
          "token": "catanh",
          "type": "identifier",
          "description": "Complex inverse hyperbolic tangent for `double _Complex`.",
          "example": "#include <complex.h>\ndouble _Complex z = 1.0 + 2.0 * I;\ndouble _Complex r = catanh(z);\n// r is atanh(z)"
        },
        {
          "id": "id-catanhf",
          "token": "catanhf",
          "type": "identifier",
          "description": "`float _Complex` version of `catanh`.",
          "example": "#include <complex.h>\nfloat _Complex z = 1.0f + 2.0f * I;\nfloat _Complex r = catanhf(z);"
        },
        {
          "id": "id-cbrt",
          "token": "cbrt",
          "type": "identifier",
          "description": "Cube root for `double`.",
          "example": "#include <math.h>\ndouble r = cbrt(27.0);\n// r == 3.0"
        },
        {
          "id": "id-cbrtf",
          "token": "cbrtf",
          "type": "identifier",
          "description": "`float` version of `cbrt`.",
          "example": "#include <math.h>\nfloat r = cbrtf(27.0f);"
        },
        {
          "id": "id-cbrtl",
          "token": "cbrtl",
          "type": "identifier",
          "description": "`long double` version of `cbrt`.",
          "example": "#include <math.h>\nlong double r = cbrtl(27.0L);"
        },
        {
          "id": "id-ccos",
          "token": "ccos",
          "type": "identifier",
          "description": "Complex cosine for `double _Complex`.",
          "example": "#include <complex.h>\ndouble _Complex z = 1.0 + 2.0*I;\ndouble _Complex r = ccos(z);"
        },
        {
          "id": "id-ccosf",
          "token": "ccosf",
          "type": "identifier",
          "description": "`float _Complex` version of `ccos`.",
          "example": "#include <complex.h>\nfloat _Complex z = 1.0f + 2.0f*I;\nfloat _Complex r = ccosf(z);"
        },
        {
          "id": "id-ccosl",
          "token": "ccosl",
          "type": "identifier",
          "description": "`long double _Complex` version of `ccos`.",
          "example": "#include <complex.h>\nlong double _Complex z = 1.0L + 2.0L*I;\nlong double _Complex r = ccosl(z);"
        },
        {
          "id": "id-ccosh",
          "token": "ccosh",
          "type": "identifier",
          "description": "Complex hyperbolic cosine for `double _Complex`.",
          "example": "#include <complex.h>\ndouble _Complex r = ccosh(1.0 + 0.5*I);"
        },
        {
          "id": "id-ccoshf",
          "token": "ccoshf",
          "type": "identifier",
          "description": "`float _Complex` version of `ccosh`.",
          "example": "#include <complex.h>\nfloat _Complex r = ccoshf(1.0f + 0.5f*I);"
        },
        {
          "id": "id-cexp",
          "token": "cexp",
          "type": "identifier",
          "description": "Complex exponential for `double _Complex`: computes e^z.",
          "example": "#include <complex.h>\ndouble _Complex z = I * 3.141592653589793/2;\ndouble _Complex r = cexp(z);\n// r \u2248 0.0 + 1.0i"
        },
        {
          "id": "id-cexpf",
          "token": "cexpf",
          "type": "identifier",
          "description": "`float _Complex` version of `cexp`.",
          "example": "#include <complex.h>\nfloat _Complex r = cexpf(0.0f + I*0.0f);\n// r == 1.0f + 0.0fi"
        },
        {
          "id": "id-cexpl",
          "token": "cexpl",
          "type": "identifier",
          "description": "`long double _Complex` version of `cexp`.",
          "example": "#include <complex.h>\nlong double _Complex r = cexplo(0.0L + I*0.0L);\n// r == 1.0L + 0.0Li"
        },
        {
          "id": "id-cimag",
          "token": "cimag",
          "type": "identifier",
          "description": "Imaginary part extractor for `double _Complex`.",
          "example": "#include <complex.h>\ndouble _Complex z = 2.0 + 3.0*I;\ndouble im = cimag(z); // 3.0"
        },
        {
          "id": "id-cimagf",
          "token": "cimagf",
          "type": "identifier",
          "description": "`float _Complex` version of `cimag`.",
          "example": "#include <complex.h>\nfloat _Complex z = 2.0f + 3.0f*I;\nfloat im = cimagf(z); // 3.0f"
        },
        {
          "id": "id-cimagl",
          "token": "cimagl",
          "type": "identifier",
          "description": "`long double _Complex` version of `cimag`.",
          "example": "#include <complex.h>\nlong double _Complex z = 2.0L + 3.0L*I;\nlong double im = cimagl(z); // 3.0L"
        },
        {
          "id": "id-conj",
          "token": "conj",
          "type": "identifier",
          "description": "Complex conjugate of `double _Complex`.",
          "example": "#include <complex.h>\ndouble _Complex z = 1.0 + 2.0*I;\ndouble _Complex r = conj(z); // 1.0 - 2.0i"
        },
        {
          "id": "id-conjf",
          "token": "conjf",
          "type": "identifier",
          "description": "`float _Complex` version of `conj`.",
          "example": "#include <complex.h>\nfloat _Complex z = 1.0f + 2.0f*I;\nfloat _Complex r = conjf(z); // 1.0f - 2.0fi"
        },
        {
          "id": "id-conjl",
          "token": "conjl",
          "type": "identifier",
          "description": "`long double _Complex` version of `conj`.",
          "example": "#include <complex.h>\nlong double _Complex z = 1.0L + 2.0L*I;\nlong double _Complex r = conjl(z); // 1.0L - 2.0Li"
        },
        {
          "id": "id-copysign",
          "token": "copysign",
          "type": "identifier",
          "description": "Returns a value with magnitude of first argument and sign of second.",
          "example": "#include <math.h>\ndouble r = copysign(3.5, -1.0); // -3.5"
        },
        {
          "id": "id-copysignf",
          "token": "copysignf",
          "type": "identifier",
          "description": "`float` version of `copysign`.",
          "example": "#include <math.h>\nfloat r = copysignf(2.0f, -0.0f); // -2.0f"
        },
        {
          "id": "id-copysignl",
          "token": "copysignl",
          "type": "identifier",
          "description": "`long double` version of `copysign`.",
          "example": "#include <math.h>\nlong double r = copysignl(2.0L, -0.0L); // -2.0L"
        },
        {
          "id": "id-cos",
          "token": "cos",
          "type": "identifier",
          "description": "Cosine of an angle in radians (`double`).",
          "example": "#include <math.h>\ndouble r = cos(0.0); // 1.0"
        },
        {
          "id": "id-cosf",
          "token": "cosf",
          "type": "identifier",
          "description": "`float` version of `cos`.",
          "example": "#include <math.h>\nfloat r = cosf(0.0f); // 1.0f"
        },
        {
          "id": "id-cosh",
          "token": "cosh",
          "type": "identifier",
          "description": "Hyperbolic cosine (`double`).",
          "example": "#include <math.h>\ndouble r = cosh(0.0); // 1.0"
        },
        {
          "id": "id-coshf",
          "token": "coshf",
          "type": "identifier",
          "description": "`float` version of `cosh`.",
          "example": "#include <math.h>\nfloat r = coshf(0.0f); // 1.0f"
        },
        {
          "id": "id-coshl",
          "token": "coshl",
          "type": "identifier",
          "description": "`long double` version of `cosh`.",
          "example": "#include <math.h>\nlong double r = coshl(0.0L); // 1.0L"
        },
        {
          "id": "id-cosl",
          "token": "cosl",
          "type": "identifier",
          "description": "`long double` version of `cos`.",
          "example": "#include <math.h>\nlong double r = cosl(0.0L); // 1.0L"
        },
        {
          "id": "id-cpow",
          "token": "cpow",
          "type": "identifier",
          "description": "Complex power: raises `double _Complex` base to `double _Complex` exponent.",
          "example": "#include <complex.h>\ndouble _Complex r = cpow(2.0 + 0.0*I, 3.0 + 0.0*I); // 8.0 + 0.0i"
        },
        {
          "id": "id-cpowf",
          "token": "cpowf",
          "type": "identifier",
          "description": "`float _Complex` version of `cpow`.",
          "example": "#include <complex.h>\nfloat _Complex r = cpowf(2.0f + 0.0f*I, 3.0f + 0.0f*I); // 8.0f + 0.0fi"
        },
        {
          "id": "id-cpowl",
          "token": "cpowl",
          "type": "identifier",
          "description": "`long double _Complex` version of `cpow`.",
          "example": "#include <complex.h>\nlong double _Complex r = cpowl(2.0L + 0.0L*I, 3.0L + 0.0L*I); // 8.0L + 0.0Li"
        },
        {
          "id": "id-cproj",
          "token": "cproj",
          "type": "identifier",
          "description": "Complex projection: maps finite values to themselves; maps infinities to a point on the Riemann sphere.",
          "example": "#include <complex.h>\ndouble _Complex r = cproj(INFINITY + INFINITY*I);\n// r is infinite on the real axis, imag == copysign(0.0, cimag)"
        },
        {
          "id": "id-cprojf",
          "token": "cprojf",
          "type": "identifier",
          "description": "`float _Complex` version of `cproj`.",
          "example": "#include <complex.h>\nfloat _Complex r = cprojf(INFINITY + INFINITY*I);"
        },
        {
          "id": "id-cprojl",
          "token": "cprojl",
          "type": "identifier",
          "description": "`long double _Complex` version of `cproj`.",
          "example": "#include <complex.h>\nlong double _Complex r = cprojl(INFINITY + INFINITY*I);"
        },
        {
          "id": "id-creal",
          "token": "creal",
          "type": "identifier",
          "description": "Real part extractor for `double _Complex`.",
          "example": "#include <complex.h>\ndouble _Complex z = 2.0 + 3.0*I;\ndouble re = creal(z); // 2.0"
        },
        {
          "id": "id-crealf",
          "token": "crealf",
          "type": "identifier",
          "description": "`float _Complex` version of `creal`.",
          "example": "#include <complex.h>\nfloat _Complex z = 2.0f + 3.0f*I;\nfloat re = crealf(z); // 2.0f"
        },
        {
          "id": "id-creall",
          "token": "creall",
          "type": "identifier",
          "description": "`long double _Complex` version of `creal`.",
          "example": "#include <complex.h>\nlong double _Complex z = 2.0L + 3.0L*I;\nlong double re = creall(z); // 2.0L"
        },
        {
          "id": "id-ctime",
          "token": "ctime",
          "type": "identifier",
          "description": "Converts `time_t` to a human-readable local time string. Returns a pointer to a static buffer (not thread-safe).",
          "example": "#include <time.h>\ntime_t now = time(NULL);\nchar *s = ctime(&now);\n// e.g., s == \"Sat Sep 13 05:12:08 2025\\n\""
        },
        {
          "id": "id-difftime",
          "token": "difftime",
          "type": "identifier",
          "description": "Returns the difference in seconds between two `time_t` values as `double`.",
          "example": "#include <time.h>\ntime_t start = 1000, end = 1005;\ndouble dt = difftime(end, start); // 5.0"
        },
        {
          "id": "id-div",
          "token": "div",
          "type": "identifier",
          "description": "Integer division producing quotient and remainder for `int`.",
          "example": "#include <stdlib.h>\ndiv_t r = div(10, 3);\n// r.quot == 3, r.rem == 1"
        },
        {
          "id": "id-div_t",
          "token": "div_t",
          "type": "identifier",
          "description": "Result type returned by `div`, with members `int quot; int rem;`.",
          "example": "#include <stdlib.h>\ndiv_t r = div(7, -3);\n// r.quot == -2, r.rem == 1"
        },
        {
          "id": "id-double_t",
          "token": "double_t",
          "type": "identifier",
          "description": "Floating type from `<math.h>` used for efficient double-precision evaluation (typically an alias of `double`).",
          "example": "#include <math.h>\ndouble_t y = 0.0; // usually the same representation as double"
        },
        {
          "id": "id-erf",
          "token": "erf",
          "type": "identifier",
          "description": "Error function of a real `double` argument.",
          "example": "#include <math.h>\ndouble v = erf(1.0); // \u2248 0.842701"
        },
        {
          "id": "id-erfc",
          "token": "erfc",
          "type": "identifier",
          "description": "Complementary error function: `1 - erf(x)` for `double`.",
          "example": "#include <math.h>\ndouble v = erfc(1.0); // \u2248 0.157299"
        },
        {
          "id": "id-erfcf",
          "token": "erfcf",
          "type": "identifier",
          "description": "`float` version of `erfc`.",
          "example": "#include <math.h>\nfloat v = erfcf(1.0f); // \u2248 0.157299f"
        },
        {
          "id": "id-erfcl",
          "token": "erfcl",
          "type": "identifier",
          "description": "`long double` version of `erfc`.",
          "example": "#include <math.h>\nlong double v = erfcl(1.0L); // \u2248 0.157299L"
        },
        {
          "id": "id-erff",
          "token": "erff",
          "type": "identifier",
          "description": "`float` error function.",
          "example": "#include <math.h>\nfloat v = erff(1.0f); // \u2248 0.842701f"
        },
        {
          "id": "id-erfl",
          "token": "erfl",
          "type": "identifier",
          "description": "`long double` error function.",
          "example": "#include <math.h>\nlong double v = erfl(1.0L); // \u2248 0.842701L"
        },
        {
          "id": "id-errno",
          "token": "errno",
          "type": "identifier",
          "description": "<a id=\"id-exit\"></a>",
          "example": null
        },
        {
          "id": "id-exp",
          "token": "exp",
          "type": "identifier",
          "description": "Natural exponential e^x for `double`.",
          "example": "#include <math.h>\ndouble v = exp(2.0); // \u2248 7.389056"
        },
        {
          "id": "id-exp2",
          "token": "exp2",
          "type": "identifier",
          "description": "Base-2 exponential 2^x for `double`.",
          "example": "#include <math.h>\ndouble v = exp2(3.0); // 8.0"
        },
        {
          "id": "id-exp2f",
          "token": "exp2f",
          "type": "identifier",
          "description": "`float` version of `exp2`.",
          "example": "#include <math.h>\nfloat v = exp2f(3.0f); // 8.0f"
        },
        {
          "id": "id-exp2l",
          "token": "exp2l",
          "type": "identifier",
          "description": "`long double` version of `exp2`.",
          "example": "#include <math.h>\nlong double v = exp2l(3.0L); // 8.0L"
        },
        {
          "id": "id-expf",
          "token": "expf",
          "type": "identifier",
          "description": "`float` exponential e^x.",
          "example": "#include <math.h>\nfloat v = expf(2.0f); // \u2248 7.389056f"
        },
        {
          "id": "id-expl",
          "token": "expl",
          "type": "identifier",
          "description": "`long double` exponential e^x.",
          "example": "#include <math.h>\nlong double v = expl(2.0L); // \u2248 7.389056L"
        },
        {
          "id": "id-expm1",
          "token": "expm1",
          "type": "identifier",
          "description": "Computes e^x - 1 with good precision for small x (`double`).",
          "example": "#include <math.h>\ndouble v = expm1(0.1); // \u2248 0.105171"
        },
        {
          "id": "id-expm1f",
          "token": "expm1f",
          "type": "identifier",
          "description": "`float` version of `expm1`.",
          "example": "#include <math.h>\nfloat v = expm1f(0.1f); // \u2248 0.105171f"
        },
        {
          "id": "id-expm1l",
          "token": "expm1l",
          "type": "identifier",
          "description": "`long double` version of `expm1`.",
          "example": "#include <math.h>\nlong double v = expm1l(0.1L); // \u2248 0.105171L"
        },
        {
          "id": "id-fabs",
          "token": "fabs",
          "type": "identifier",
          "description": "Absolute value of a `double`.",
          "example": "#include <math.h>\ndouble v = fabs(-5.5); // 5.5"
        },
        {
          "id": "id-fabsf",
          "token": "fabsf",
          "type": "identifier",
          "description": "`float` absolute value.",
          "example": "#include <math.h>\nfloat v = fabsf(-5.5f); // 5.5f"
        },
        {
          "id": "id-fabsl",
          "token": "fabsl",
          "type": "identifier",
          "description": "`long double` absolute value.",
          "example": "#include <math.h>\nlong double v = fabsl(-5.5L); // 5.5L"
        },
        {
          "id": "id-fclose",
          "token": "fclose",
          "type": "identifier",
          "description": "Closes a stream; flushes buffers. Returns 0 on success, EOF on error.",
          "example": "#include <stdio.h>\nFILE *fp = fopen(\"x.txt\", \"w\");\nint rc = fclose(fp); // 0 on success"
        },
        {
          "id": "id-feclearexcept",
          "token": "feclearexcept",
          "type": "identifier",
          "description": "Clears the specified floating\u2011point exception flags given by the bitmask (e.g., `FE_DIVBYZERO`, `FE_INVALID`). Returns 0 on success, nonzero on failure.",
          "example": null
        },
        {
          "id": "id-fegetenv",
          "token": "fegetenv",
          "type": "identifier",
          "description": "Stores the current floating\u2011point environment (rounding mode and exception flags) into a `fenv_t` object. Returns 0 on success.",
          "example": null
        },
        {
          "id": "id-fegetexceptflag",
          "token": "fegetexceptflag",
          "type": "identifier",
          "description": "Saves the state of the specified floating\u2011point exception flags into an `fexcept_t` object for later restoration. Returns 0 on success.",
          "example": null
        },
        {
          "id": "id-fegetround",
          "token": "fegetround",
          "type": "identifier",
          "description": "Gets the current rounding direction, returning one of the macros such as `FE_TONEAREST`, `FE_DOWNWARD`, `FE_UPWARD`, or `FE_TOWARDZERO`.",
          "example": null
        },
        {
          "id": "id-feholdexcept",
          "token": "feholdexcept",
          "type": "identifier",
          "description": "Saves the current floating\u2011point environment to a `fenv_t` object, then clears all exception flags and sets a non\u2011stop mode. Returns 0 on success.",
          "example": null
        },
        {
          "id": "id-fenv_t",
          "token": "fenv_t",
          "type": "identifier",
          "description": "Type that represents the entire floating\u2011point environment (rounding mode and exception flags) used by `<fenv.h>` functions.",
          "example": null
        },
        {
          "id": "id-feraiseexcept",
          "token": "feraiseexcept",
          "type": "identifier",
          "description": "Raises (sets) the specified floating\u2011point exception flags. Returns 0 if all requested exceptions were successfully raised.",
          "example": null
        },
        {
          "id": "id-fetestexcept",
          "token": "fetestexcept",
          "type": "identifier",
          "description": "Tests which of the specified floating\u2011point exceptions are currently set and returns a bitwise OR of those flags.",
          "example": null
        },
        {
          "id": "id-feof",
          "token": "feof",
          "type": "identifier",
          "description": "Tests the end\u2011of\u2011file indicator for a stream. Returns nonzero if EOF has been reached; otherwise returns 0.",
          "example": null
        },
        {
          "id": "id-feraiseexcept",
          "token": "feraiseexcept",
          "type": "identifier",
          "description": "<a id=\"id-ferror\"></a>",
          "example": null
        },
        {
          "id": "id-fesetenv",
          "token": "fesetenv",
          "type": "identifier",
          "description": "Installs the floating\u2011point environment from a `fenv_t` object, replacing the current environment. Returns 0 on success.",
          "example": null
        },
        {
          "id": "id-fesetexceptflag",
          "token": "fesetexceptflag",
          "type": "identifier",
          "description": "Sets the state of the specified floating\u2011point exception flags from an `fexcept_t` object without raising exceptions. Returns 0 on success.",
          "example": null
        },
        {
          "id": "id-fesetround",
          "token": "fesetround",
          "type": "identifier",
          "description": "Sets the current rounding direction to the given macro (e.g., `FE_TONEAREST`, `FE_UPWARD`). Returns 0 on success, nonzero on failure.",
          "example": null
        },
        {
          "id": "id-feupdateenv",
          "token": "feupdateenv",
          "type": "identifier",
          "description": "Restores the floating\u2011point environment from a `fenv_t` object and then raises any exceptions that were set prior to the call. Returns 0 on success.",
          "example": null
        },
        {
          "id": "id-fexcept_t",
          "token": "fexcept_t",
          "type": "identifier",
          "description": "Type that holds the state of the floating\u2011point exception flags, used with `fegetexceptflag`/`fesetexceptflag`.",
          "example": null
        },
        {
          "id": "id-fflush",
          "token": "fflush",
          "type": "identifier",
          "description": "Flushes any buffered output for a stream to its underlying file. If `stream` is `NULL`, all open output streams are flushed. Returns 0 on success, `EOF` on error.",
          "example": null
        },
        {
          "id": "id-fgetc",
          "token": "fgetc",
          "type": "identifier",
          "description": "Reads the next byte from a stream and returns it as an unsigned char cast to int, or `EOF` on end/error.",
          "example": "#include <stdio.h>\n// assume file has \"Hello, World\\n\"\nFILE *fp = fopen(\"example.txt\", \"r\");\nint ch = fgetc(fp);\n// ch == 'H'\nfclose(fp);"
        },
        {
          "id": "id-fgetpos",
          "token": "fgetpos",
          "type": "identifier",
          "description": "Stores the current file position in a `fpos_t` object for later restoration with `fsetpos`. Returns 0 on success.",
          "example": "#include <stdio.h>\nFILE *fp = fopen(\"example.txt\", \"r\");\nfpos_t pos; int rc = fgetpos(fp, &pos); // rc == 0 on success\nfclose(fp);"
        },
        {
          "id": "id-fgets",
          "token": "fgets",
          "type": "identifier",
          "description": "Reads at most `n-1` chars from stream into buffer, stopping at newline or EOF; writes a terminating `\\0`. Returns `buf` on success or `NULL`.",
          "example": "#include <stdio.h>\n// example.txt: \"Hello, World!\\n\"\nchar buf[64]; FILE *fp = fopen(\"example.txt\", \"r\");\nchar *p = fgets(buf, sizeof buf, fp);\n// buf == \"Hello, World!\\n\"\nfclose(fp);"
        },
        {
          "id": "id-fiprintf",
          "token": "fiprintf",
          "type": "identifier",
          "description": "<a id=\"id-floor\"></a>",
          "example": null
        },
        {
          "id": "id-floorf",
          "token": "floorf",
          "type": "identifier",
          "description": "`float` version of `floor`.",
          "example": "#include <math.h>\nfloat r = floorf(2.9f); // r == 2.0f"
        },
        {
          "id": "id-floorl",
          "token": "floorl",
          "type": "identifier",
          "description": "`long double` version of `floor`.",
          "example": "#include <math.h>\nlong double r = floorl(3.0L); // r == 3.0L"
        },
        {
          "id": "id-fma",
          "token": "fma",
          "type": "identifier",
          "description": "Fused multiply-add: computes `x*y+z` with a single rounding.",
          "example": "#include <math.h>\ndouble r = fma(2.0, 3.0, 4.0); // r == 10.0"
        },
        {
          "id": "id-fmaf",
          "token": "fmaf",
          "type": "identifier",
          "description": "`float` version of `fma`.",
          "example": "#include <math.h>\nfloat r = fmaf(1.5f, 2.0f, 1.0f); // r == 4.0f"
        },
        {
          "id": "id-fmal",
          "token": "fmal",
          "type": "identifier",
          "description": "`long double` version of `fma`.",
          "example": "#include <math.h>\nlong double r = fmal(2.0L, 2.5L, 0.5L); // r == 5.5L"
        },
        {
          "id": "id-fmax",
          "token": "fmax",
          "type": "identifier",
          "description": "Returns the larger of two `double` values; if one operand is NaN, returns the other.",
          "example": "#include <math.h>\ndouble r = fmax(2.0, 3.5); // r == 3.5"
        },
        {
          "id": "id-fmaxf",
          "token": "fmaxf",
          "type": "identifier",
          "description": "`float` version of `fmax`.",
          "example": "#include <math.h>\nfloat r = fmaxf(-1.0f, -2.0f); // r == -1.0f"
        },
        {
          "id": "id-fmaxl",
          "token": "fmaxl",
          "type": "identifier",
          "description": "`long double` version of `fmax`.",
          "example": "#include <math.h>\nlong double r = fmaxl(1.0L, 1.0L); // r == 1.0L"
        },
        {
          "id": "id-fmin",
          "token": "fmin",
          "type": "identifier",
          "description": "Returns the smaller of two `double` values; if one operand is NaN, returns the other.",
          "example": "#include <math.h>\ndouble r = fmin(2.0, 3.5); // r == 2.0"
        },
        {
          "id": "id-fminf",
          "token": "fminf",
          "type": "identifier",
          "description": "`float` version of `fmin`.",
          "example": "#include <math.h>\nfloat r = fminf(-1.0f, -2.0f); // r == -2.0f"
        },
        {
          "id": "id-fminl",
          "token": "fminl",
          "type": "identifier",
          "description": "`long double` version of `fmin`.",
          "example": "#include <math.h>\nlong double r = fminl(1.0L, 1.5L); // r == 1.0L"
        },
        {
          "id": "id-fmod",
          "token": "fmod",
          "type": "identifier",
          "description": "Floating remainder of `x/y` with the sign of `x`: `x - trunc(x/y)*y`.",
          "example": "#include <math.h>\ndouble r = fmod(7.0, 3.0); // r == 1.0"
        },
        {
          "id": "id-fmodf",
          "token": "fmodf",
          "type": "identifier",
          "description": "`float` version of `fmod`.",
          "example": "#include <math.h>\nfloat r = fmodf(7.0f, 2.5f); // r == 2.0f"
        },
        {
          "id": "id-fmodl",
          "token": "fmodl",
          "type": "identifier",
          "description": "`long double` version of `fmod`.",
          "example": "#include <math.h>\nlong double r = fmodl(5.0L, 2.0L); // r == 1.0L"
        },
        {
          "id": "id-fopen",
          "token": "fopen",
          "type": "identifier",
          "description": "Opens a file and associates a stream. Returns `FILE*` or `NULL` on failure. Mode controls read/write/append, text vs binary.",
          "example": "#include <stdio.h>\nFILE *fp = fopen(\"data.bin\", \"rb\"); // open for reading binary\n// fp != NULL on success\nif (fp) fclose(fp);"
        },
        {
          "id": "id-fprintf",
          "token": "fprintf",
          "type": "identifier",
          "description": "Formatted print to a stream; returns number of characters written or a negative value on error.",
          "example": "#include <stdio.h>\nFILE *fp = fopen(\"out.txt\", \"w\");\nint n = fprintf(fp, \"Name: %s, Age: %d\\n\", \"Alice\", 30);\n// n >= 0, file contains: \"Name: Alice, Age: 30\\n\"\nfclose(fp);"
        },
        {
          "id": "id-fputc",
          "token": "fputc",
          "type": "identifier",
          "description": "Writes a byte (unsigned char) to a stream. Returns the written byte or `EOF` on error.",
          "example": "#include <stdio.h>\nFILE *fp = fopen(\"out.txt\", \"w\");\nint rc = fputc('A', fp); // rc == 'A'\nfclose(fp);"
        },
        {
          "id": "id-fputs",
          "token": "fputs",
          "type": "identifier",
          "description": "Writes a string (excluding the terminating `\\0`) to a stream. Returns a nonnegative value on success or `EOF` on error.",
          "example": "#include <stdio.h>\nFILE *fp = fopen(\"out.txt\", \"w\");\nint rc = fputs(\"Hello, World!\\n\", fp); // rc >= 0; file contains the line\nfclose(fp);"
        },
        {
          "id": "id-fread",
          "token": "fread",
          "type": "identifier",
          "description": "Reads up to `count` items of size `size` into `ptr`. Returns the number of items read.",
          "example": "#include <stdio.h>\nchar buf[5]; FILE *fp = fopen(\"example.txt\", \"r\");\nsize_t n = fread(buf, 1, 5, fp); // n == 5 if 5 bytes available\nfclose(fp);"
        },
        {
          "id": "id-free",
          "token": "free",
          "type": "identifier",
          "description": "<a id=\"id-freopen\"></a>",
          "example": null
        },
        {
          "id": "id-frexp",
          "token": "frexp",
          "type": "identifier",
          "description": "Decomposes a `double` into mantissa and exponent such that `x = m * 2^exp`, with `m` in [0.5, 1.0).",
          "example": "#include <math.h>\nint e; double m = frexp(8.0, &e); // m == 0.5, e == 4 (0.5*2^4 == 8)"
        },
        {
          "id": "id-frexpf",
          "token": "frexpf",
          "type": "identifier",
          "description": "`float` version of `frexp`.",
          "example": "#include <math.h>\nint e; float m = frexpf(3.0f, &e); // m == 0.75f, e == 2 (0.75*2^2 == 3)"
        },
        {
          "id": "id-frexpl",
          "token": "frexpl",
          "type": "identifier",
          "description": "`long double` version of `frexp`.",
          "example": "#include <math.h>\nint e; long double m = frexpl(1.0L, &e); // m == 0.5L, e == 1"
        },
        {
          "id": "id-fscanf",
          "token": "fscanf",
          "type": "identifier",
          "description": "Scans formatted input from a stream; returns number of input items assigned, or `EOF` on error/EOF before any assignment.",
          "example": "#include <stdio.h>\nchar name[32]; int age; FILE *fp = fopen(\"in.txt\", \"r\");\nint n = fscanf(fp, \"Name: %31s, Age: %d\", name, &age);\n// if file has \"Name: Bob, Age: 25\", then n == 2, name==\"Bob\", age==25\nfclose(fp);"
        },
        {
          "id": "id-fseek",
          "token": "fseek",
          "type": "identifier",
          "description": "Sets the file position indicator relative to `SEEK_SET`, `SEEK_CUR`, or `SEEK_END`. Returns 0 on success.",
          "example": "#include <stdio.h>\nFILE *fp = fopen(\"example.txt\", \"r\");\nfseek(fp, 5, SEEK_SET);\nint ch = fgetc(fp);\n// If file starts \"Hello, World\", ch == ','\nfclose(fp);"
        },
        {
          "id": "id-fsetpos",
          "token": "fsetpos",
          "type": "identifier",
          "description": "Restores a file position saved by `fgetpos`. Returns 0 on success; clears end-of-file indicator.",
          "example": "#include <stdio.h>\nFILE *fp = fopen(\"example.txt\", \"r\");\nfpos_t pos; fgetpos(fp, &pos);\nint c1 = fgetc(fp); // read one char\nfsetpos(fp, &pos);\nint c2 = fgetc(fp); // c2 == c1\nfclose(fp);"
        },
        {
          "id": "id-ftell",
          "token": "ftell",
          "type": "identifier",
          "description": "Returns the current file position as a long, or -1L on error.",
          "example": "#include <stdio.h>\nFILE *fp = fopen(\"example.txt\", \"r\");\nfgetc(fp);\nlong pos = ftell(fp); // 1\nfclose(fp);"
        },
        {
          "id": "id-fwide",
          "token": "fwide",
          "type": "identifier",
          "description": "Determines or sets the orientation of a stream: returns >0 for wide\u2011oriented, <0 for byte\u2011oriented, 0 if undecided. If `mode>0`, attempts to make it wide; if `mode<0`, byte.",
          "example": "#include <wchar.h>\nint o = fwide(stdout, 0); // query orientation; commonly 0 or <0"
        },
        {
          "id": "id-fwprintf",
          "token": "fwprintf",
          "type": "identifier",
          "description": "Wide\u2011character equivalent of `fprintf`; writes formatted wide text to a wide\u2011oriented stream.",
          "example": "#include <wchar.h>\nint n = fwprintf(stdout, L\"Pi \u2248 %.2f\\n\", 3.14159); // prints wide text"
        },
        {
          "id": "id-fwrite",
          "token": "fwrite",
          "type": "identifier",
          "description": "Writes up to `count` items of size `size` from `ptr` to stream. Returns the number of items written.",
          "example": "#include <stdio.h>\nconst char *s = \"ABC\";\nFILE *fp = fopen(\"out.bin\", \"wb\");\nsize_t n = fwrite(s, 1, 3, fp); // n == 3, file gets ABC\nfclose(fp);"
        },
        {
          "id": "id-fwscanf",
          "token": "fwscanf",
          "type": "identifier",
          "description": "Wide\u2011character equivalent of `fscanf`; reads formatted wide text from a wide\u2011oriented stream.",
          "example": "#include <wchar.h>\n// fwscanf(fp, L\"%ls\", buf); // reads a wide string"
        },
        {
          "id": "id-getc",
          "token": "getc",
          "type": "identifier",
          "description": "Reads the next byte from a stream (often a macro). Returns the byte as unsigned char cast to int, or `EOF`.",
          "example": "#include <stdio.h>\nFILE *fp = fopen(\"example.txt\", \"r\");\nint ch = getc(fp); // e.g., 'H'\nfclose(fp);"
        },
        {
          "id": "id-getchar",
          "token": "getchar",
          "type": "identifier",
          "description": "Reads the next byte from `stdin`. Returns the byte as unsigned char cast to int, or `EOF`.",
          "example": "#include <stdio.h>\n// getchar() waits for input"
        },
        {
          "id": "id-getenv",
          "token": "getenv",
          "type": "identifier",
          "description": "Returns the value of an environment variable as a C string, or `NULL` if not set. The pointer may be invalidated by subsequent calls that modify the environment.",
          "example": "#include <stdlib.h>\nconst char *p = getenv(\"HOME\"); // e.g., \"/Users/alice\" or NULL"
        },
        {
          "id": "id-gets",
          "token": "gets",
          "type": "identifier",
          "description": "Unsafe input function removed in C11; do not use. Use `fgets` instead.",
          "example": null
        },
        {
          "id": "id-gmtime",
          "token": "gmtime",
          "type": "identifier",
          "description": "Converts `time_t` to broken\u2011down UTC time in a static `struct tm`. Not thread-safe; use `gmtime_r` where available.",
          "example": "#include <time.h>\ntime_t t = 0; struct tm *tm = gmtime(&t); // tm->tm_year == 70 (1970)"
        },
        {
          "id": "id-hypot",
          "token": "hypot",
          "type": "identifier",
          "description": "Computes `sqrt(x*x + y*y)` without undue overflow/underflow.",
          "example": "#include <math.h>\ndouble r = hypot(3.0, 4.0); // r == 5.0"
        },
        {
          "id": "id-hypotf",
          "token": "hypotf",
          "type": "identifier",
          "description": "`float` version of `hypot`.",
          "example": "#include <math.h>\nfloat r = hypotf(3.0f, 4.0f); // r == 5.0f"
        },
        {
          "id": "id-hypotl",
          "token": "hypotl",
          "type": "identifier",
          "description": "`long double` version of `hypot`.",
          "example": "#include <math.h>\nlong double r = hypotl(3.0L, 4.0L); // r == 5.0L"
        },
        {
          "id": "id-ilogb",
          "token": "ilogb",
          "type": "identifier",
          "description": "Extracts the unbiased exponent of a floating value as an `int` (FP exponent function).",
          "example": "#include <math.h>\nint e = ilogb(8.0); // e == 3 (since 8 == 2^3)"
        },
        {
          "id": "id-ilogbf",
          "token": "ilogbf",
          "type": "identifier",
          "description": "`float` version of `ilogb`.",
          "example": "#include <math.h>\nint e = ilogbf(0.5f); // e == -1 (0.5 == 2^-1)"
        },
        {
          "id": "id-ilogbl",
          "token": "ilogbl",
          "type": "identifier",
          "description": "`long double` version of `ilogb`.",
          "example": "#include <math.h>\nint e = ilogbl(1.0L); // e == 0"
        },
        {
          "id": "id-imaxabs",
          "token": "imaxabs",
          "type": "identifier",
          "description": "Returns absolute value of a `intmax_t` integer.",
          "example": "#include <inttypes.h>\nintmax_t r = imaxabs((intmax_t)-5); // r == 5"
        },
        {
          "id": "id-imaxdiv",
          "token": "imaxdiv",
          "type": "identifier",
          "description": "Divides two `intmax_t` values, returning quotient and remainder in `imaxdiv_t`.",
          "example": "#include <inttypes.h>\nimaxdiv_t d = imaxdiv(10, 3); // d.quot == 3, d.rem == 1"
        },
        {
          "id": "id-isalnum",
          "token": "isalnum",
          "type": "identifier",
          "description": "Returns nonzero if the character is alphanumeric (letter or digit). Argument must be `EOF` or `unsigned char` value.",
          "example": "#include <ctype.h>\n#include <stdio.h>\nint r = isalnum('A'); // r != 0"
        },
        {
          "id": "id-isalpha",
          "token": "isalpha",
          "type": "identifier",
          "description": "Returns nonzero if the character is an alphabetic letter. Argument must be `EOF` or `unsigned char` value.",
          "example": "#include <ctype.h>\nint r = isalpha('1'); // r == 0"
        },
        {
          "id": "id-isblank",
          "token": "isblank",
          "type": "identifier",
          "description": "Returns nonzero if the character is a blank (space or horizontal tab).",
          "example": "#include <ctype.h>\nint r = isblank('\\t'); // r != 0"
        },
        {
          "id": "id-iscntrl",
          "token": "iscntrl",
          "type": "identifier",
          "description": "Returns nonzero if the character is a control character.",
          "example": "#include <ctype.h>\nint r = iscntrl('\\n'); // r != 0"
        },
        {
          "id": "id-isdigit",
          "token": "isdigit",
          "type": "identifier",
          "description": "Returns nonzero if the character is a decimal digit ('0'..'9').",
          "example": "#include <ctype.h>\nint r = isdigit('5'); // r != 0"
        },
        {
          "id": "id-isfinite",
          "token": "isfinite",
          "type": "identifier",
          "description": "<a id=\"id-isgraph\"></a>",
          "example": null
        },
        {
          "id": "id-isgreater",
          "token": "isgreater",
          "type": "identifier",
          "description": "<a id=\"id-isgreaterequal\"></a>",
          "example": null
        },
        {
          "id": "id-isinf",
          "token": "isinf",
          "type": "identifier",
          "description": "<a id=\"id-isless\"></a>",
          "example": null
        },
        {
          "id": "id-islessequal",
          "token": "islessequal",
          "type": "identifier",
          "description": "<a id=\"id-islessgreater\"></a>",
          "example": null
        },
        {
          "id": "id-islower",
          "token": "islower",
          "type": "identifier",
          "description": "Returns nonzero if the character is a lowercase letter.",
          "example": "#include <ctype.h>\nint r = islower('g'); // r != 0"
        },
        {
          "id": "id-isnan",
          "token": "isnan",
          "type": "identifier",
          "description": "<a id=\"id-isnormal\"></a>",
          "example": null
        },
        {
          "id": "id-isprint",
          "token": "isprint",
          "type": "identifier",
          "description": "Returns nonzero if the character is printable (including space).",
          "example": "#include <ctype.h>\nint r = isprint(' '); // r != 0"
        },
        {
          "id": "id-ispunct",
          "token": "ispunct",
          "type": "identifier",
          "description": "Returns nonzero if the character is a punctuation character.",
          "example": "#include <ctype.h>\nint r = ispunct('!'); // r != 0"
        },
        {
          "id": "id-isspace",
          "token": "isspace",
          "type": "identifier",
          "description": "Returns nonzero if the character is whitespace (space, tab, newline, vertical tab, form feed, carriage return).",
          "example": "#include <ctype.h>\nint r = isspace('\\n'); // r != 0"
        },
        {
          "id": "id-isunordered",
          "token": "isunordered",
          "type": "identifier",
          "description": "<a id=\"id-isupper\"></a>",
          "example": null
        },
        {
          "id": "id-iswalnum",
          "token": "iswalnum",
          "type": "identifier",
          "description": "Returns nonzero if the wide character is alphanumeric (letter or decimal digit)\nin the current locale.",
          "example": "#include <wctype.h>\nint a = iswalnum(L'A'); // a != 0\nint b = iswalnum(L'7'); // b != 0\nint c = iswalnum(L'#'); // c == 0"
        },
        {
          "id": "id-iswalpha",
          "token": "iswalpha",
          "type": "identifier",
          "description": "Returns nonzero if the wide character is a letter in the current locale.",
          "example": "#include <wctype.h>\nint r1 = iswalpha(L'Z'); // r1 != 0\nint r2 = iswalpha(L'9'); // r2 == 0"
        },
        {
          "id": "id-iswblank",
          "token": "iswblank",
          "type": "identifier",
          "description": "Returns nonzero if the wide character is a blank character (space or horizontal\ntab). Other whitespace like newline is not considered blank.",
          "example": "#include <wctype.h>\nint s = iswblank(L' ');  // s != 0\nint t = iswblank(L'\\t'); // t != 0\nint n = iswblank(L'\\n'); // n == 0"
        },
        {
          "id": "id-iswcntrl",
          "token": "iswcntrl",
          "type": "identifier",
          "description": "Returns nonzero if the wide character is a control character (non-printing).",
          "example": "#include <wctype.h>\nint r1 = iswcntrl(L'\\n'); // r1 != 0\nint r2 = iswcntrl(L'A');  // r2 == 0"
        },
        {
          "id": "id-iswctype",
          "token": "iswctype",
          "type": "identifier",
          "description": "Tests a wide character against a character class identified by a `wctype_t`\nvalue obtained from `wctype(\"class\")`.\n\nCommon classes include: \"alnum\", \"alpha\", \"blank\", \"cntrl\", \"digit\",\n\"graph\", \"lower\", \"print\", \"punct\", \"space\", \"upper\", \"xdigit\".",
          "example": "#include <wctype.h>\nwctype_t digit_class = wctype(\"digit\");\nint r1 = iswctype(L'5', digit_class); // r1 != 0\nint r2 = iswctype(L'G', digit_class); // r2 == 0"
        },
        {
          "id": "id-iswdigit",
          "token": "iswdigit",
          "type": "identifier",
          "description": "Returns nonzero if the wide character is a decimal digit ('0'..'9') in the\ncurrent locale.",
          "example": "#include <wctype.h>\nint r1 = iswdigit(L'3'); // r1 != 0\nint r2 = iswdigit(L'A'); // r2 == 0"
        },
        {
          "id": "id-iswgraph",
          "token": "iswgraph",
          "type": "identifier",
          "description": "Returns nonzero if the wide character is printable and not a space. Equivalent\nto `iswprint(wc) && !iswspace(wc)`.",
          "example": "#include <wctype.h>\nint r1 = iswgraph(L'!'); // r1 != 0\nint r2 = iswgraph(L' '); // r2 == 0"
        },
        {
          "id": "id-iswlower",
          "token": "iswlower",
          "type": "identifier",
          "description": "Returns nonzero if the wide character is a lowercase letter in the current\nlocale.",
          "example": "#include <wctype.h>\nint r1 = iswlower(L'a'); // r1 != 0\nint r2 = iswlower(L'A'); // r2 == 0"
        },
        {
          "id": "id-iswprint",
          "token": "iswprint",
          "type": "identifier",
          "description": "Returns nonzero if the wide character is printable, including the space\ncharacter. Control characters are not printable.",
          "example": "#include <wctype.h>\nint r1 = iswprint(L' ');  // r1 != 0\nint r2 = iswprint(L'\\n'); // r2 == 0"
        },
        {
          "id": "id-iswpunct",
          "token": "iswpunct",
          "type": "identifier",
          "description": "Returns nonzero if the wide character is a punctuation character.",
          "example": "#include <wctype.h>\nint r = iswpunct(L'!'); // r != 0"
        },
        {
          "id": "id-iswspace",
          "token": "iswspace",
          "type": "identifier",
          "description": "Returns nonzero if the wide character is whitespace (space, tab, newline,\nvertical tab, form feed, carriage return).",
          "example": "#include <wctype.h>\nint r1 = iswspace(L'\\t'); // r1 != 0\nint r2 = iswspace(L'A');  // r2 == 0"
        },
        {
          "id": "id-iswupper",
          "token": "iswupper",
          "type": "identifier",
          "description": "Returns nonzero if the wide character is an uppercase letter in the current\nlocale.",
          "example": "#include <wctype.h>\nint r1 = iswupper(L'Z'); // r1 != 0\nint r2 = iswupper(L'z'); // r2 == 0"
        },
        {
          "id": "id-iswxdigit",
          "token": "iswxdigit",
          "type": "identifier",
          "description": "Returns nonzero if the wide character is a hexadecimal digit ('0'..'9',\n'a'..'f', 'A'..'F').",
          "example": "#include <wctype.h>\nint r1 = iswxdigit(L'B'); // r1 != 0\nint r2 = iswxdigit(L'G'); // r2 == 0"
        },
        {
          "id": "id-isxdigit",
          "token": "isxdigit",
          "type": "identifier",
          "description": "Returns nonzero if the character is a hexadecimal digit ('0'..'9', 'a'..'f', 'A'..'F').",
          "example": "#include <ctype.h>\nint r = isxdigit('B'); // r != 0"
        },
        {
          "id": "id-labs",
          "token": "labs",
          "type": "identifier",
          "description": "Returns the absolute value of a `long int`.",
          "example": "#include <stdlib.h>\nlong int r = labs(-123L); // r == 123"
        },
        {
          "id": "id-ldexp",
          "token": "ldexp",
          "type": "identifier",
          "description": "Returns `x * 2^exp` as a `double`.",
          "example": "#include <math.h>\ndouble r = ldexp(3.0, 4); // r == 48.0"
        },
        {
          "id": "id-ldexpf",
          "token": "ldexpf",
          "type": "identifier",
          "description": "Returns `x * 2^exp` as a `float`.",
          "example": "#include <math.h>\nfloat r = ldexpf(3.0f, 4); // r == 48.0f"
        },
        {
          "id": "id-ldexpl",
          "token": "ldexpl",
          "type": "identifier",
          "description": "Returns `x * 2^exp` as a `long double`.",
          "example": "#include <math.h>\nlong double r = ldexpl(3.0L, 4); // r == 48.0L"
        },
        {
          "id": "id-ldiv",
          "token": "ldiv",
          "type": "identifier",
          "description": "Divides two `long int` values and returns quotient and remainder as `ldiv_t`.",
          "example": "#include <stdlib.h>\nldiv_t q = ldiv(10L, 3L); // q.quot == 3, q.rem == 1"
        },
        {
          "id": "id-ldiv_t",
          "token": "ldiv_t",
          "type": "identifier",
          "description": "Structure type returned by `ldiv`, with fields `long int quot; long int rem;`.",
          "example": "#include <stdlib.h>\nldiv_t r = ldiv(42L, 5L); // r.quot == 8, r.rem == 2"
        },
        {
          "id": "id-lgamma",
          "token": "lgamma",
          "type": "identifier",
          "description": "Returns the natural log of the absolute value of the gamma function of `x`\nas a `double`. May set the external `int signgam` to the sign of `gamma(x)`.",
          "example": "#include <math.h>\ndouble r = lgamma(5.0); // r ~= log(24) ~= 3.17805383"
        },
        {
          "id": "id-lgammaf",
          "token": "lgammaf",
          "type": "identifier",
          "description": "Float version of `lgamma`.",
          "example": "#include <math.h>\nfloat r = lgammaf(5.0f); // r ~= 3.17805383f"
        },
        {
          "id": "id-lgammal",
          "token": "lgammal",
          "type": "identifier",
          "description": "Long double version of `lgamma`.",
          "example": "#include <math.h>\nlong double r = lgammal(5.0L); // r ~= 3.17805383L"
        },
        {
          "id": "id-llabs",
          "token": "llabs",
          "type": "identifier",
          "description": "Returns the absolute value of a `long long int`.",
          "example": "#include <stdlib.h>\nlong long r = llabs(-42LL); // r == 42"
        },
        {
          "id": "id-lldiv",
          "token": "lldiv",
          "type": "identifier",
          "description": "Divides two `long long int` values and returns quotient and remainder as\n`lldiv_t`.",
          "example": "#include <stdlib.h>\nlldiv_t q = lldiv(100LL, 9LL); // q.quot == 11, q.rem == 1"
        },
        {
          "id": "id-lldiv_t",
          "token": "lldiv_t",
          "type": "identifier",
          "description": "Structure type returned by `lldiv`, with fields `long long int quot; long long int rem;`.",
          "example": "#include <stdlib.h>\nlldiv_t r = lldiv(7LL, 3LL); // r.quot == 2, r.rem == 1"
        },
        {
          "id": "id-localeconv",
          "token": "localeconv",
          "type": "identifier",
          "description": "Returns a pointer to a `struct lconv` with numeric and monetary formatting for\nthe current locale.",
          "example": "#include <locale.h>\nsetlocale(LC_ALL, \"C\");\nstruct lconv *lc = localeconv();\n// lc->decimal_point == \".\""
        },
        {
          "id": "id-localtime",
          "token": "localtime",
          "type": "identifier",
          "description": "Converts a `time_t` value to a broken-down local time `struct tm`.",
          "example": "#include <time.h>\ntime_t t = time(NULL);\nstruct tm *tm = localtime(&t); // tm != NULL"
        },
        {
          "id": "id-log",
          "token": "log",
          "type": "identifier",
          "description": "Returns the natural logarithm (base e) of `x` as a `double`.",
          "example": "#include <math.h>\ndouble r = log(2.718281828); // r ~= 1.0"
        },
        {
          "id": "id-log10",
          "token": "log10",
          "type": "identifier",
          "description": "Returns the base-10 logarithm of `x` as a `double`.",
          "example": "#include <math.h>\ndouble r = log10(1000.0); // r == 3.0"
        },
        {
          "id": "id-log10f",
          "token": "log10f",
          "type": "identifier",
          "description": "Float version of `log10`.",
          "example": "#include <math.h>\nfloat r = log10f(1000.0f); // r == 3.0f"
        },
        {
          "id": "id-log10l",
          "token": "log10l",
          "type": "identifier",
          "description": "Long double version of `log10`.",
          "example": "#include <math.h>\nlong double r = log10l(1000.0L); // r == 3.0L"
        },
        {
          "id": "id-log1p",
          "token": "log1p",
          "type": "identifier",
          "description": "Returns the natural logarithm of 1 plus `x` (i.e., `log(1+x)`) with improved\naccuracy for small `x`. Domain: `x > -1`.",
          "example": "#include <math.h>\ndouble r1 = log1p(0.0);          // r1 == 0.0\ndouble r2 = log1p(exp(1.0) - 1); // r2 ~= 1.0"
        },
        {
          "id": "id-log1pf",
          "token": "log1pf",
          "type": "identifier",
          "description": "Float version of `log1p`.",
          "example": "#include <math.h>\nfloat r = log1pf(expf(1.0f) - 1.0f); // r ~= 1.0f"
        },
        {
          "id": "id-log1pl",
          "token": "log1pl",
          "type": "identifier",
          "description": "Long double version of `log1p`.",
          "example": "#include <math.h>\nlong double r = log1pl(expl(1.0L) - 1.0L); // r ~= 1.0L"
        },
        {
          "id": "id-log2",
          "token": "log2",
          "type": "identifier",
          "description": "Returns the base-2 logarithm of `x` as a `double`. Domain: `x > 0`.",
          "example": "#include <math.h>\ndouble r = log2(16.0); // r == 4.0"
        },
        {
          "id": "id-log2f",
          "token": "log2f",
          "type": "identifier",
          "description": "Float version of `log2`.",
          "example": "#include <math.h>\nfloat r = log2f(8.0f); // r == 3.0f"
        },
        {
          "id": "id-log2l",
          "token": "log2l",
          "type": "identifier",
          "description": "Long double version of `log2`.",
          "example": "#include <math.h>\nlong double r = log2l(32.0L); // r == 5.0L"
        },
        {
          "id": "id-logb",
          "token": "logb",
          "type": "identifier",
          "description": "Returns the unbiased exponent of `x` as a floating value. For normal numbers,\nequivalent to `floor(log2(|x|))`. Domain excludes `x == 0` (returns `-HUGE_VAL`).",
          "example": "#include <math.h>\ndouble r = logb(16.0); // r == 4.0"
        },
        {
          "id": "id-logbf",
          "token": "logbf",
          "type": "identifier",
          "description": "Float version of `logb`.",
          "example": "#include <math.h>\nfloat r = logbf(0.5f); // r == -1.0f"
        },
        {
          "id": "id-logbl",
          "token": "logbl",
          "type": "identifier",
          "description": "Long double version of `logb`.",
          "example": "#include <math.h>\nlong double r = logbl(8.0L); // r == 3.0L"
        },
        {
          "id": "id-logf",
          "token": "logf",
          "type": "identifier",
          "description": "Float version of natural logarithm `log`.",
          "example": "#include <math.h>\nfloat r = logf(2.7182818f); // r ~= 1.0f"
        },
        {
          "id": "id-logl",
          "token": "logl",
          "type": "identifier",
          "description": "Long double version of natural logarithm `log`.",
          "example": "#include <math.h>\nlong double r = logl(1.0L); // r == 0.0L"
        },
        {
          "id": "id-longjmp",
          "token": "longjmp",
          "type": "identifier",
          "description": "Performs a nonlocal jump to a point saved by `setjmp`. Causes `setjmp` to\nreturn `val` (or 1 if `val == 0`).",
          "example": "#include <setjmp.h>\n#include <stdio.h>\n\njmp_buf env;\n\nvoid f(void) {\n    longjmp(env, 42);\n}\n\nint main(void) {\n    int r = setjmp(env);\n    if (r == 0) {\n        f();\n        return 1; // not reached\n    }\n    printf(\"Returned via longjmp with %d\\n\", r); // r == 42\n    return 0;\n}"
        },
        {
          "id": "id-malloc",
          "token": "malloc",
          "type": "identifier",
          "description": "Allocates `size` bytes and returns a pointer to the allocated memory, or `NULL`\nif the allocation fails. The memory is uninitialized.",
          "example": "#include <stdlib.h>\n#include <stdio.h>\n\nint *p = (int *)malloc(3 * sizeof(int));\nif (p) {\n    p[0] = 10; p[1] = 20; p[2] = 30; // OK\n    printf(\"%d %d %d\\n\", p[0], p[1], p[2]); // 10 20 30\n}\nfree(p);"
        },
        {
          "id": "id-mblen",
          "token": "mblen",
          "type": "identifier",
          "description": "Determines the number of bytes constituting the next multibyte character in the\ncurrent locale. Returns 0 for null byte, -1 on encoding error.",
          "example": "#include <stdlib.h>\nint r1 = mblen(\"A\", MB_CUR_MAX); // r1 == 1\nint r2 = mblen(\"\\0\", MB_CUR_MAX); // r2 == 0"
        },
        {
          "id": "id-mbrlen",
          "token": "mbrlen",
          "type": "identifier",
          "description": "State-dependent version of `mblen`. Returns the number of bytes of the next\nmultibyte character, (size_t)-2 if incomplete, (size_t)-1 on error.",
          "example": "#include <wchar.h>\nmbstate_t st = {0};\nsize_t n = mbrlen(\"A\", MB_CUR_MAX, &st); // n == 1"
        },
        {
          "id": "id-mbrtoc16",
          "token": "mbrtoc16",
          "type": "identifier",
          "description": "Converts the next multibyte character to `char16_t`. Returns bytes consumed,\n(size_t)-2 if incomplete, (size_t)-1 on error.",
          "example": "#include <uchar.h>\n#include <wchar.h>\nmbstate_t st = {0};\nchar16_t out;\nsize_t n = mbrtoc16(&out, \"A\", MB_CUR_MAX, &st); // n == 1, out == u'A'"
        },
        {
          "id": "id-mbrtoc32",
          "token": "mbrtoc32",
          "type": "identifier",
          "description": "Converts the next multibyte character to `char32_t`. Returns bytes consumed,\n(size_t)-2 if incomplete, (size_t)-1 on error.",
          "example": "#include <uchar.h>\n#include <wchar.h>\nmbstate_t st = {0};\nchar32_t out;\nsize_t n = mbrtoc32(&out, \"A\", MB_CUR_MAX, &st); // n == 1, out == U'A'"
        },
        {
          "id": "id-mbrtowc",
          "token": "mbrtowc",
          "type": "identifier",
          "description": "Converts the next multibyte character to `wchar_t`. Returns bytes consumed,\n(size_t)-2 if incomplete, (size_t)-1 on error.",
          "example": "#include <wchar.h>\nmbstate_t st = {0};\nwchar_t wc;\nsize_t n = mbrtowc(&wc, \"A\", MB_CUR_MAX, &st); // n == 1, wc == L'A'"
        },
        {
          "id": "id-mbsinit",
          "token": "mbsinit",
          "type": "identifier",
          "description": "Tests whether the conversion state object `mbstate_t` is in the initial state.\nReturns nonzero if initial or if the pointer is `NULL`.",
          "example": "#include <wchar.h>\nmbstate_t st = {0};\nint r = mbsinit(&st); // r != 0"
        },
        {
          "id": "id-mbsnrtowcs",
          "token": "mbsnrtowcs",
          "type": "identifier",
          "description": "Converts a multibyte string to wide string, processing at most `n` bytes.\nUpdates the source pointer. Returns number of wide characters written.",
          "example": "#include <wchar.h>\nconst char *src = \"Hi\";\nmbstate_t st = {0};\nwchar_t dst[8];\nsize_t r = mbsnrtowcs(dst, &src, 2, 8, &st); // r == 2"
        },
        {
          "id": "id-mbsrtowcs",
          "token": "mbsrtowcs",
          "type": "identifier",
          "description": "Converts a NUL-terminated multibyte string to a wide-character string. Returns\nthe number of wide characters written (excluding terminator).",
          "example": "#include <wchar.h>\nconst char *src = \"Hello\";\nmbstate_t st = {0};\nwchar_t dst[16];\nsize_t r = mbsrtowcs(dst, &src, 16, &st); // r == 5"
        },
        {
          "id": "id-mbstowcs",
          "token": "mbstowcs",
          "type": "identifier",
          "description": "Converts a multibyte string to a wide-character string using the current\nlocale. Returns the number of wide characters written (excluding terminator),\nor `(size_t)-1` on encoding error.",
          "example": "#include <stdlib.h>\nconst char *src = \"OK\";\nwchar_t dst[8];\nsize_t r = mbstowcs(dst, src, 8); // r == 2"
        },
        {
          "id": "id-mbtowc",
          "token": "mbtowc",
          "type": "identifier",
          "description": "Converts the next multibyte character to `wchar_t`. Returns number of bytes\nprocessed, 0 for null, or -1 on encoding error.",
          "example": "#include <stdlib.h>\nwchar_t wc;\nint n = mbtowc(&wc, \"A\", MB_CUR_MAX); // n == 1, wc == L'A'"
        },
        {
          "id": "id-memchr",
          "token": "memchr",
          "type": "identifier",
          "description": "Scans the first `n` bytes of the memory block for the first occurrence of byte\n`c`. Returns pointer to match or `NULL`.",
          "example": "#include <string.h>\nconst char *s = \"hello\";\nconst char *p = (const char *)memchr(s, 'e', 5); // p == &s[1]"
        },
        {
          "id": "id-memcmp",
          "token": "memcmp",
          "type": "identifier",
          "description": "Compares the first `n` bytes of two memory blocks. Returns <0, 0, >0 if first\nis less than, equal to, or greater than second.",
          "example": "#include <string.h>\nint r1 = memcmp(\"abc\", \"abc\", 3); // r1 == 0\nint r2 = memcmp(\"abc\", \"abd\", 3); // r2 < 0"
        },
        {
          "id": "id-memcpy",
          "token": "memcpy",
          "type": "identifier",
          "description": "Copies `n` bytes from source to destination. The memory regions must not\noverlap.",
          "example": "#include <string.h>\nchar dst[4];\nmemcpy(dst, \"abc\", 4); // copies 'a','b','c','\\0'\n// dst now contains \"abc\""
        },
        {
          "id": "id-memmove",
          "token": "memmove",
          "type": "identifier",
          "description": "Copies `n` bytes between memory areas, safe for overlapping regions.",
          "example": "#include <string.h>\nchar s[] = \"abcdef\";\nmemmove(s + 2, s, 4); // s becomes \"ababcd\""
        },
        {
          "id": "id-memset",
          "token": "memset",
          "type": "identifier",
          "description": "Fills the first `n` bytes of the memory block with the byte value `c`.",
          "example": "#include <string.h>\nchar buf[5];\nmemset(buf, '*', 4); buf[4] = '\\0';\n// buf contains \"****\""
        },
        {
          "id": "id-mktime",
          "token": "mktime",
          "type": "identifier",
          "description": "Converts local calendar time (broken-down `struct tm`) to `time_t` and\nnormalizes the fields. Updates `tm_wday` and `tm_yday`.",
          "example": "#include <time.h>\nstruct tm tm = {0};\ntm.tm_year = 120; // years since 1900 -> 2020\ntm.tm_mon  = 0;   // January\ntm.tm_mday = 1;   // 1st\nmktime(&tm);\nint wday = tm.tm_wday; // wday == 3 (Wednesday)"
        },
        {
          "id": "id-modf",
          "token": "modf",
          "type": "identifier",
          "description": "Decomposes `x` into fractional and integral parts. Returns the fractional part\nwith the same sign as `x`, and stores the integral part in `*iptr`.",
          "example": "#include <math.h>\ndouble ip;\ndouble frac = modf(3.75, &ip); // ip == 3.0, frac == 0.75"
        },
        {
          "id": "id-modff",
          "token": "modff",
          "type": "identifier",
          "description": "Float version of `modf`.",
          "example": "#include <math.h>\nfloat ip;\nfloat frac = modff(2.5f, &ip); // ip == 2.0f, frac == 0.5f"
        },
        {
          "id": "id-modfl",
          "token": "modfl",
          "type": "identifier",
          "description": "Long double version of `modf`.",
          "example": "#include <math.h>\nlong double ip;\nlong double frac = modfl(1.25L, &ip); // ip == 1.0L, frac == 0.25L"
        },
        {
          "id": "id-nan",
          "token": "nan",
          "type": "identifier",
          "description": "Generates a quiet NaN value, optionally using a string tag. Result compares\nunequal to all values, including itself.",
          "example": "#include <math.h>\n#include <stdbool.h>\ndouble x = nan(\"\"); // x is NaN\nbool b = (x != x);   // b == true"
        },
        {
          "id": "id-nanf",
          "token": "nanf",
          "type": "identifier",
          "description": "Generates a quiet NaN value of type `float`, optionally using a string tag.",
          "example": "#include <math.h>\nfloat x = nanf(\"\"); // x is NaN\nint is_nan = (x != x); // is_nan == 1"
        },
        {
          "id": "id-nanl",
          "token": "nanl",
          "type": "identifier",
          "description": "Generates a quiet NaN value of type `long double`, optionally using a string tag.",
          "example": "#include <math.h>\nlong double x = nanl(\"\"); // x is NaN\nint is_nan = (x != x);     // is_nan == 1"
        },
        {
          "id": "id-nearbyint",
          "token": "nearbyint",
          "type": "identifier",
          "description": "Rounds `x` to the nearest integer value in floating type according to the current\nrounding mode (default: ties-to-even). Does not raise inexact.",
          "example": "#include <math.h>\ndouble r = nearbyint(2.5); // with ties-to-even, r == 2.0"
        },
        {
          "id": "id-nearbyintf",
          "token": "nearbyintf",
          "type": "identifier",
          "description": "Float version of `nearbyint`.",
          "example": "#include <math.h>\nfloat r = nearbyintf(3.5f); // with ties-to-even, r == 4.0f"
        },
        {
          "id": "id-nearbyintl",
          "token": "nearbyintl",
          "type": "identifier",
          "description": "Long double version of `nearbyint`.",
          "example": "#include <math.h>\nlong double r = nearbyintl(1.5L); // with ties-to-even, r == 2.0L"
        },
        {
          "id": "id-nextafter",
          "token": "nextafter",
          "type": "identifier",
          "description": "Returns the next representable `double` value after `x` in the direction of `y`.",
          "example": "#include <math.h>\ndouble y = nextafter(1.0, 2.0); // y > 1.0 by the smallest possible increment"
        },
        {
          "id": "id-nextafterf",
          "token": "nextafterf",
          "type": "identifier",
          "description": "Float version of `nextafter`.",
          "example": "#include <math.h>\nfloat y = nextafterf(1.0f, 0.0f); // y < 1.0f by the smallest decrement"
        },
        {
          "id": "id-nextafterl",
          "token": "nextafterl",
          "type": "identifier",
          "description": "Long double version of `nextafter`.",
          "example": "#include <math.h>\nlong double y = nextafterl(0.0L, 1.0L); // y > 0.0L by the smallest increment"
        },
        {
          "id": "id-nexttoward",
          "token": "nexttoward",
          "type": "identifier",
          "description": "Returns the next representable `double` after `x` toward `y` (long double direction argument).",
          "example": "#include <math.h>\ndouble y = nexttoward(1.0, 2.0L); // moves one ULP toward 2.0"
        },
        {
          "id": "id-nexttowardf",
          "token": "nexttowardf",
          "type": "identifier",
          "description": "Float version of `nexttoward`.",
          "example": "#include <math.h>\nfloat y = nexttowardf(0.0f, 1.0L); // moves one ULP toward 1.0"
        },
        {
          "id": "id-nexttowardl",
          "token": "nexttowardl",
          "type": "identifier",
          "description": "Long double version of `nexttoward`.",
          "example": "#include <math.h>\nlong double y = nexttowardl(1.0L, 0.0L); // moves one ULP toward 0.0"
        },
        {
          "id": "id-perror",
          "token": "perror",
          "type": "identifier",
          "description": "Prints a descriptive error message to `stderr` for the current `errno`, prefixed\nby the given string.",
          "example": "#include <stdio.h>\n\nFILE *f = fopen(\"/no/such/file.txt\", \"r\");\nif (!f) {\n    perror(\"fopen\"); // e.g., \"fopen: No such file or directory\"\n}"
        },
        {
          "id": "id-pow",
          "token": "pow",
          "type": "identifier",
          "description": "Returns `x` raised to the power `y` as `double`.",
          "example": "#include <math.h>\ndouble r = pow(2.0, 10.0); // r == 1024.0"
        },
        {
          "id": "id-powf",
          "token": "powf",
          "type": "identifier",
          "description": "Float version of `pow`.",
          "example": "#include <math.h>\nfloat r = powf(3.0f, 3.0f); // r == 27.0f"
        },
        {
          "id": "id-powl",
          "token": "powl",
          "type": "identifier",
          "description": "Long double version of `pow`.",
          "example": "#include <math.h>\nlong double r = powl(10.0L, 2.0L); // r == 100.0L"
        },
        {
          "id": "id-printf",
          "token": "printf",
          "type": "identifier",
          "description": "Writes formatted output to `stdout`.",
          "example": "#include <stdio.h>\nint n = printf(\"Hello %d\\n\", 42); // prints \"Hello 42\" and newline; n == 9"
        },
        {
          "id": "id-putc",
          "token": "putc",
          "type": "identifier",
          "description": "Writes a character to the given stream. Typically a macro that calls `fputc`.",
          "example": "#include <stdio.h>\nFILE *f = fopen(\"out.txt\", \"w\");\nputc('A', f);\nfclose(f); // out.txt now contains \"A\""
        },
        {
          "id": "id-putchar",
          "token": "putchar",
          "type": "identifier",
          "description": "Writes a character to `stdout`.",
          "example": "#include <stdio.h>\nputchar('A');\nputchar('\\n'); // outputs: A\\n"
        },
        {
          "id": "id-puts",
          "token": "puts",
          "type": "identifier",
          "description": "Writes a string to `stdout` followed by a newline.",
          "example": "#include <stdio.h>\nint n = puts(\"Hello\"); // outputs: Hello\\n; n >= 0"
        },
        {
          "id": "id-qsort",
          "token": "qsort",
          "type": "identifier",
          "description": "Sorts an array using the quicksort algorithm with a user-provided comparator.",
          "example": "#include <stdlib.h>\n#include <stdio.h>\n\nint cmp_ints(const void *a, const void *b) {\n    int ia = *(const int *)a;\n    int ib = *(const int *)b;\n    return (ia > ib) - (ia < ib);\n}\n\nint arr[5] = {3, 1, 4, 1, 5};\nqsort(arr, 5, sizeof(int), cmp_ints);\n// arr is now {1, 1, 3, 4, 5}"
        },
        {
          "id": "id-quick_exit",
          "token": "quick_exit",
          "type": "identifier",
          "description": "Terminates the program quickly without calling `atexit` handlers; calls\n`at_quick_exit` handlers instead.",
          "example": "#include <stdlib.h>\n// at_quick_exit handlers (if any) would run here\nquick_exit(0); // program terminates immediately"
        },
        {
          "id": "id-raise",
          "token": "raise",
          "type": "identifier",
          "description": "Sends the signal `sig` to the calling process.",
          "example": "#include <signal.h>\n#include <stdio.h>\n\nvoid handler(int s) { printf(\"handled %d\\n\", s); }\n\nsignal(SIGINT, handler);\nraise(SIGINT); // prints: handled 2"
        },
        {
          "id": "id-rand",
          "token": "rand",
          "type": "identifier",
          "description": "Returns a pseudo-random integer in the range `[0, RAND_MAX]`. Use `srand` to\nseed.",
          "example": "#include <stdlib.h>\nsrand(1234);\nint r = rand(); // r is deterministic given the seed, 0 <= r <= RAND_MAX"
        },
        {
          "id": "id-realloc",
          "token": "realloc",
          "type": "identifier",
          "description": "Changes the size of the memory block pointed to by `ptr`. Preserves existing\ncontents up to the lesser of old and new sizes; may move the block.",
          "example": "#include <stdlib.h>\nint *p = (int *)malloc(2 * sizeof(int));\np[0] = 7; p[1] = 9;\np = (int *)realloc(p, 4 * sizeof(int));\np[2] = 11; p[3] = 13;\n// p now has {7, 9, 11, 13}\nfree(p);"
        },
        {
          "id": "id-remainder",
          "token": "remainder",
          "type": "identifier",
          "description": "Returns the IEEE remainder of `x` with respect to `y`: `x - y * rint(x/y)`\nwith ties-to-even; magnitude of result \u2264 `y/2`.",
          "example": "#include <math.h>\ndouble r = remainder(6.0, 4.0); // 6/4=1.5 -> nearest even 2 -> r == -2.0"
        },
        {
          "id": "id-remainderf",
          "token": "remainderf",
          "type": "identifier",
          "description": "Float version of `remainder`.",
          "example": "#include <math.h>\nfloat r = remainderf(5.0f, 2.0f); // 5/2=2.5 -> nearest even 2 -> r == 1.0f"
        },
        {
          "id": "id-remainderl",
          "token": "remainderl",
          "type": "identifier",
          "description": "Long double version of `remainder`.",
          "example": "#include <math.h>\nlong double r = remainderl(7.0L, 4.0L); // 7/4=1.75 -> r == -1.0L"
        },
        {
          "id": "id-remove",
          "token": "remove",
          "type": "identifier",
          "description": "Deletes the file with the given pathname. Returns 0 on success.",
          "example": "#include <stdio.h>\nFILE *f = fopen(\"temp.txt\", \"w\");\nif (f) { fputs(\"x\", f); fclose(f); }\nint r = remove(\"temp.txt\"); // r == 0 on success"
        },
        {
          "id": "id-remquo",
          "token": "remquo",
          "type": "identifier",
          "description": "Returns the IEEE remainder as `remainder(x,y)` and stores in `*quo` some low\norder bits of the integral quotient of `x/y` with sign.",
          "example": "#include <math.h>\nint q;\ndouble r = remquo(29.0, 8.0, &q); // r == -3.0; q holds low-order quotient bits"
        },
        {
          "id": "id-remquof",
          "token": "remquof",
          "type": "identifier",
          "description": "Float version of `remquo`.",
          "example": "#include <math.h>\nint q;\nfloat r = remquof(10.0f, 4.0f, &q); // r == -2.0f; q stores quotient bits"
        },
        {
          "id": "id-remquol",
          "token": "remquol",
          "type": "identifier",
          "description": "Long double version of `remquo`.",
          "example": "#include <math.h>\nint q;\nlong double r = remquol(13.0L, 4.0L, &q); // r == 1.0L; q stores quotient bits"
        },
        {
          "id": "id-rename",
          "token": "rename",
          "type": "identifier",
          "description": "Changes the name or location of a file. Returns 0 on success.",
          "example": "#include <stdio.h>\nFILE *f = fopen(\"old.txt\", \"w\"); if (f) { fputs(\"x\", f); fclose(f); }\nint r = rename(\"old.txt\", \"new.txt\"); // r == 0 on success"
        },
        {
          "id": "id-rewind",
          "token": "rewind",
          "type": "identifier",
          "description": "Equivalent to `fseek(stream, 0L, SEEK_SET)` and clears error and EOF indicators.",
          "example": "#include <stdio.h>\nFILE *fp = fopen(\"example.txt\", \"r\");\nfgetc(fp); rewind(fp);\nint ch = fgetc(fp); // back to first byte\nfclose(fp);"
        },
        {
          "id": "id-scanf",
          "token": "scanf",
          "type": "identifier",
          "description": "Reads formatted input from `stdin` and stores the parsed values into the provided\naddresses. Returns the number of items successfully assigned.",
          "example": "#include <stdio.h>\nint x; char word[16];\n// If user types: 42 hello<Enter>\nint n = scanf(\"%d %15s\", &x, word);\n// n == 2, x == 42, word == \"hello\""
        },
        {
          "id": "id-setbuf",
          "token": "setbuf",
          "type": "identifier",
          "description": "Sets the buffer for a stream. If `buf` is `NULL`, the stream is unbuffered;\notherwise uses the provided buffer (size `BUFSIZ`).",
          "example": "#include <stdio.h>\nstatic char buf[BUFSIZ];\nsetbuf(stdout, buf); // stdout now uses 'buf' as its buffer"
        },
        {
          "id": "id-setjmp",
          "token": "setjmp",
          "type": "identifier",
          "description": "Saves the calling environment in `jmp_buf` for later use by `longjmp`. Returns 0\non initial call, and returns the value passed to `longjmp` when jumping back.",
          "example": "#include <setjmp.h>\n#include <stdio.h>\n\njmp_buf env;\n\nint main(void) {\n    int r = setjmp(env);\n    if (r == 0) {\n        // later some function may call longjmp(env, 123);\n        printf(\"saved env\\n\");\n    } else {\n        printf(\"returned via longjmp with %d\\n\", r); // e.g., 123\n    }\n    return 0;\n}"
        },
        {
          "id": "id-setlocale",
          "token": "setlocale",
          "type": "identifier",
          "description": "Sets or queries the program's current locale. Returns a string naming the new\nlocale or `NULL` on failure.",
          "example": "#include <locale.h>\nconst char *loc = setlocale(LC_ALL, \"C\"); // loc == \"C\""
        },
        {
          "id": "id-setvbuf",
          "token": "setvbuf",
          "type": "identifier",
          "description": "Sets the buffering mode and buffer for a stream: `_IOFBF` (full), `_IOLBF`\n(line), or `_IONBF` (none). Returns 0 on success.",
          "example": "#include <stdio.h>\nstatic char buf[1024];\nint r = setvbuf(stdout, buf, _IOLBF, sizeof(buf)); // r == 0"
        },
        {
          "id": "id-signal",
          "token": "signal",
          "type": "identifier",
          "description": "Sets a signal handler for the specified signal and returns the previous handler\non success, or `SIG_ERR` on error.",
          "example": "#include <signal.h>\n#include <stdio.h>\n\nvoid handler(int s) { printf(\"caught %d\\n\", s); }\nvoid (*prev)(int) = signal(SIGINT, handler);\n// raising SIGINT will print: caught 2"
        },
        {
          "id": "id-sig_atomic_t",
          "token": "sig_atomic_t",
          "type": "identifier",
          "description": "An integer type that can be read and written atomically, safe to use in signal\nhandlers.",
          "example": "#include <signal.h>\nvolatile sig_atomic_t flag = 0;\nvoid handler(int s) { flag = 1; }"
        },
        {
          "id": "id-sin",
          "token": "sin",
          "type": "identifier",
          "description": "Returns the sine of `x` (in radians) as a `double`.",
          "example": "#include <math.h>\ndouble r = sin(M_PI / 2); // r == 1.0"
        },
        {
          "id": "id-sinf",
          "token": "sinf",
          "type": "identifier",
          "description": "Float version of `sin`.",
          "example": "#include <math.h>\nfloat r = sinf((float)M_PI / 2.0f); // r == 1.0f"
        },
        {
          "id": "id-sinh",
          "token": "sinh",
          "type": "identifier",
          "description": "Returns the hyperbolic sine of `x` as a `double`.",
          "example": "#include <math.h>\ndouble r = sinh(0.0); // r == 0.0"
        },
        {
          "id": "id-sinhf",
          "token": "sinhf",
          "type": "identifier",
          "description": "Float version of `sinh`.",
          "example": "#include <math.h>\nfloat r = sinhf(1.0f); // r ~= 1.175201f"
        },
        {
          "id": "id-sinhl",
          "token": "sinhl",
          "type": "identifier",
          "description": "Long double version of `sinh`.",
          "example": "#include <math.h>\nlong double r = sinhl(1.0L); // r ~= 1.175201L"
        },
        {
          "id": "id-sinl",
          "token": "sinl",
          "type": "identifier",
          "description": "Long double version of `sin`.",
          "example": "#include <math.h>\nlong double r = sinl(0.0L); // r == 0.0L"
        },
        {
          "id": "id-size_t",
          "token": "size_t",
          "type": "identifier",
          "description": "Unsigned integer type used for sizes and counts, returned by `sizeof`.",
          "example": "#include <stdio.h>\nsize_t n = sizeof(int); // typically 4\nprintf(\"%zu\\n\", n);"
        },
        {
          "id": "id-snprintf",
          "token": "snprintf",
          "type": "identifier",
          "description": "Writes formatted output to a buffer, up to `size` bytes including the null\nterminator. Returns the number of characters that would have been written\nexcluding the null terminator.",
          "example": "#include <stdio.h>\nchar buf[8];\nint n = snprintf(buf, sizeof(buf), \"%s %d\", \"hi\", 42);\n// buf == \"hi 42\\0\" (fits), n == 5"
        },
        {
          "id": "id-sprintf",
          "token": "sprintf",
          "type": "identifier",
          "description": "Writes formatted output to a string. Returns the number of characters written\nexcluding the null terminator. Use `snprintf` to avoid overflow.",
          "example": "#include <stdio.h>\nchar buf[16];\nint n = sprintf(buf, \"%d-%s\", 7, \"ok\");\n// buf == \"7-ok\\0\", n == 4"
        },
        {
          "id": "id-sqrt",
          "token": "sqrt",
          "type": "identifier",
          "description": "Returns the non-negative square root of `x` as a `double`. Domain: `x >= 0`\nfor real results; negative `x` yields NaN on IEEE-754 systems.",
          "example": "#include <math.h>\ndouble r = sqrt(9.0); // r == 3.0"
        },
        {
          "id": "id-sqrtf",
          "token": "sqrtf",
          "type": "identifier",
          "description": "Float version of `sqrt`.",
          "example": "#include <math.h>\nfloat r = sqrtf(2.25f); // r == 1.5f"
        },
        {
          "id": "id-sqrtl",
          "token": "sqrtl",
          "type": "identifier",
          "description": "Long double version of `sqrt`.",
          "example": "#include <math.h>\nlong double r = sqrtl(4.0L); // r == 2.0L"
        },
        {
          "id": "id-srand",
          "token": "srand",
          "type": "identifier",
          "description": "Seeds the pseudo-random number generator used by `rand` with `seed`.",
          "example": "#include <stdlib.h>\nsrand(42);\nint r = rand(); // deterministic given seed 42"
        },
        {
          "id": "id-sscanf",
          "token": "sscanf",
          "type": "identifier",
          "description": "Reads formatted input from a string and stores parsed values. Returns the number\nof items successfully assigned.",
          "example": "#include <stdio.h>\nconst char *s = \"42 hello\";\nint x; char word[16];\nint n = sscanf(s, \"%d %15s\", &x, word);\n// n == 2, x == 42, word == \"hello\""
        },
        {
          "id": "id-strcat",
          "token": "strcat",
          "type": "identifier",
          "description": "Appends the C-string `src` to the end of `dest` (including the terminator).\n`dest` must have enough space.",
          "example": "#include <string.h>\nchar dest[16] = \"Hello\";\nstrcat(dest, \", \");\nstrcat(dest, \"C\");\n// dest == \"Hello, C\""
        },
        {
          "id": "id-strchr",
          "token": "strchr",
          "type": "identifier",
          "description": "Returns a pointer to the first occurrence of character `c` in string `s`, or\n`NULL` if not found.",
          "example": "#include <string.h>\nconst char *s = \"abcdea\";\nconst char *p = strchr(s, 'a'); // p == &s[0]"
        },
        {
          "id": "id-strcmp",
          "token": "strcmp",
          "type": "identifier",
          "description": "Lexicographically compares two C-strings. Returns <0, 0, >0 if `s1` is less\nthan, equal to, or greater than `s2`.",
          "example": "#include <string.h>\nint r = strcmp(\"apple\", \"banana\"); // r < 0"
        },
        {
          "id": "id-strcoll",
          "token": "strcoll",
          "type": "identifier",
          "description": "Compares two strings according to the current locale's collation order. Returns\n<0, 0, >0 similar to `strcmp`.",
          "example": "#include <string.h>\n#include <locale.h>\nsetlocale(LC_COLLATE, \"C\");\nint r = strcoll(\"a\", \"b\"); // r < 0 in \"C\" locale"
        },
        {
          "id": "id-strcpy",
          "token": "strcpy",
          "type": "identifier",
          "description": "Copies the C-string `src` (including the terminating `\\0`) to `dest`. `dest`\nmust be large enough.",
          "example": "#include <string.h>\nchar dest[16];\nstrcpy(dest, \"hello\");\n// dest == \"hello\""
        },
        {
          "id": "id-strcspn",
          "token": "strcspn",
          "type": "identifier",
          "description": "Returns the length of the initial segment of `s` consisting of characters not\nin `reject`.",
          "example": "#include <string.h>\nsize_t n = strcspn(\"hello,world\", \",!\"); // n == 5"
        },
        {
          "id": "id-strerror",
          "token": "strerror",
          "type": "identifier",
          "description": "Returns a pointer to a string describing the error code `errnum`. The returned\nstring may be static.",
          "example": "#include <string.h>\nconst char *msg = strerror(2); // e.g., \"No such file or directory\""
        },
        {
          "id": "id-strftime",
          "token": "strftime",
          "type": "identifier",
          "description": "Formats date and time from a `struct tm` into a string according to the format\nstring. Returns the number of bytes placed in the array, not including the\nterminating null, or 0 if the result does not fit.",
          "example": "#include <time.h>\n#include <stdio.h>\nchar buf[32];\nstruct tm tm = { .tm_year = 123, .tm_mon = 6, .tm_mday = 4 };\nsize_t n = strftime(buf, sizeof(buf), \"%Y-%m-%d\", &tm);\n// buf == \"2023-07-04\", n == 10"
        },
        {
          "id": "id-strlen",
          "token": "strlen",
          "type": "identifier",
          "description": "Returns the length of the string `s`, not including the terminating null byte.",
          "example": "#include <string.h>\nsize_t n = strlen(\"hello\"); // n == 5"
        },
        {
          "id": "id-strncat",
          "token": "strncat",
          "type": "identifier",
          "description": "Appends at most `n` characters from `src` to the end of `dest`, and adds a null\nterminator. `dest` must have space for the result.",
          "example": "#include <string.h>\nchar dest[8] = \"a\";\nstrncat(dest, \"bcdef\", 3);\n// dest == \"abcd\""
        },
        {
          "id": "id-strncmp",
          "token": "strncmp",
          "type": "identifier",
          "description": "Compares at most `n` characters of `s1` and `s2`. Returns <0, 0, >0 similar to\n`strcmp`.",
          "example": "#include <string.h>\nint r = strncmp(\"apple\", \"application\", 5); // r == 0"
        },
        {
          "id": "id-strncpy",
          "token": "strncpy",
          "type": "identifier",
          "description": "Copies at most `n` characters from `src` to `dest`. If `src` is shorter than\n`n`, the remainder of `dest` is padded with `\\0`. Does not `\\0`-terminate if\n`src` is longer than or equal to `n`.",
          "example": "#include <string.h>\nchar dest[5];\nstrncpy(dest, \"hello\", sizeof(dest));\n// dest contains {'h','e','l','l','o'} (no extra terminator)"
        },
        {
          "id": "id-strpbrk",
          "token": "strpbrk",
          "type": "identifier",
          "description": "Returns a pointer to the first character in `s` that matches any character in\n`accept`, or `NULL` if none are found.",
          "example": "#include <string.h>\nconst char *s = \"abcdxyz\";\nconst char *p = strpbrk(s, \"xy\"); // p == &s[4]"
        },
        {
          "id": "id-strrchr",
          "token": "strrchr",
          "type": "identifier",
          "description": "Returns a pointer to the last occurrence of character `c` in string `s`, or\n`NULL` if not found.",
          "example": "#include <string.h>\nconst char *s = \"abca\";\nconst char *p = strrchr(s, 'a'); // p == &s[3]"
        },
        {
          "id": "id-strspn",
          "token": "strspn",
          "type": "identifier",
          "description": "Returns the length of the initial segment of `s` consisting only of characters\nin `accept`.",
          "example": "#include <string.h>\nsize_t n = strspn(\"abc123\", \"abc\"); // n == 3"
        },
        {
          "id": "id-strstr",
          "token": "strstr",
          "type": "identifier",
          "description": "Finds the first occurrence of substring `needle` in `haystack`. Returns pointer\nto the beginning of the substring, or `NULL` if not found.",
          "example": "#include <string.h>\nconst char *h = \"Hello, World!\";\nconst char *p = strstr(h, \"World\"); // p == h + 7"
        },
        {
          "id": "id-strtod",
          "token": "strtod",
          "type": "identifier",
          "description": "Converts the initial part of string `nptr` to `double`. Stores the address of\nthe first unconverted character in `*endptr` if non-`NULL`.",
          "example": "#include <stdlib.h>\nchar *end;\ndouble x = strtod(\"3.14pi\", &end); // x == 3.14, *end == 'p'"
        },
        {
          "id": "id-strtof",
          "token": "strtof",
          "type": "identifier",
          "description": "Converts the initial part of string `nptr` to `float`.",
          "example": "#include <stdlib.h>\nchar *end;\nfloat x = strtof(\"2.5e1x\", &end); // x == 25.0f, *end == 'x'"
        },
        {
          "id": "id-strtoimax",
          "token": "strtoimax",
          "type": "identifier",
          "description": "Converts string to `intmax_t` with the given base (0 autodetects). Stores end\npointer in `*endptr` if non-`NULL`.",
          "example": "#include <inttypes.h>\nchar *end;\nintmax_t v = strtoimax(\"-0x2A\", &end, 0); // v == -42"
        },
        {
          "id": "id-strtok",
          "token": "strtok",
          "type": "identifier",
          "description": "Splits a string into tokens separated by any of the delimiter characters.\nModifies the input string; subsequent calls use `NULL` to continue.",
          "example": "#include <string.h>\nchar s[] = \"a,b;c\";\nchar *tok = strtok(s, \",;\"); // tok == \"a\"\ntok = strtok(NULL, \",;\");   // tok == \"b\"\ntok = strtok(NULL, \",;\");   // tok == \"c\""
        },
        {
          "id": "id-strtol",
          "token": "strtol",
          "type": "identifier",
          "description": "Converts string to `long int` with the given base (0 autodetects). Stores end\npointer in `*endptr` if non-`NULL`.",
          "example": "#include <stdlib.h>\nchar *end;\nlong v = strtol(\"1010\", &end, 2); // v == 10"
        },
        {
          "id": "id-strtold",
          "token": "strtold",
          "type": "identifier",
          "description": "Converts the initial part of string `nptr` to `long double`.",
          "example": "#include <stdlib.h>\nchar *end;\nlong double x = strtold(\"1.25L\", &end); // x == 1.25L, *end == 'L'"
        },
        {
          "id": "id-strtoll",
          "token": "strtoll",
          "type": "identifier",
          "description": "Converts string to `long long int` with the given base.",
          "example": "#include <stdlib.h>\nchar *end;\nlong long v = strtoll(\"-42\", &end, 10); // v == -42"
        },
        {
          "id": "id-strtoul",
          "token": "strtoul",
          "type": "identifier",
          "description": "Converts string to `unsigned long int` with the given base.",
          "example": "#include <stdlib.h>\nchar *end;\nunsigned long v = strtoul(\"0xff\", &end, 0); // v == 255"
        },
        {
          "id": "id-strtoull",
          "token": "strtoull",
          "type": "identifier",
          "description": "Converts string to `unsigned long long int` with the given base.",
          "example": "#include <stdlib.h>\nchar *end;\nunsigned long long v = strtoull(\"077\", &end, 0); // v == 63 (octal)"
        },
        {
          "id": "id-strtoumax",
          "token": "strtoumax",
          "type": "identifier",
          "description": "Converts string to `uintmax_t` with the given base.",
          "example": "#include <inttypes.h>\nchar *end;\nuintmax_t v = strtoumax(\"18446744073709551615\", &end, 10); // max 64-bit"
        },
        {
          "id": "id-strxfrm",
          "token": "strxfrm",
          "type": "identifier",
          "description": "Transforms `src` into a form suitable for locale-aware comparison so that\n`strcmp(strxfrm(a), strxfrm(b))` has the same result as `strcoll(a,b)`. Returns\nthe length of the transformed string.",
          "example": "#include <string.h>\n#include <locale.h>\nsetlocale(LC_COLLATE, \"C\");\nchar out[32];\nsize_t n = strxfrm(out, \"abc\", sizeof(out)); // n == 3, out == \"abc\""
        },
        {
          "id": "id-swprintf",
          "token": "swprintf",
          "type": "identifier",
          "description": "Writes formatted wide-character output to a wide string buffer, with a maximum\nof `n` wide characters including the terminator. Returns the number of wide\ncharacters written (excluding the terminator), or a negative value on error.",
          "example": "#include <wchar.h>\nwchar_t wbuf[16];\nint n = swprintf(wbuf, 16, L\"%ls %d\", L\"hi\", 7);\n// wbuf == L\"hi 7\", n == 4"
        },
        {
          "id": "id-swscanf",
          "token": "swscanf",
          "type": "identifier",
          "description": "Reads formatted input from a wide string and stores parsed values.\nReturns the number of items successfully assigned.",
          "example": "#include <wchar.h>\nconst wchar_t *ws = L\"42 test\";\nint x; wchar_t word[8];\nint n = swscanf(ws, L\"%d %7ls\", &x, word);\n// n == 2, x == 42, word == L\"test\""
        },
        {
          "id": "id-system",
          "token": "system",
          "type": "identifier",
          "description": "Passes the command string to the host environment to be executed by the command\nprocessor. Returns an implementation-defined status.",
          "example": "#include <stdlib.h>\nint r = system(\"echo hi > sys_out.txt\"); // r >= 0 if executed"
        },
        {
          "id": "id-tan",
          "token": "tan",
          "type": "identifier",
          "description": "Returns the tangent of `x` (in radians) as a `double`.",
          "example": "#include <math.h>\ndouble r = tan(M_PI / 4); // r ~= 1.0"
        },
        {
          "id": "id-tanf",
          "token": "tanf",
          "type": "identifier",
          "description": "Float version of `tan`.",
          "example": "#include <math.h>\nfloat r = tanf((float)M_PI / 4.0f); // r ~= 1.0f"
        },
        {
          "id": "id-tanh",
          "token": "tanh",
          "type": "identifier",
          "description": "Returns the hyperbolic tangent of `x` as a `double`.",
          "example": "#include <math.h>\ndouble r = tanh(1.0); // r ~= 0.761594"
        },
        {
          "id": "id-tanhf",
          "token": "tanhf",
          "type": "identifier",
          "description": "Float version of `tanh`.",
          "example": "#include <math.h>\nfloat r = tanhf(1.0f); // r ~= 0.761594f"
        },
        {
          "id": "id-tanhl",
          "token": "tanhl",
          "type": "identifier",
          "description": "Long double version of `tanh`.",
          "example": "#include <math.h>\nlong double r = tanhl(1.0L); // r ~= 0.761594L"
        },
        {
          "id": "id-tanl",
          "token": "tanl",
          "type": "identifier",
          "description": "Long double version of `tan` (tangent of `x` in radians).",
          "example": "#include <math.h>\nlong double r = tanl(M_PI_4); // r ~= 1.0L"
        },
        {
          "id": "id-tgamma",
          "token": "tgamma",
          "type": "identifier",
          "description": "Returns the gamma function of `x` as `double` (\u0393(x)). For positive integers,\n\u0393(n) == (n-1)!.",
          "example": "#include <math.h>\ndouble r = tgamma(6.0); // r == 120.0"
        },
        {
          "id": "id-tgammaf",
          "token": "tgammaf",
          "type": "identifier",
          "description": "Float version of `tgamma`.",
          "example": "#include <math.h>\nfloat r = tgammaf(5.0f); // r == 24.0f"
        },
        {
          "id": "id-tgammal",
          "token": "tgammal",
          "type": "identifier",
          "description": "Long double version of `tgamma`.",
          "example": "#include <math.h>\nlong double r = tgammal(3.0L); // r == 2.0L"
        },
        {
          "id": "id-time",
          "token": "time",
          "type": "identifier",
          "description": "Returns the current calendar time as a `time_t`. If `t` is not `NULL`, stores\nthe value in `*t`.",
          "example": "#include <time.h>\ntime_t now = time(NULL); // now != (time_t)-1 on success"
        },
        {
          "id": "id-time_t",
          "token": "time_t",
          "type": "identifier",
          "description": "Arithmetic type capable of representing calendar time values returned by `time`.",
          "example": "#include <time.h>\ntime_t t = 0; // represents the Unix epoch (implementation-defined)"
        },
        {
          "id": "id-tmpfile",
          "token": "tmpfile",
          "type": "identifier",
          "description": "Creates a temporary binary file opened for update (\"wb+\") that is automatically\ndeleted when closed or on program termination.",
          "example": "#include <stdio.h>\nFILE *fp = tmpfile();\n// fp != NULL on success; file is temporary"
        },
        {
          "id": "id-tmpnam",
          "token": "tmpnam",
          "type": "identifier",
          "description": "Generates a string that is a valid pathname for a temporary file. Not secure;\nprefer `tmpfile` or `mkstemp` (POSIX).",
          "example": "#include <stdio.h>\nchar name[L_tmpnam];\ntmpnam(name); // name now holds a temporary filename"
        },
        {
          "id": "id-tolower",
          "token": "tolower",
          "type": "identifier",
          "description": "Converts an `unsigned char` value to lowercase if it is an uppercase letter;\notherwise returns it unchanged.",
          "example": "#include <ctype.h>\nint r = tolower('G'); // r == 'g'"
        },
        {
          "id": "id-toupper",
          "token": "toupper",
          "type": "identifier",
          "description": "Converts an `unsigned char` value to uppercase if it is a lowercase letter;\notherwise returns it unchanged.",
          "example": "#include <ctype.h>\nint r = toupper('b'); // r == 'B'"
        },
        {
          "id": "id-towctrans",
          "token": "towctrans",
          "type": "identifier",
          "description": "Applies a wide-character mapping to `wint_t wc` using a `wctrans_t` descriptor\nobtained by `wctrans(\"lower\")`, `wctrans(\"upper\")`, etc.",
          "example": "#include <wctype.h>\nwctrans_t tolower_map = wctrans(\"tolower\");\nwint_t r = towctrans(L'A', tolower_map); // r == L'a'"
        },
        {
          "id": "id-towlower",
          "token": "towlower",
          "type": "identifier",
          "description": "Converts a wide character to lowercase according to the current locale.",
          "example": "#include <wctype.h>\nwint_t r = towlower(L'\u00d6'); // r is lowercase variant in locale if defined"
        },
        {
          "id": "id-towupper",
          "token": "towupper",
          "type": "identifier",
          "description": "Converts a wide character to uppercase according to the current locale.",
          "example": "#include <wctype.h>\nwint_t r = towupper(L'\u00df'); // may map to L'\u1e9e' in locales that support it"
        },
        {
          "id": "id-trunc",
          "token": "trunc",
          "type": "identifier",
          "description": "Truncates `x` to the integer value toward zero, returned in floating type.",
          "example": "#include <math.h>\ndouble r = trunc(-3.9); // r == -3.0"
        },
        {
          "id": "id-truncf",
          "token": "truncf",
          "type": "identifier",
          "description": "Float version of `trunc`.",
          "example": "#include <math.h>\nfloat r = truncf(2.8f); // r == 2.0f"
        },
        {
          "id": "id-truncl",
          "token": "truncl",
          "type": "identifier",
          "description": "Long double version of `trunc`.",
          "example": "#include <math.h>\nlong double r = truncl(-1.2L); // r == -1.0L"
        },
        {
          "id": "id-ungetc",
          "token": "ungetc",
          "type": "identifier",
          "description": "Pushes character `c` back onto the input stream so the next read returns it.\nOnly one character of pushback is guaranteed.",
          "example": "#include <stdio.h>\nFILE *fp = fopen(\"in.txt\", \"r\");\nint ch = fgetc(fp);\nungetc(ch, fp);\nint again = fgetc(fp); // again == ch"
        },
        {
          "id": "id-ungetwc",
          "token": "ungetwc",
          "type": "identifier",
          "description": "Pushes wide character `wc` back onto the input wide stream so the next wide\ncharacter read returns it.",
          "example": "#include <wchar.h>\nFILE *fp = fopen(\"in.txt\", \"r\");\nwint_t wc = fgetwc(fp);\nungetwc(wc, fp);\nwint_t again = fgetwc(fp); // again == wc"
        },
        {
          "id": "id-va_arg",
          "token": "va_arg",
          "type": "identifier",
          "description": "Retrieves the next argument from a `va_list` with the specified type.",
          "example": "#include <stdarg.h>\nint sum(int count, ...) {\n    va_list ap; va_start(ap, count);\n    int s = 0; for (int i = 0; i < count; i++) s += va_arg(ap, int);\n    va_end(ap); return s;\n}"
        },
        {
          "id": "id-va_copy",
          "token": "va_copy",
          "type": "identifier",
          "description": "Copies a `va_list` so it can be iterated independently of the original.",
          "example": "#include <stdarg.h>\nvoid f(int n, ...) {\n    va_list ap, ap2; va_start(ap, n); va_copy(ap2, ap);\n    // use ap and ap2\n    va_end(ap2); va_end(ap);\n}"
        },
        {
          "id": "id-va_end",
          "token": "va_end",
          "type": "identifier",
          "description": "Ends traversal of a `va_list` started by `va_start`. Must be called before\nfunction returns.",
          "example": "#include <stdarg.h>\nvoid g(int n, ...) {\n    va_list ap; va_start(ap, n);\n    // ...\n    va_end(ap);\n}"
        },
        {
          "id": "id-va_list",
          "token": "va_list",
          "type": "identifier",
          "description": "Type used to hold information needed by the macros `va_start`, `va_arg`, and\n`va_end` for variable argument lists.",
          "example": "#include <stdarg.h>\nva_list ap; // declared for use with varargs"
        },
        {
          "id": "id-va_start",
          "token": "va_start",
          "type": "identifier",
          "description": "Initializes a `va_list` for argument retrieval. Must be paired with `va_end`.",
          "example": "#include <stdarg.h>\nvoid f(int n, ...) {\n    va_list ap; va_start(ap, n);\n    // retrieve args via va_arg\n    va_end(ap);\n}"
        },
        {
          "id": "id-vfprintf",
          "token": "vfprintf",
          "type": "identifier",
          "description": "Writes formatted output to a stream using a `va_list` of arguments.\nReturns the number of characters written, or a negative value on error.",
          "example": "#include <stdio.h>\n#include <stdarg.h>\n\nint logf(FILE *fp, const char *fmt, ...) {\n    va_list ap; va_start(ap, fmt);\n    int n = vfprintf(fp, fmt, ap);\n    va_end(ap); return n;\n}\n// logf(stdout, \"%s %d\\n\", \"ok\", 7); // prints: ok 7"
        },
        {
          "id": "id-vfscanf",
          "token": "vfscanf",
          "type": "identifier",
          "description": "Reads formatted input from a stream using a `va_list` of arguments. Returns the\nnumber of input items successfully matched and assigned.",
          "example": "#include <stdio.h>\n#include <stdarg.h>\n\nint readf(FILE *fp, const char *fmt, ...) {\n    va_list ap; va_start(ap, fmt);\n    int n = vfscanf(fp, fmt, ap);\n    va_end(ap); return n;\n}"
        },
        {
          "id": "id-vprintf",
          "token": "vprintf",
          "type": "identifier",
          "description": "Writes formatted output to `stdout` using a `va_list` of arguments.",
          "example": "#include <stdio.h>\n#include <stdarg.h>\n\nvoid vlog(const char *fmt, ...) {\n    va_list ap; va_start(ap, fmt);\n    vprintf(fmt, ap);\n    va_end(ap);\n}\n// vlog(\"%d %s\\n\", 1, \"done\"); // prints: 1 done"
        },
        {
          "id": "id-vscanf",
          "token": "vscanf",
          "type": "identifier",
          "description": "Reads formatted input from `stdin` using a `va_list` of arguments. Returns the\nnumber of items successfully assigned.",
          "example": "#include <stdio.h>\n#include <stdarg.h>\n\nint vscan_wrapper(const char *fmt, ...) {\n    va_list ap; va_start(ap, fmt);\n    int n = vscanf(fmt, ap);\n    va_end(ap); return n;\n}"
        },
        {
          "id": "id-vsnprintf",
          "token": "vsnprintf",
          "type": "identifier",
          "description": "Writes formatted output to a buffer using a `va_list`, up to `size` bytes\nincluding the null terminator. Returns the number of characters that would have\nbeen written excluding the terminator.",
          "example": "#include <stdio.h>\n#include <stdarg.h>\n\nint vfmt(char *buf, size_t size, const char *fmt, ...) {\n    va_list ap; va_start(ap, fmt);\n    int n = vsnprintf(buf, size, fmt, ap);\n    va_end(ap); return n;\n}"
        },
        {
          "id": "id-vsprintf",
          "token": "vsprintf",
          "type": "identifier",
          "description": "Writes formatted output to a string using a `va_list`. Returns the number of\ncharacters written, excluding the null terminator.",
          "example": "#include <stdio.h>\n#include <stdarg.h>\n\nint vfmt2(char *buf, const char *fmt, ...) {\n    va_list ap; va_start(ap, fmt);\n    int n = vsprintf(buf, fmt, ap);\n    va_end(ap); return n;\n}"
        },
        {
          "id": "id-vsscanf",
          "token": "vsscanf",
          "type": "identifier",
          "description": "Reads formatted data from a string using a `va_list` of arguments.\nReturns the number of items successfully assigned.",
          "example": "#include <stdio.h>\n#include <stdarg.h>\n\nint vscan(const char *s, const char *fmt, ...) {\n    va_list ap; va_start(ap, fmt);\n    int n = vsscanf(s, fmt, ap);\n    va_end(ap); return n;\n}"
        },
        {
          "id": "id-vwprintf",
          "token": "vwprintf",
          "type": "identifier",
          "description": "Writes formatted wide-character output to `stdout` using a `va_list`.",
          "example": "#include <wchar.h>\n#include <stdarg.h>\n\nvoid wlog(const wchar_t *fmt, ...) {\n    va_list ap; va_start(ap, fmt);\n    vwprintf(fmt, ap);\n    va_end(ap);\n}\n// wlog(L\"%ls %d\\n\", L\"ok\", 3); // prints: ok 3"
        },
        {
          "id": "id-vwscanf",
          "token": "vwscanf",
          "type": "identifier",
          "description": "Reads formatted wide-character input from `stdin` using a `va_list` of\narguments. Returns the number of items successfully assigned.",
          "example": "#include <wchar.h>\n#include <stdarg.h>\n\nint vwscan(const wchar_t *fmt, ...) {\n    va_list ap; va_start(ap, fmt);\n    int n = vwscanf(fmt, ap);\n    va_end(ap); return n;\n}"
        },
        {
          "id": "id-wcrtomb",
          "token": "wcrtomb",
          "type": "identifier",
          "description": "Converts a wide character to its multibyte sequence, storing it in `s` and\nupdating `mbstate_t *ps`. Returns the number of bytes written, or `(size_t)-1`\non encoding error.",
          "example": "#include <wchar.h>\nmbstate_t st = {0};\nchar mb[MB_CUR_MAX];\nsize_t n = wcrtomb(mb, L'A', &st); // n == 1, mb[0] == 'A'"
        },
        {
          "id": "id-wcscat",
          "token": "wcscat",
          "type": "identifier",
          "description": "Appends the wide string `src` to the end of `dest` (including terminator).\n`dest` must have enough space.",
          "example": "#include <wchar.h>\nwchar_t dest[16] = L\"Hello\";\nwcscat(dest, L\", \");\nwcscat(dest, L\"C\");\n// dest == L\"Hello, C\""
        },
        {
          "id": "id-wcschr",
          "token": "wcschr",
          "type": "identifier",
          "description": "Returns a pointer to the first occurrence of wide character `wc` in wide string\n`ws`, or `NULL` if not found.",
          "example": "#include <wchar.h>\nconst wchar_t *ws = L\"abcdea\";\nconst wchar_t *p = wcschr(ws, L'a'); // p == &ws[0]"
        },
        {
          "id": "id-wcscmp",
          "token": "wcscmp",
          "type": "identifier",
          "description": "Lexicographically compares two wide strings. Returns <0, 0, >0 if `ws1` is less\nthan, equal to, or greater than `ws2`.",
          "example": "#include <wchar.h>\nint r = wcscmp(L\"apple\", L\"banana\"); // r < 0"
        },
        {
          "id": "id-wcscoll",
          "token": "wcscoll",
          "type": "identifier",
          "description": "Compares two wide strings according to the current locale's collation order.\nReturns <0, 0, >0 similar to `wcscmp`.",
          "example": "#include <wchar.h>\n#include <locale.h>\nsetlocale(LC_COLLATE, \"C\");\nint r = wcscoll(L\"a\", L\"b\"); // r < 0 in \"C\" locale"
        },
        {
          "id": "id-wcscpy",
          "token": "wcscpy",
          "type": "identifier",
          "description": "Copies the wide string `src` (including the terminating L'\\0') to `dest`.",
          "example": "#include <wchar.h>\nwchar_t dest[8];\nwcscpy(dest, L\"hi\");\n// dest == L\"hi\""
        },
        {
          "id": "id-wcscspn",
          "token": "wcscspn",
          "type": "identifier",
          "description": "Returns the length of the initial segment of wide string `ws` consisting of\ncharacters not in `reject`.",
          "example": "#include <wchar.h>\nsize_t n = wcscspn(L\"hello,world\", L\",!\"); // n == 5"
        },
        {
          "id": "id-wcsftime",
          "token": "wcsftime",
          "type": "identifier",
          "description": "Formats date and time from a `struct tm` into a wide string according to the\nformat string. Returns the number of wide characters written, or 0 if it does\nnot fit.",
          "example": "#include <wchar.h>\n#include <time.h>\nwchar_t buf[32];\nstruct tm tm = { .tm_year = 123, .tm_mon = 6, .tm_mday = 4 };\nsize_t n = wcsftime(buf, 32, L\"%Y-%m-%d\", &tm);\n// buf == L\"2023-07-04\", n == 10"
        },
        {
          "id": "id-wcslen",
          "token": "wcslen",
          "type": "identifier",
          "description": "Returns the length of wide string `ws`, excluding the terminating null.",
          "example": "#include <wchar.h>\nsize_t n = wcslen(L\"hello\"); // n == 5"
        },
        {
          "id": "id-wcsncat",
          "token": "wcsncat",
          "type": "identifier",
          "description": "Appends at most `n` wide characters from `src` to `dest` and adds a terminating\nnull. `dest` must have enough space.",
          "example": "#include <wchar.h>\nwchar_t dest[8] = L\"a\";\nwcsncat(dest, L\"bcdef\", 3);\n// dest == L\"abcd\""
        },
        {
          "id": "id-wcsncmp",
          "token": "wcsncmp",
          "type": "identifier",
          "description": "Compares at most `n` wide characters of `ws1` and `ws2`. Returns <0, 0, >0\nsimilar to `wcscmp`.",
          "example": "#include <wchar.h>\nint r = wcsncmp(L\"apple\", L\"application\", 5); // r == 0"
        },
        {
          "id": "id-wcsncpy",
          "token": "wcsncpy",
          "type": "identifier",
          "description": "Copies at most `n` wide characters from `src` to `dest`. If `src` is shorter\nthan `n`, the remainder is padded with L'\\0'. Does not L'\\0'-terminate if `src`\nis longer than or equal to `n`.",
          "example": "#include <wchar.h>\nwchar_t dest[5];\nwcsncpy(dest, L\"hello\", 5);\n// dest contains L\"hello\" (no extra terminator)"
        },
        {
          "id": "id-wcspbrk",
          "token": "wcspbrk",
          "type": "identifier",
          "description": "Returns a pointer to the first wide character in `ws` that matches any wide\ncharacter in `accept`, or `NULL` if none are found.",
          "example": "#include <wchar.h>\nconst wchar_t *ws = L\"abcdxyz\";\nconst wchar_t *p = wcspbrk(ws, L\"xy\"); // p == &ws[4]"
        },
        {
          "id": "id-wcsrchr",
          "token": "wcsrchr",
          "type": "identifier",
          "description": "Returns a pointer to the last occurrence of wide character `wc` in wide string\n`ws`, or `NULL` if not found.",
          "example": "#include <wchar.h>\nconst wchar_t *ws = L\"abca\";\nconst wchar_t *p = wcsrchr(ws, L'a'); // p == &ws[3]"
        },
        {
          "id": "id-wcsrtombs",
          "token": "wcsrtombs",
          "type": "identifier",
          "description": "Converts a wide-character string to a multibyte string, restarting from the\nstate pointed to by `ps`. Updates the source pointer. Returns the number of\nbytes written (excluding terminator), or `(size_t)-1` on encoding error.",
          "example": "#include <wchar.h>\nmbstate_t st = {0};\nconst wchar_t *src = L\"Hi\";\nchar dst[8];\nsize_t n = wcsrtombs(dst, &src, sizeof(dst), &st); // n == 2"
        },
        {
          "id": "id-wcsspn",
          "token": "wcsspn",
          "type": "identifier",
          "description": "Returns the length of the initial segment of wide string `ws` consisting only\nof wide characters in `accept`.",
          "example": "#include <wchar.h>\nsize_t n = wcsspn(L\"abc123\", L\"abc\"); // n == 3"
        },
        {
          "id": "id-wcsstr",
          "token": "wcsstr",
          "type": "identifier",
          "description": "Finds the first occurrence of wide substring `needle` in wide string `haystack`.\nReturns pointer to the beginning of the substring, or `NULL` if not found.",
          "example": "#include <wchar.h>\nconst wchar_t *h = L\"Hello, World!\";\nconst wchar_t *p = wcsstr(h, L\"World\"); // p == h + 7"
        },
        {
          "id": "id-wcstod",
          "token": "wcstod",
          "type": "identifier",
          "description": "Converts the initial part of wide string `nptr` to `double`. Stores the address\nof the first unconverted wide character in `*endptr` if non-`NULL`.",
          "example": "#include <wchar.h>\ndouble x = wcstod(L\"3.14\u03c0\", NULL); // x == 3.14"
        },
        {
          "id": "id-wcstof",
          "token": "wcstof",
          "type": "identifier",
          "description": "Converts the initial part of wide string `nptr` to `float`.",
          "example": "#include <wchar.h>\nfloat x = wcstof(L\"2.5e1x\", NULL); // x == 25.0f"
        },
        {
          "id": "id-wcstoimax",
          "token": "wcstoimax",
          "type": "identifier",
          "description": "Converts wide string to `intmax_t` with the given base (0 autodetects). Stores\nend pointer in `*endptr` if non-`NULL`.",
          "example": "#include <wchar.h>\n#include <inttypes.h>\nintmax_t v = wcstoimax(L\"-0x2A\", NULL, 0); // v == -42"
        },
        {
          "id": "id-wcstok",
          "token": "wcstok",
          "type": "identifier",
          "description": "Splits a wide string into tokens separated by any of the delimiter wide\ncharacters. Uses a state pointer for re-entrant behavior.",
          "example": "#include <wchar.h>\nwchar_t s[] = L\"a,b;c\";\nwchar_t *ctx;\nwchar_t *tok = wcstok(s, L\",;\", &ctx); // tok == L\"a\"\ntok = wcstok(NULL, L\",;\", &ctx);       // tok == L\"b\"\ntok = wcstok(NULL, L\",;\", &ctx);       // tok == L\"c\""
        },
        {
          "id": "id-wcstol",
          "token": "wcstol",
          "type": "identifier",
          "description": "Converts wide string to `long int` with the given base (0 autodetects).",
          "example": "#include <wchar.h>\nlong v = wcstol(L\"1010\", NULL, 2); // v == 10"
        },
        {
          "id": "id-wcstold",
          "token": "wcstold",
          "type": "identifier",
          "description": "Converts the initial part of wide string `nptr` to `long double`.",
          "example": "#include <wchar.h>\nlong double x = wcstold(L\"1.25L\", NULL); // x == 1.25L"
        },
        {
          "id": "id-wcstoll",
          "token": "wcstoll",
          "type": "identifier",
          "description": "Converts wide string to `long long int` with the given base.",
          "example": "#include <wchar.h>\nlong long v = wcstoll(L\"-42\", NULL, 10); // v == -42"
        },
        {
          "id": "id-wcstombs",
          "token": "wcstombs",
          "type": "identifier",
          "description": "Converts a wide-character string to a multibyte string using the current\nlocale. Returns number of bytes written (excluding terminator), or `(size_t)-1`\non encoding error.",
          "example": "#include <stdlib.h>\n#include <wchar.h>\nchar mb[16];\nsize_t n = wcstombs(mb, L\"Hi\", sizeof(mb)); // n == 2"
        },
        {
          "id": "id-wcstoul",
          "token": "wcstoul",
          "type": "identifier",
          "description": "Converts wide string to `unsigned long int` with the given base.",
          "example": "#include <wchar.h>\nunsigned long v = wcstoul(L\"0xff\", NULL, 0); // v == 255"
        },
        {
          "id": "id-wcstoull",
          "token": "wcstoull",
          "type": "identifier",
          "description": "Converts wide string to `unsigned long long int` with the given base.",
          "example": "#include <wchar.h>\nunsigned long long v = wcstoull(L\"077\", NULL, 0); // v == 63 (octal)"
        },
        {
          "id": "id-wcstoumax",
          "token": "wcstoumax",
          "type": "identifier",
          "description": "Converts wide string to `uintmax_t` with the given base.",
          "example": "#include <wchar.h>\n#include <inttypes.h>\nuintmax_t v = wcstoumax(L\"18446744073709551615\", NULL, 10); // max 64-bit"
        },
        {
          "id": "id-wcsxfrm",
          "token": "wcsxfrm",
          "type": "identifier",
          "description": "Transforms wide string `src` into a form suitable for locale-aware comparison\ninto `dest`. Returns length of transformed string.",
          "example": "#include <wchar.h>\n#include <locale.h>\nsetlocale(LC_COLLATE, \"C\");\nwchar_t out[16];\nsize_t n = wcsxfrm(out, L\"abc\", 16); // n == 3, out == L\"abc\""
        },
        {
          "id": "id-wctob",
          "token": "wctob",
          "type": "identifier",
          "description": "Converts wide character `wc` to a single byte if representable in the current\nlocale; returns `EOF` otherwise.",
          "example": "#include <wchar.h>\nint c = wctob(L'A'); // c == 'A'"
        },
        {
          "id": "id-wctomb",
          "token": "wctomb",
          "type": "identifier",
          "description": "Converts wide character `wc` to its multibyte sequence using the current\nconversion state. Returns number of bytes written, or -1 on encoding error.",
          "example": "#include <stdlib.h>\nchar mb[MB_CUR_MAX];\nint n = wctomb(mb, L'A'); // n == 1, mb[0] == 'A'"
        },
        {
          "id": "id-wctrans",
          "token": "wctrans",
          "type": "identifier",
          "description": "Returns a mapping descriptor for wide-character transformations, e.g.,\n`wctrans(\"tolower\")` or `wctrans(\"toupper\")`.",
          "example": "#include <wctype.h>\nwctrans_t map = wctrans(\"toupper\");\nwint_t r = towctrans(L'a', map); // r == L'A'"
        },
        {
          "id": "id-wctype",
          "token": "wctype",
          "type": "identifier",
          "description": "Returns a character class descriptor for `iswctype`, e.g., `wctype(\"digit\")`.",
          "example": "#include <wctype.h>\nwctype_t cls = wctype(\"digit\");\nint r1 = iswctype(L'5', cls); // r1 != 0\nint r2 = iswctype(L'A', cls); // r2 == 0"
        },
        {
          "id": "id-wcwidth",
          "token": "wcwidth",
          "type": "identifier",
          "description": "Returns the number of column positions needed for wide character `wc`, or -1 if\n`wc` is not printable (POSIX).",
          "example": "#include <wchar.h>\nint w = wcwidth(L'A'); // w == 1"
        },
        {
          "id": "id-wmemchr",
          "token": "wmemchr",
          "type": "identifier",
          "description": "Searches the first `n` wide characters of the array `ws` for `wc`. Returns\npointer to the match or `NULL`.",
          "example": "#include <wchar.h>\nconst wchar_t *s = L\"hello\";\nconst wchar_t *p = wmemchr(s, L'l', 5); // p == &s[2]"
        },
        {
          "id": "id-wmemcmp",
          "token": "wmemcmp",
          "type": "identifier",
          "description": "Compares the first `n` wide characters of two arrays. Returns <0, 0, >0 if the\nfirst is less than, equal to, or greater than the second.",
          "example": "#include <wchar.h>\nint r = wmemcmp(L\"abc\", L\"abd\", 3); // r < 0"
        },
        {
          "id": "id-wmemcpy",
          "token": "wmemcpy",
          "type": "identifier",
          "description": "Copies `n` wide characters from source to destination. Regions must not overlap.",
          "example": "#include <wchar.h>\nwchar_t dst[4];\nwmemcpy(dst, L\"abc\", 4); // copies L'a',L'b',L'c',L'\\0'"
        },
        {
          "id": "id-wmemmove",
          "token": "wmemmove",
          "type": "identifier",
          "description": "Copies `n` wide characters between arrays, safe for overlapping regions.",
          "example": "#include <wchar.h>\nwchar_t s[] = L\"abcdef\";\nwmemmove(s + 2, s, 4); // s becomes L\"ababcd\""
        },
        {
          "id": "id-wmemset",
          "token": "wmemset",
          "type": "identifier",
          "description": "Fills the first `n` wide characters of the array with `wc`.",
          "example": "#include <wchar.h>\nwchar_t buf[5];\nwmemset(buf, L'*', 4); buf[4] = L'\\0';\n// buf == L\"****\""
        },
        {
          "id": "id-wprintf",
          "token": "wprintf",
          "type": "identifier",
          "description": "Writes formatted wide-character output to `stdout`.",
          "example": "#include <wchar.h>\nint n = wprintf(L\"%ls %d\\n\", L\"hi\", 7); // prints: hi 7\\n; n == 5"
        },
        {
          "id": "id-wscanf",
          "token": "wscanf",
          "type": "identifier",
          "description": "Reads formatted wide-character input from `stdin`. Returns the number of input\nitems successfully assigned.",
          "example": "#include <wchar.h>\nint x; wchar_t w[8];\n// If user types: 42 test<Enter>\nint n = wscanf(L\"%d %7ls\", &x, w);\n// n == 2, x == 42, w == L\"test\""
        },
        {
          "id": "id-thrd_create",
          "token": "thrd_create",
          "type": "identifier",
          "description": "Creates a new thread executing `func(arg)` and stores the thread identifier in\n`*thr`. Returns `thrd_success` on success.",
          "example": "#include <threads.h>\n#include <stdio.h>\n\nint worker(void *arg) { printf(\"%s\\n\", (const char *)arg); return 0; }\n\nthrd_t t;\nint r = thrd_create(&t, worker, (void *)\"hi\"); // r == thrd_success\nthrd_join(t, NULL);"
        },
        {
          "id": "id-thrd_current",
          "token": "thrd_current",
          "type": "identifier",
          "description": "Returns the identifier of the calling thread.",
          "example": "#include <threads.h>\nthrd_t self = thrd_current();"
        },
        {
          "id": "id-thrd_detach",
          "token": "thrd_detach",
          "type": "identifier",
          "description": "Detaches a thread so that its resources are released automatically on exit.",
          "example": "#include <threads.h>\nthrd_t t; /* created earlier */\nint r = thrd_detach(t); // r == thrd_success"
        },
        {
          "id": "id-thrd_equal",
          "token": "thrd_equal",
          "type": "identifier",
          "description": "Compares two thread identifiers for equality. Returns nonzero if equal.",
          "example": "#include <threads.h>\nthrd_t a = thrd_current();\nint same = thrd_equal(a, thrd_current()); // same != 0"
        },
        {
          "id": "id-thrd_exit",
          "token": "thrd_exit",
          "type": "identifier",
          "description": "Terminates the calling thread, making `res` available to `thrd_join`.",
          "example": "#include <threads.h>\nthrd_exit(0);"
        },
        {
          "id": "id-thrd_join",
          "token": "thrd_join",
          "type": "identifier",
          "description": "Joins with a terminated thread and retrieves its exit code in `*res` if not\n`NULL`. Returns `thrd_success` on success.",
          "example": "#include <threads.h>\nint res; thrd_t t; /* created earlier */\nint r = thrd_join(t, &res); // r == thrd_success"
        },
        {
          "id": "id-thrd_sleep",
          "token": "thrd_sleep",
          "type": "identifier",
          "description": "Sleeps for the specified `timespec` duration, optionally returning remaining\ntime in `rem`. Returns 0 if the requested time has elapsed.",
          "example": "#include <threads.h>\nstruct timespec ts = { .tv_sec = 0, .tv_nsec = 1000000 }; // 1ms\nthrd_sleep(&ts, NULL);"
        },
        {
          "id": "id-thrd_yield",
          "token": "thrd_yield",
          "type": "identifier",
          "description": "Hints to the scheduler to yield execution to another thread.",
          "example": "#include <threads.h>\nthrd_yield();"
        },
        {
          "id": "id-thrd_t",
          "token": "thrd_t",
          "type": "identifier",
          "description": "Type of a thread identifier.",
          "example": "#include <threads.h>\nthrd_t t;"
        },
        {
          "id": "id-thrd_start_t",
          "token": "thrd_start_t",
          "type": "identifier",
          "description": "Function pointer type for thread start routines: `int (*)(void *)`.",
          "example": "#include <threads.h>\nint fn(void *p) { return 0; }\nthrd_start_t start = fn;"
        },
        {
          "id": "id-thrd_success",
          "token": "thrd_success",
          "type": "identifier",
          "description": "Return value indicating a successful threads operation (typically 0).",
          "example": "#include <threads.h>\nint r = thrd_success; // r == 0"
        },
        {
          "id": "id-thrd_timedout",
          "token": "thrd_timedout",
          "type": "identifier",
          "description": "Return value indicating a timed-out threads operation.",
          "example": "#include <threads.h>\nint r = thrd_timedout;"
        },
        {
          "id": "id-thrd_busy",
          "token": "thrd_busy",
          "type": "identifier",
          "description": "Return value indicating the resource is busy in a threads operation.",
          "example": "#include <threads.h>\nint r = thrd_busy;"
        },
        {
          "id": "id-thrd_error",
          "token": "thrd_error",
          "type": "identifier",
          "description": "Return value indicating an error in a threads operation.",
          "example": "#include <threads.h>\nint r = thrd_error;"
        },
        {
          "id": "id-thrd_nomem",
          "token": "thrd_nomem",
          "type": "identifier",
          "description": "Return value indicating memory allocation failure in a threads operation.",
          "example": "#include <threads.h>\nint r = thrd_nomem;"
        },
        {
          "id": "id-mtx_init",
          "token": "mtx_init",
          "type": "identifier",
          "description": "Initializes a mutex `*mtx` with the given type flags (`mtx_plain`,\n`mtx_timed`, `mtx_recursive`). Returns `thrd_success` on success.",
          "example": "#include <threads.h>\nmtx_t m;\nint r = mtx_init(&m, mtx_plain); // r == thrd_success"
        },
        {
          "id": "id-mtx_destroy",
          "token": "mtx_destroy",
          "type": "identifier",
          "description": "Destroys a mutex and releases associated resources.",
          "example": "#include <threads.h>\nmtx_t m; /* initialized earlier */\nmtx_destroy(&m);"
        },
        {
          "id": "id-mtx_lock",
          "token": "mtx_lock",
          "type": "identifier",
          "description": "Locks a mutex, blocking until it becomes available. Returns `thrd_success` on\nsuccess.",
          "example": "#include <threads.h>\nmtx_t m; /* initialized */\nmtx_lock(&m);\n// critical section\nmtx_unlock(&m);"
        },
        {
          "id": "id-mtx_trylock",
          "token": "mtx_trylock",
          "type": "identifier",
          "description": "Attempts to lock a mutex without blocking. Returns `thrd_success` if the lock\nwas acquired, `thrd_busy` if already locked.",
          "example": "#include <threads.h>\nmtx_t m; /* initialized */\nint r = mtx_trylock(&m);"
        },
        {
          "id": "id-mtx_timedlock",
          "token": "mtx_timedlock",
          "type": "identifier",
          "description": "Attempts to lock a mutex until the specified absolute time. Returns\n`thrd_success` on success, `thrd_timedout` if the time expires.",
          "example": "#include <threads.h>\nstruct timespec ts = { .tv_sec = 1, .tv_nsec = 0 };\nmtx_t m; /* initialized */\nint r = mtx_timedlock(&m, &ts);"
        },
        {
          "id": "id-mtx_unlock",
          "token": "mtx_unlock",
          "type": "identifier",
          "description": "Unlocks a mutex previously locked by the calling thread.",
          "example": "#include <threads.h>\nmtx_t m; /* locked earlier */\nmtx_unlock(&m);"
        },
        {
          "id": "id-mtx_t",
          "token": "mtx_t",
          "type": "identifier",
          "description": "Type representing a mutex object.",
          "example": "#include <threads.h>\nmtx_t m;"
        },
        {
          "id": "id-mtx_plain",
          "token": "mtx_plain",
          "type": "identifier",
          "description": "Mutex type flag for a plain (non-recursive, possibly non-timed) mutex.",
          "example": "#include <threads.h>\nint flags = mtx_plain;"
        },
        {
          "id": "id-mtx_timed",
          "token": "mtx_timed",
          "type": "identifier",
          "description": "Mutex type flag indicating support for timed locking (`mtx_timedlock`).",
          "example": "#include <threads.h>\nint flags = mtx_timed;"
        },
        {
          "id": "id-mtx_recursive",
          "token": "mtx_recursive",
          "type": "identifier",
          "description": "Mutex type flag indicating a recursive mutex.",
          "example": "#include <threads.h>\nint flags = mtx_recursive;"
        },
        {
          "id": "id-cnd_init",
          "token": "cnd_init",
          "type": "identifier",
          "description": "Initializes a condition variable. Returns `thrd_success` on success.",
          "example": "#include <threads.h>\ncnd_t cv; int r = cnd_init(&cv); // r == thrd_success"
        },
        {
          "id": "id-cnd_destroy",
          "token": "cnd_destroy",
          "type": "identifier",
          "description": "Destroys a condition variable and releases resources.",
          "example": "#include <threads.h>\ncnd_t cv; /* initialized */\ncnd_destroy(&cv);"
        },
        {
          "id": "id-cnd_signal",
          "token": "cnd_signal",
          "type": "identifier",
          "description": "Unblocks one thread waiting on the condition variable.",
          "example": "#include <threads.h>\ncnd_t cv; /* initialized */\ncnd_signal(&cv);"
        },
        {
          "id": "id-cnd_broadcast",
          "token": "cnd_broadcast",
          "type": "identifier",
          "description": "Unblocks all threads waiting on the condition variable.",
          "example": "#include <threads.h>\ncnd_t cv; /* initialized */\ncnd_broadcast(&cv);"
        },
        {
          "id": "id-cnd_wait",
          "token": "cnd_wait",
          "type": "identifier",
          "description": "Atomically releases the mutex and blocks until signaled, then re-acquires the\nmutex before returning.",
          "example": "#include <threads.h>\ncnd_t cv; mtx_t m; /* initialized */\nmtx_lock(&m);\ncnd_wait(&cv, &m);\nmtx_unlock(&m);"
        },
        {
          "id": "id-cnd_timedwait",
          "token": "cnd_timedwait",
          "type": "identifier",
          "description": "Like `cnd_wait` but times out at the specified absolute time. Returns\n`thrd_success` on success, `thrd_timedout` if timed out.",
          "example": "#include <threads.h>\nstruct timespec ts = { .tv_sec = 1, .tv_nsec = 0 };\ncnd_t cv; mtx_t m; /* initialized */\nmtx_lock(&m);\nint r = cnd_timedwait(&cv, &m, &ts);\nmtx_unlock(&m);"
        },
        {
          "id": "id-cnd_t",
          "token": "cnd_t",
          "type": "identifier",
          "description": "Type representing a condition variable.",
          "example": "#include <threads.h>\ncnd_t cv;"
        },
        {
          "id": "id-tss_create",
          "token": "tss_create",
          "type": "identifier",
          "description": "Creates a thread-specific storage (TLS) key, with optional destructor. Returns\n`thrd_success` on success.",
          "example": "#include <threads.h>\ntss_t key;\nint r = tss_create(&key, NULL); // r == thrd_success"
        },
        {
          "id": "id-tss_delete",
          "token": "tss_delete",
          "type": "identifier",
          "description": "Deletes a TLS key created by `tss_create`.",
          "example": "#include <threads.h>\ntss_t key; /* created earlier */\ntss_delete(key);"
        },
        {
          "id": "id-tss_get",
          "token": "tss_get",
          "type": "identifier",
          "description": "Retrieves the thread-specific value associated with the TLS key.",
          "example": "#include <threads.h>\ntss_t key; /* created earlier */\nvoid *p = tss_get(key);"
        },
        {
          "id": "id-tss_set",
          "token": "tss_set",
          "type": "identifier",
          "description": "Sets the thread-specific value for the TLS key. Returns `thrd_success` on success.",
          "example": "#include <threads.h>\ntss_t key; /* created earlier */\nint r = tss_set(key, (void*)0x1234);"
        },
        {
          "id": "id-tss_t",
          "token": "tss_t",
          "type": "identifier",
          "description": "Type representing a TLS key.",
          "example": "#include <threads.h>\ntss_t key;"
        },
        {
          "id": "id-once_flag",
          "token": "once_flag",
          "type": "identifier",
          "description": "Flag object used with `call_once` to ensure a function is executed only once.\nMust be initialized with `ONCE_FLAG_INIT`.",
          "example": "#include <threads.h>\nonce_flag flag = ONCE_FLAG_INIT;"
        },
        {
          "id": "id-call_once",
          "token": "call_once",
          "type": "identifier",
          "description": "Executes the specified function exactly once across all threads using an\nassociated `once_flag`.",
          "example": "#include <threads.h>\nvoid init(void) { /* one-time init */ }\nonce_flag flag = ONCE_FLAG_INIT;\ncall_once(&flag, init);"
        },
        {
          "id": "id-_i",
          "token": "_I",
          "type": "identifier",
          "description": "Imaginary unit for `_Complex` types in C when `<complex.h>` is included.\nEquivalent to `I`.",
          "example": "#include <complex.h>\ndouble complex z = 1.0 + 2.0*_I; // z == 1 + 2i"
        },
        {
          "id": "id-_complex_i",
          "token": "_Complex_I",
          "type": "identifier",
          "description": "Macro expanding to the imaginary unit of type `const float _Complex` promoted as\nneeded. Equivalent to `I` per `<complex.h>`.",
          "example": "#include <complex.h>\ndouble complex z = 3.0 + 4.0*_Complex_I; // z == 3 + 4i"
        },
        {
          "id": "id-i",
          "token": "I",
          "type": "identifier",
          "description": "Standard macro for the imaginary unit `i` from `<complex.h>`.",
          "example": "#include <complex.h>\ndouble complex z = 0.0 + 1.0*I; // z == i"
        },
        {
          "id": "id-fe_divbyzero",
          "token": "FE_DIVBYZERO",
          "type": "identifier",
          "description": "Floating-point exception macro indicating division by zero status/enable bit in\n`<fenv.h>`.",
          "example": "#include <fenv.h>\nint m = FE_DIVBYZERO; // use with fetestexcept(FE_DIVBYZERO)"
        },
        {
          "id": "id-fe_inexact",
          "token": "FE_INEXACT",
          "type": "identifier",
          "description": "Floating-point exception macro indicating inexact result status/enable bit in\n`<fenv.h>`.",
          "example": "#include <fenv.h>\nint m = FE_INEXACT; // use with fetestexcept(FE_INEXACT)"
        },
        {
          "id": "id-fe_invalid",
          "token": "FE_INVALID",
          "type": "identifier",
          "description": "Floating-point exception macro indicating invalid operation status/enable bit in\n`<fenv.h>`.",
          "example": "#include <fenv.h>\nint m = FE_INVALID; // use with fetestexcept(FE_INVALID)"
        },
        {
          "id": "id-fe_overflow",
          "token": "FE_OVERFLOW",
          "type": "identifier",
          "description": "Floating-point exception macro indicating overflow status/enable bit in\n`<fenv.h>`.",
          "example": "#include <fenv.h>\nint m = FE_OVERFLOW; // use with fetestexcept(FE_OVERFLOW)"
        },
        {
          "id": "id-fe_underflow",
          "token": "FE_UNDERFLOW",
          "type": "identifier",
          "description": "Floating-point exception macro indicating underflow status/enable bit in\n`<fenv.h>`.",
          "example": "#include <fenv.h>\nint m = FE_UNDERFLOW; // use with fetestexcept(FE_UNDERFLOW)"
        },
        {
          "id": "id-fe_all_except",
          "token": "FE_ALL_EXCEPT",
          "type": "identifier",
          "description": "Bitwise OR of all supported floating-point exception flags in `<fenv.h>`.\nUseful with `feclearexcept`, `fetestexcept`.",
          "example": "#include <fenv.h>\nfeclearexcept(FE_ALL_EXCEPT);\nint raised = fetestexcept(FE_ALL_EXCEPT); // raised == 0"
        },
        {
          "id": "id-fe_downward",
          "token": "FE_DOWNWARD",
          "type": "identifier",
          "description": "Rounding direction macro in `<fenv.h>`: round toward \u2212\u221e.",
          "example": "#include <fenv.h>\nfesetround(FE_DOWNWARD);"
        },
        {
          "id": "id-fe_tonearest",
          "token": "FE_TONEAREST",
          "type": "identifier",
          "description": "Rounding direction macro in `<fenv.h>`: round to nearest, ties to even.",
          "example": "#include <fenv.h>\nfesetround(FE_TONEAREST);"
        },
        {
          "id": "id-fe_towardzero",
          "token": "FE_TOWARDZERO",
          "type": "identifier",
          "description": "Rounding direction macro in `<fenv.h>`: round toward zero (truncate).",
          "example": "#include <fenv.h>\nfesetround(FE_TOWARDZERO);"
        },
        {
          "id": "id-fe_upward",
          "token": "FE_UPWARD",
          "type": "identifier",
          "description": "Rounding direction macro in `<fenv.h>`: round toward +\u221e.",
          "example": "#include <fenv.h>\nfesetround(FE_UPWARD);"
        },
        {
          "id": "id-prid8",
          "token": "PRId8",
          "type": "identifier",
          "description": "`printf` format macro for signed 8-bit integer (`int8_t`): use with `%`.",
          "example": "#include <inttypes.h>\nint8_t v = -5;\nprintf(\"%\" PRId8 \"\\n\", v); // prints: -5"
        },
        {
          "id": "id-prid16",
          "token": "PRId16",
          "type": "identifier",
          "description": "`printf` format macro for signed 16-bit integer (`int16_t`).",
          "example": "#include <inttypes.h>\nint16_t v = -1234;\nprintf(\"%\" PRId16 \"\\n\", v); // prints: -1234"
        },
        {
          "id": "id-prid32",
          "token": "PRId32",
          "type": "identifier",
          "description": "`printf` format macro for signed 32-bit integer (`int32_t`).",
          "example": "#include <inttypes.h>\nint32_t v = -42;\nprintf(\"%\" PRId32 \"\\n\", v); // prints: -42"
        },
        {
          "id": "id-prid64",
          "token": "PRId64",
          "type": "identifier",
          "description": "`printf` format macro for signed 64-bit integer (`int64_t`).",
          "example": "#include <inttypes.h>\nint64_t v = -9223372036854775807LL;\nprintf(\"%\" PRId64 \"\\n\", v);"
        },
        {
          "id": "id-prii8",
          "token": "PRIi8",
          "type": "identifier",
          "description": "`printf` format macro for signed 8-bit integer (`int8_t`) in `i` style.",
          "example": "#include <inttypes.h>\nint8_t v = -5;\nprintf(\"%\" PRIi8 \"\\n\", v); // prints: -5"
        },
        {
          "id": "id-prii16",
          "token": "PRIi16",
          "type": "identifier",
          "description": "`printf` format macro for signed 16-bit integer (`int16_t`) in `i` style.",
          "example": "#include <inttypes.h>\nint16_t v = -1234;\nprintf(\"%\" PRIi16 \"\\n\", v);"
        },
        {
          "id": "id-prii32",
          "token": "PRIi32",
          "type": "identifier",
          "description": "`printf` format macro for signed 32-bit integer (`int32_t`) in `i` style.",
          "example": "#include <inttypes.h>\nint32_t v = -42;\nprintf(\"%\" PRIi32 \"\\n\", v);"
        },
        {
          "id": "id-prii64",
          "token": "PRIi64",
          "type": "identifier",
          "description": "`printf` format macro for signed 64-bit integer (`int64_t`) in `i` style.",
          "example": "#include <inttypes.h>\nint64_t v = -42;\nprintf(\"%\" PRIi64 \"\\n\", v);"
        },
        {
          "id": "id-prio8",
          "token": "PRIo8",
          "type": "identifier",
          "description": "`printf` format macro for unsigned 8-bit integer in octal (`uint8_t`).",
          "example": "#include <inttypes.h>\nuint8_t v = 63;\nprintf(\"%\" PRIo8 \"\\n\", v); // prints: 77"
        },
        {
          "id": "id-prio16",
          "token": "PRIo16",
          "type": "identifier",
          "description": "`printf` format macro for unsigned 16-bit integer in octal (`uint16_t`).",
          "example": "#include <inttypes.h>\nuint16_t v = 511;\nprintf(\"%\" PRIo16 \"\\n\", v); // prints: 777"
        },
        {
          "id": "id-prio32",
          "token": "PRIo32",
          "type": "identifier",
          "description": "`printf` format macro for unsigned 32-bit integer in octal (`uint32_t`).",
          "example": "#include <inttypes.h>\nuint32_t v = 8;\nprintf(\"%\" PRIo32 \"\\n\", v); // prints: 10"
        },
        {
          "id": "id-prio64",
          "token": "PRIo64",
          "type": "identifier",
          "description": "`printf` format macro for unsigned 64-bit integer in octal (`uint64_t`).",
          "example": "#include <inttypes.h>\nuint64_t v = 64;\nprintf(\"%\" PRIo64 \"\\n\", v); // prints: 100"
        },
        {
          "id": "id-priu8",
          "token": "PRIu8",
          "type": "identifier",
          "description": "`printf` format macro for unsigned 8-bit integer (`uint8_t`).",
          "example": "#include <inttypes.h>\nuint8_t v = 200;\nprintf(\"%\" PRIu8 \"\\n\", v); // prints: 200"
        },
        {
          "id": "id-priu16",
          "token": "PRIu16",
          "type": "identifier",
          "description": "`printf` format macro for unsigned 16-bit integer (`uint16_t`).",
          "example": "#include <inttypes.h>\nuint16_t v = 65535;\nprintf(\"%\" PRIu16 \"\\n\", v); // prints: 65535"
        },
        {
          "id": "id-priu32",
          "token": "PRIu32",
          "type": "identifier",
          "description": "`printf` format macro for unsigned 32-bit integer (`uint32_t`).",
          "example": "#include <inttypes.h>\nuint32_t v = 4294967295u;\nprintf(\"%\" PRIu32 \"\\n\", v);"
        },
        {
          "id": "id-priu64",
          "token": "PRIu64",
          "type": "identifier",
          "description": "`printf` format macro for unsigned 64-bit integer (`uint64_t`).",
          "example": "#include <inttypes.h>\nuint64_t v = 18446744073709551615ull;\nprintf(\"%\" PRIu64 \"\\n\", v);"
        },
        {
          "id": "id-prix8",
          "token": "PRIx8",
          "type": "identifier",
          "description": "`printf` format macro for unsigned 8-bit integer in lowercase hex.",
          "example": "#include <inttypes.h>\nuint8_t v = 255;\nprintf(\"%\" PRIx8 \"\\n\", v); // prints: ff"
        },
        {
          "id": "id-prix16",
          "token": "PRIx16",
          "type": "identifier",
          "description": "`printf` format macro for unsigned 16-bit integer in lowercase hex.",
          "example": "#include <inttypes.h>\nuint16_t v = 48879;\nprintf(\"%\" PRIx16 \"\\n\", v); // prints: beef"
        },
        {
          "id": "id-prix32",
          "token": "PRIx32",
          "type": "identifier",
          "description": "`printf` format macro for unsigned 32-bit integer in lowercase hex.",
          "example": "#include <inttypes.h>\nuint32_t v = 305419896u;\nprintf(\"%\" PRIx32 \"\\n\", v); // prints: 12345678"
        },
        {
          "id": "id-prix64",
          "token": "PRIx64",
          "type": "identifier",
          "description": "`printf` format macro for unsigned 64-bit integer in lowercase hex.",
          "example": "#include <inttypes.h>\nuint64_t v = 0xFFFFFFFFFFFFFFFFull;\nprintf(\"%\" PRIx64 \"\\n\", v); // prints: ffffffffffffffff"
        },
        {
          "id": "id-prix8",
          "token": "PRIX8",
          "type": "identifier",
          "description": "`printf` format macro for unsigned 8-bit integer in uppercase hex.",
          "example": "#include <inttypes.h>\nuint8_t v = 255;\nprintf(\"%\" PRIX8 \"\\n\", v); // prints: FF"
        },
        {
          "id": "id-prix16",
          "token": "PRIX16",
          "type": "identifier",
          "description": "`printf` format macro for unsigned 16-bit integer in uppercase hex.",
          "example": "#include <inttypes.h>\nuint16_t v = 48879;\nprintf(\"%\" PRIX16 \"\\n\", v); // prints: BEEF"
        },
        {
          "id": "id-prix32",
          "token": "PRIX32",
          "type": "identifier",
          "description": "`printf` format macro for unsigned 32-bit integer in uppercase hex.",
          "example": "#include <inttypes.h>\nuint32_t v = 305419896u;\nprintf(\"%\" PRIX32 \"\\n\", v); // prints: 12345678 (uppercase letters if any)"
        },
        {
          "id": "id-prix64",
          "token": "PRIX64",
          "type": "identifier",
          "description": "`printf` format macro for unsigned 64-bit integer in uppercase hex.",
          "example": "#include <inttypes.h>\nuint64_t v = 0xABCDEF1234567890ull;\nprintf(\"%\" PRIX64 \"\\n\", v); // prints: ABCDEF1234567890"
        },
        {
          "id": "id-scnd8",
          "token": "SCNd8",
          "type": "identifier",
          "description": "`scanf` format macro to read a signed 8-bit integer (`int8_t`).",
          "example": "#include <inttypes.h>\nint8_t v; sscanf(\"-5\", \"%\" SCNd8, &v); // v == -5"
        },
        {
          "id": "id-scnd16",
          "token": "SCNd16",
          "type": "identifier",
          "description": "`scanf` format macro to read a signed 16-bit integer (`int16_t`).",
          "example": "#include <inttypes.h>\nint16_t v; sscanf(\"-1234\", \"%\" SCNd16, &v); // v == -1234"
        },
        {
          "id": "id-scnd32",
          "token": "SCNd32",
          "type": "identifier",
          "description": "`scanf` format macro to read a signed 32-bit integer (`int32_t`).",
          "example": "#include <inttypes.h>\nint32_t v; sscanf(\"-42\", \"%\" SCNd32, &v); // v == -42"
        },
        {
          "id": "id-scnd64",
          "token": "SCNd64",
          "type": "identifier",
          "description": "`scanf` format macro to read a signed 64-bit integer (`int64_t`).",
          "example": "#include <inttypes.h>\nint64_t v; sscanf(\"-9223372036854775807\", \"%\" SCNd64, &v);"
        },
        {
          "id": "id-scni8",
          "token": "SCNi8",
          "type": "identifier",
          "description": "`scanf` format macro to read a signed 8-bit integer (`int8_t`) in `i` style\n(base-detecting).",
          "example": "#include <inttypes.h>\nint8_t v; sscanf(\"-5\", \"%\" SCNi8, &v); // v == -5"
        },
        {
          "id": "id-scni16",
          "token": "SCNi16",
          "type": "identifier",
          "description": "`scanf` format macro to read a signed 16-bit integer (`int16_t`) in `i` style.",
          "example": "#include <inttypes.h>\nint16_t v; sscanf(\"-1234\", \"%\" SCNi16, &v);"
        },
        {
          "id": "id-scni32",
          "token": "SCNi32",
          "type": "identifier",
          "description": "`scanf` format macro to read a signed 32-bit integer (`int32_t`) in `i` style.",
          "example": "#include <inttypes.h>\nint32_t v; sscanf(\"-42\", \"%\" SCNi32, &v);"
        },
        {
          "id": "id-scni64",
          "token": "SCNi64",
          "type": "identifier",
          "description": "`scanf` format macro to read a signed 64-bit integer (`int64_t`) in `i` style.",
          "example": "#include <inttypes.h>\nint64_t v; sscanf(\"-42\", \"%\" SCNi64, &v);"
        },
        {
          "id": "id-scno8",
          "token": "SCNo8",
          "type": "identifier",
          "description": "`scanf` format macro to read an unsigned 8-bit integer in octal (`uint8_t`).",
          "example": "#include <inttypes.h>\nuint8_t v; sscanf(\"77\", \"%\" SCNo8, &v); // v == 63"
        },
        {
          "id": "id-scno16",
          "token": "SCNo16",
          "type": "identifier",
          "description": "`scanf` format macro to read an unsigned 16-bit integer in octal (`uint16_t`).",
          "example": "#include <inttypes.h>\nuint16_t v; sscanf(\"777\", \"%\" SCNo16, &v); // v == 511"
        },
        {
          "id": "id-scno32",
          "token": "SCNo32",
          "type": "identifier",
          "description": "`scanf` format macro to read an unsigned 32-bit integer in octal (`uint32_t`).",
          "example": "#include <inttypes.h>\nuint32_t v; sscanf(\"10\", \"%\" SCNo32, &v); // v == 8"
        },
        {
          "id": "id-scno64",
          "token": "SCNo64",
          "type": "identifier",
          "description": "`scanf` format macro to read an unsigned 64-bit integer in octal (`uint64_t`).",
          "example": "#include <inttypes.h>\nuint64_t v; sscanf(\"100\", \"%\" SCNo64, &v); // v == 64"
        },
        {
          "id": "id-scnu8",
          "token": "SCNu8",
          "type": "identifier",
          "description": "`scanf` format macro to read an unsigned 8-bit integer (`uint8_t`).",
          "example": "#include <inttypes.h>\nuint8_t v; sscanf(\"200\", \"%\" SCNu8, &v); // v == 200"
        },
        {
          "id": "id-scnu16",
          "token": "SCNu16",
          "type": "identifier",
          "description": "`scanf` format macro to read an unsigned 16-bit integer (`uint16_t`).",
          "example": "#include <inttypes.h>\nuint16_t v; sscanf(\"65535\", \"%\" SCNu16, &v); // v == 65535"
        },
        {
          "id": "id-scnu32",
          "token": "SCNu32",
          "type": "identifier",
          "description": "`scanf` format macro to read an unsigned 32-bit integer (`uint32_t`).",
          "example": "#include <inttypes.h>\nuint32_t v; sscanf(\"4294967295\", \"%\" SCNu32, &v);"
        },
        {
          "id": "id-scnu64",
          "token": "SCNu64",
          "type": "identifier",
          "description": "`scanf` format macro to read an unsigned 64-bit integer (`uint64_t`).",
          "example": "#include <inttypes.h>\nuint64_t v; sscanf(\"18446744073709551615\", \"%\" SCNu64, &v);"
        },
        {
          "id": "id-scnx8",
          "token": "SCNx8",
          "type": "identifier",
          "description": "`scanf` format macro to read an unsigned 8-bit integer in hex (`uint8_t`).",
          "example": "#include <inttypes.h>\nuint8_t v; sscanf(\"ff\", \"%\" SCNx8, &v); // v == 255"
        },
        {
          "id": "id-scnx16",
          "token": "SCNx16",
          "type": "identifier",
          "description": "`scanf` format macro to read an unsigned 16-bit integer in hex (`uint16_t`).",
          "example": "#include <inttypes.h>\nuint16_t v; sscanf(\"BEEF\", \"%\" SCNx16, &v); // v == 48879"
        },
        {
          "id": "id-scnx32",
          "token": "SCNx32",
          "type": "identifier",
          "description": "`scanf` format macro to read an unsigned 32-bit integer in hex (`uint32_t`).",
          "example": "#include <inttypes.h>\nuint32_t v; sscanf(\"12345678\", \"%\" SCNx32, &v); // v == 0x12345678"
        },
        {
          "id": "id-scnx64",
          "token": "SCNx64",
          "type": "identifier",
          "description": "`scanf` format macro to read an unsigned 64-bit integer in hex (`uint64_t`).",
          "example": "#include <inttypes.h>\nuint64_t v; sscanf(\"ABCDEF1234567890\", \"%\" SCNx64, &v); // v == 0xABCDEF1234567890"
        },
        {
          "id": "id-edom",
          "token": "EDOM",
          "type": "identifier",
          "description": "Mathematics argument out of domain error macro for `errno` (e.g., `acos(2)`).",
          "example": "#include <math.h>\n#include <errno.h>\nerrno = 0; acos(2.0); int e = errno; // e may be set to EDOM"
        },
        {
          "id": "id-erange",
          "token": "ERANGE",
          "type": "identifier",
          "description": "Range error macro for `errno` (e.g., overflow/underflow such as `strtod` huge\nvalues).",
          "example": "#include <stdlib.h>\n#include <errno.h>\nerrno = 0; strtod(\"1e5000\", NULL); int e = errno; // e may be ERANGE"
        },
        {
          "id": "id-eilseq",
          "token": "EILSEQ",
          "type": "identifier",
          "description": "Illegal byte sequence macro for `errno` (e.g., invalid multibyte sequence).",
          "example": "#include <stdlib.h>\n#include <errno.h>\nerrno = 0; mbtowc(NULL, \"\\xff\", 1); int e = errno; // e may be EILSEQ"
        },
        {
          "id": "id-errno",
          "token": "errno",
          "type": "identifier",
          "description": "Thread-local integer lvalue set by library functions on error to indicate the\nerror code.",
          "example": "#include <stdio.h>\n#include <errno.h>\nFILE *f = fopen(\"/nope\", \"r\");\nif (!f) { int e = errno; /* use e */ }"
        },
        {
          "id": "id-char_bit",
          "token": "CHAR_BIT",
          "type": "identifier",
          "description": "Number of bits in a byte for type `char` (commonly 8).",
          "example": "#include <limits.h>\nint n = CHAR_BIT; // e.g., 8"
        },
        {
          "id": "id-schar_min",
          "token": "SCHAR_MIN",
          "type": "identifier",
          "description": "Minimum value for type `signed char`.",
          "example": "#include <limits.h>\nint m = SCHAR_MIN; // typically -128"
        },
        {
          "id": "id-schar_max",
          "token": "SCHAR_MAX",
          "type": "identifier",
          "description": "Maximum value for type `signed char`.",
          "example": "#include <limits.h>\nint m = SCHAR_MAX; // typically 127"
        },
        {
          "id": "id-uchar_max",
          "token": "UCHAR_MAX",
          "type": "identifier",
          "description": "Maximum value for type `unsigned char`.",
          "example": "#include <limits.h>\nint m = UCHAR_MAX; // typically 255"
        },
        {
          "id": "id-char_min",
          "token": "CHAR_MIN",
          "type": "identifier",
          "description": "Minimum value for type `char` (either `SCHAR_MIN` or 0 depending on signedness\nof `char`).",
          "example": "#include <limits.h>\nint m = CHAR_MIN; // implementation-defined"
        },
        {
          "id": "id-char_max",
          "token": "CHAR_MAX",
          "type": "identifier",
          "description": "Maximum value for type `char` (either `SCHAR_MAX` or `UCHAR_MAX`).",
          "example": "#include <limits.h>\nint m = CHAR_MAX; // implementation-defined"
        },
        {
          "id": "id-mb_len_max",
          "token": "MB_LEN_MAX",
          "type": "identifier",
          "description": "Maximum number of bytes in a multibyte character for the current locale.",
          "example": "#include <limits.h>\nint n = MB_LEN_MAX;"
        },
        {
          "id": "id-shrt_min",
          "token": "SHRT_MIN",
          "type": "identifier",
          "description": "Minimum value for type `short int`.",
          "example": "#include <limits.h>\nint m = SHRT_MIN; // typically -32768"
        },
        {
          "id": "id-shrt_max",
          "token": "SHRT_MAX",
          "type": "identifier",
          "description": "Maximum value for type `short int`.",
          "example": "#include <limits.h>\nint m = SHRT_MAX; // typically 32767"
        },
        {
          "id": "id-ushrt_max",
          "token": "USHRT_MAX",
          "type": "identifier",
          "description": "Maximum value for type `unsigned short int`.",
          "example": "#include <limits.h>\nint m = USHRT_MAX; // typically 65535"
        },
        {
          "id": "id-int_min",
          "token": "INT_MIN",
          "type": "identifier",
          "description": "Minimum value for type `int`.",
          "example": "#include <limits.h>\nint m = INT_MIN; // e.g., -2147483648 on 32-bit int"
        },
        {
          "id": "id-int_max",
          "token": "INT_MAX",
          "type": "identifier",
          "description": "Maximum value for type `int`.",
          "example": "#include <limits.h>\nint m = INT_MAX; // e.g., 2147483647 on 32-bit int"
        },
        {
          "id": "id-uint_max",
          "token": "UINT_MAX",
          "type": "identifier",
          "description": "Maximum value for type `unsigned int`.",
          "example": "#include <limits.h>\nunsigned int m = UINT_MAX; // e.g., 4294967295u on 32-bit"
        },
        {
          "id": "id-long_min",
          "token": "LONG_MIN",
          "type": "identifier",
          "description": "Minimum value for type `long`.",
          "example": "#include <limits.h>\nlong m = LONG_MIN; // platform-dependent (e.g., -9223372036854775808 on LP64)"
        },
        {
          "id": "id-long_max",
          "token": "LONG_MAX",
          "type": "identifier",
          "description": "Maximum value for type `long`.",
          "example": "#include <limits.h>\nlong m = LONG_MAX; // platform-dependent (e.g., 9223372036854775807 on LP64)"
        },
        {
          "id": "id-ulong_max",
          "token": "ULONG_MAX",
          "type": "identifier",
          "description": "Maximum value for type `unsigned long`.",
          "example": "#include <limits.h>\nunsigned long m = ULONG_MAX; // e.g., 18446744073709551615ul on LP64"
        },
        {
          "id": "id-llong_min",
          "token": "LLONG_MIN",
          "type": "identifier",
          "description": "Minimum value for type `long long`.",
          "example": "#include <limits.h>\nlong long m = LLONG_MIN; // -9223372036854775808"
        },
        {
          "id": "id-llong_max",
          "token": "LLONG_MAX",
          "type": "identifier",
          "description": "Maximum value for type `long long`.",
          "example": "#include <limits.h>\nlong long m = LLONG_MAX; // 9223372036854775807"
        },
        {
          "id": "id-ullong_max",
          "token": "ULLONG_MAX",
          "type": "identifier",
          "description": "Maximum value for type `unsigned long long`.",
          "example": "#include <limits.h>\nunsigned long long m = ULLONG_MAX; // 18446744073709551615ull"
        },
        {
          "id": "id-flt_radix",
          "token": "FLT_RADIX",
          "type": "identifier",
          "description": "Radix (base) of the exponent representation for all floating types (commonly 2).",
          "example": "#include <float.h>\nint r = FLT_RADIX; // typically 2"
        },
        {
          "id": "id-flt_true_min",
          "token": "FLT_TRUE_MIN",
          "type": "identifier",
          "description": "Minimum positive normalized or subnormal value of type `float` (IEEE-754 true\nminimum subnormal).",
          "example": "#include <float.h>\nfloat x = FLT_TRUE_MIN; // smallest positive float"
        },
        {
          "id": "id-flt_min",
          "token": "FLT_MIN",
          "type": "identifier",
          "description": "Minimum positive normalized value of type `float`.",
          "example": "#include <float.h>\nfloat x = FLT_MIN; // ~1.175494e-38 (IEEE-754)"
        },
        {
          "id": "id-flt_max",
          "token": "FLT_MAX",
          "type": "identifier",
          "description": "Maximum finite value of type `float`.",
          "example": "#include <float.h>\nfloat x = FLT_MAX; // ~3.402823e+38"
        },
        {
          "id": "id-flt_epsilon",
          "token": "FLT_EPSILON",
          "type": "identifier",
          "description": "Difference between 1 and the least `float` greater than 1 (machine epsilon for\nfloat).",
          "example": "#include <float.h>\nfloat e = FLT_EPSILON; // ~1.192093e-07"
        },
        {
          "id": "id-dbl_true_min",
          "token": "DBL_TRUE_MIN",
          "type": "identifier",
          "description": "Minimum positive subnormal `double` value (IEEE-754 true minimum).",
          "example": "#include <float.h>\ndouble x = DBL_TRUE_MIN; // ~4.940656e-324"
        },
        {
          "id": "id-dbl_min",
          "token": "DBL_MIN",
          "type": "identifier",
          "description": "Minimum positive normalized `double` value.",
          "example": "#include <float.h>\ndouble x = DBL_MIN; // ~2.225074e-308"
        },
        {
          "id": "id-dbl_max",
          "token": "DBL_MAX",
          "type": "identifier",
          "description": "Maximum finite `double` value.",
          "example": "#include <float.h>\ndouble x = DBL_MAX; // ~1.797693e+308"
        },
        {
          "id": "id-dbl_epsilon",
          "token": "DBL_EPSILON",
          "type": "identifier",
          "description": "Difference between 1 and the least `double` greater than 1 (machine epsilon for\ndouble).",
          "example": "#include <float.h>\ndouble e = DBL_EPSILON; // ~2.220446e-16"
        },
        {
          "id": "id-ldbl_true_min",
          "token": "LDBL_TRUE_MIN",
          "type": "identifier",
          "description": "Minimum positive subnormal `long double` value (platform-dependent).",
          "example": "#include <float.h>\nlong double x = LDBL_TRUE_MIN;"
        },
        {
          "id": "id-ldbl_min",
          "token": "LDBL_MIN",
          "type": "identifier",
          "description": "Minimum positive normalized `long double` value.",
          "example": "#include <float.h>\nlong double x = LDBL_MIN;"
        },
        {
          "id": "id-ldbl_max",
          "token": "LDBL_MAX",
          "type": "identifier",
          "description": "Maximum finite `long double` value.",
          "example": "#include <float.h>\nlong double x = LDBL_MAX;"
        },
        {
          "id": "id-ldbl_epsilon",
          "token": "LDBL_EPSILON",
          "type": "identifier",
          "description": "Difference between 1 and the least `long double` greater than 1 (machine\nepsilon for long double).",
          "example": "#include <float.h>\nlong double e = LDBL_EPSILON;"
        }
      ]
    }
  ]
};

module.exports = C_DICTIONARY;
