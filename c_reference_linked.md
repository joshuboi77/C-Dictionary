# C Language Reference (Linked)

## Keywords

### Table of Contents

- [`auto`](#kw-auto)
- [`break`](#kw-break)
- [`case`](#kw-case)
- [`char`](#kw-char)
- [`const`](#kw-const)
- [`continue`](#kw-continue)
- [`default`](#kw-default)
- [`do`](#kw-do)
- [`double`](#kw-double)
- [`else`](#kw-else)
- [`enum`](#kw-enum)
- [`extern`](#kw-extern)
- [`float`](#kw-float)
- [`for`](#kw-for)
- [`goto`](#kw-goto)
- [`if`](#kw-if)
- [`inline`](#kw-inline)
- [`int`](#kw-int)
- [`long`](#kw-long)
- [`register`](#kw-register)
- [`restrict`](#kw-restrict)
- [`return`](#kw-return)
- [`short`](#kw-short)
- [`signed`](#kw-signed)
- [`sizeof`](#kw-sizeof)
- [`static`](#kw-static)
- [`struct`](#kw-struct)
- [`switch`](#kw-switch)
- [`typedef`](#kw-typedef)
- [`union`](#kw-union)
- [`unsigned`](#kw-unsigned)
- [`void`](#kw-void)
- [`volatile`](#kw-volatile)
- [`while`](#kw-while)
- [`_Alignas`](#kw-_alignas)
- [`_Alignof`](#kw-_alignof)
- [`_Atomic`](#kw-_atomic)
- [`_BitInt`](#kw-_bitint)
- [`_Bool`](#kw-_bool)
- [`_Complex`](#kw-_complex)
- [`_Generic`](#kw-_generic)
- [`_Imaginary`](#kw-_imaginary)
- [`_Noreturn`](#kw-_noreturn)
- [`_Static_assert`](#kw-_static_assert)
- [`_Thread_local`](#kw-_thread_local)

---

### Entries

<a id="kw-auto"></a>
### `auto`

_Description:_
---
Storage class specifier for automatic variables (block scope, automatic storage duration). Local variables declared inside a block are automatic; storage is allocated on entry and released on exit. Because non-static locals are automatic by default, writing `auto` is redundant in C.

Example:

```c
void f(void) {
    auto int x = 10;  // equivalent to: int x = 10;
}
```
---

<a id="kw-break"></a>
### `break`

_Description:_
---
Immediately terminates the nearest enclosing `switch`, `for`, `while`, or `do` loop and transfers control to the statement following it.

Example:

```c
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break; // exits the loop when i is 5
    }
}
```
---

<a id="kw-case"></a>
### `case`

_Description:_
---
Labels a branch inside a `switch` statement for a matching constant expression value. Must be used within `switch`.

Example:

```c
int n = 2;
switch (n) {
    case 1: /* ... */ break;
    case 2: /* ... */ break;
    default: /* ... */ break;
}
```
---

<a id="kw-char"></a>
### `char`

_Description:_
---
Integer type typically used to store character codes. Signedness is implementation-defined (`char` may be signed or unsigned). `signed char` and `unsigned char` are distinct types.

Example:

```c
char letter = 'A';
```
---

<a id="kw-const"></a>
### `const`

_Description:_
---
Qualifies an object or pointer target as read-only. Attempts to modify a `const` object result in undefined behavior. Does not imply static storage.

Example:

```c
const int limit = 10;  /* cannot be modified */
```
---

<a id="kw-continue"></a>
### `continue`

_Description:_
---
Skips to the next iteration of the nearest enclosing loop. In `for` loops, the increment expression is evaluated before the next condition check.

Example:

```c
for (int i = 0; i < 5; i++) {
    if (i == 2) continue;  // skip printing 2
}
```
---

<a id="kw-default"></a>
### `default`

_Description:_
---
Specifies the fallback branch in a `switch` when no `case` matches. At most one `default` per `switch`.

Example:

```c
switch (getchar()) {
    case 'y': /* ... */ break;
    case 'n': /* ... */ break;
    default:  /* ... */ break;
}
```
---

<a id="kw-do"></a>
### `do`

_Description:_
---
Starts a `do`-`while` loop, which executes the body at least once before testing the condition.

Example:

```c
int i = 0;
do {
    /* body */
    i++;
} while (i < 5);
```
---

<a id="kw-double"></a>
### `double`

_Description:_
---
Double-precision floating-point type. `long double` may offer greater precision; `float` offers less.

Example:

```c
double pi = 3.141592653589793;
```
---

<a id="kw-else"></a>
### `else`

_Description:_
---
Introduces the alternative branch of an `if` statement when the condition is false. Pairs with the nearest unmatched `if`.

Example:

```c
int x = 3;
if (x > 0) {
    /* ... */
} else {
    /* ... */
}
```
---

<a id="kw-enum"></a>
### `enum`

_Description:_
---
Defines an enumeration type with named integer constants. Enumerator values are `int` compatible and may be explicitly assigned.

Example:

```c
enum Color { RED = 0, GREEN = 1, BLUE = 2 };
enum Color c = GREEN;
```
---

<a id="kw-extern"></a>
### `extern`

_Description:_
---
Declares an identifier with external linkage defined elsewhere. Commonly used for variables or functions defined in another translation unit.

Example:

```c
/* file1.c */
int counter = 0;  // definition

/* file2.c */
extern int counter;  // declaration
```
---

<a id="kw-float"></a>
### `float`

_Description:_
---
Single-precision floating-point type.

Example:

```c
float ratio = 0.5f;
```
---

<a id="kw-for"></a>
### `for`

_Description:_
---
Creates a counted loop with initializer, condition, and iteration expressions. Any component may be omitted; expressions evaluate left-to-right each iteration.

Example:

```c
for (int i = 0; i < 5; i++) {
    /* body */
}
```
---

<a id="kw-goto"></a>
### `goto`

_Description:_
---
Transfers control to a labeled statement within the same function. Use sparingly; you cannot jump into the scope of a variable in a way that skips its initialization.

Example:

```c
int i = 0;
start:
if (++i <= 3) goto start;  // loops 3 times
```
---

<a id="kw-if"></a>
### `if`

_Description:_
---
Executes a statement/compound-statement conditionally. `else` binds to the nearest unmatched `if`.

Example:

```c
int x = 5;
if (x > 0) {
    /* ... */
} else if (x < 0) {
    /* ... */
} else {
    /* ... */
}
```
---

<a id="kw-inline"></a>
### `inline`

_Description:_
---
Suggests that calls to a function be inlined; also affects linkage rules for function definitions in headers. Prefer `static inline` for header-only helpers and provide one external (non-inline) definition if needed.

Example:

```c
static inline int sqr(int x) { return x * x; }
```
---

<a id="kw-int"></a>
### `int`

_Description:_
---
Signed integer type. Width is implementation-defined (at least 16 bits, commonly 32).

Example:

```c
int count = 42;
```
---

<a id="kw-long"></a>
### `long`

_Description:_
---
Integer type wider than or equal to `int` (at least 32 bits). Width varies by platform/ABI (`long` is 64-bit on LP64, 32-bit on LLP64).

Example:

```c
long total = 0L;
```
---

<a id="kw-register"></a>
### `register`

_Description:_
---
Obsolete hint to place a variable in a CPU register. Taking the address of a `register` variable is not allowed.

Example:

```c
register int i;
```
---

<a id="kw-restrict"></a>
### `restrict`

_Description:_
---
Pointer qualifier promising that, for the lifetime of the pointer, the object it points to is accessed only through that pointer (or values derived from it). Enables aliasing optimizations. Applies to pointers only.

Example:

```c
void add_arrays(size_t n, const float *restrict a,
                const float *restrict b, float *restrict out) {
    for (size_t i = 0; i < n; i++) out[i] = a[i] + b[i];
}
```
---

<a id="kw-return"></a>
### `return`

_Description:_
---
Terminates the current function. In non-`void` functions, `return` must include an expression yielding the result. In `void` functions, `return;` returns no value.

Example:

```c
int add(int a, int b) { return a + b; }
```
---

<a id="kw-short"></a>
### `short`

_Description:_
---
`short int` type, at least 16 bits. May be `signed` or `unsigned`.

Example:

```c
short s = 123;
```
---

<a id="kw-signed"></a>
### `signed`

_Description:_
---
Type modifier indicating a signed integer type. Default for `char` is implementation-defined; `signed char` and `unsigned char` are distinct types.

Example:

```c
signed int temperature = -5;
```
---

<a id="kw-sizeof"></a>
### `sizeof`

_Description:_
---
Operator yielding the size in bytes of a type or expression (type `size_t`). Its operand is not evaluated, except when applied to a variable length array type.

Example:

```c
size_t n = sizeof(int);
```
---

<a id="kw-static"></a>
### `static`

_Description:_
---
At block scope: gives a variable static storage duration (retains value across calls, zero-initialized). At file scope: gives internal linkage (not visible outside the translation unit).

Example:

```c
static int file_private;

void counter(void) {
    static int count;  // persists across calls
    count++;
}
```
---

<a id="kw-struct"></a>
### `struct`

_Description:_
---
Defines a structure type aggregating named members.

Example:

```c
struct Point { int x; int y; };
struct Point p = { .x = 1, .y = 2 };
```
---

<a id="kw-switch"></a>
### `switch`

_Description:_
---
Multi-way branch on an integer-controlled expression. `case` labels must be constant integer expressions and unique; use `break` to avoid fallthrough.

Example:

```c
switch (c) {
    case 'a': /* ... */ break;
    case 'b': /* ... */ break;
    default:  /* ... */ break;
}
```
---

<a id="kw-typedef"></a>
### `typedef`

_Description:_
---
Creates an alias for a type. Does not create a distinct type.

Example:

```c
typedef unsigned long ulong;
```
---

<a id="kw-union"></a>
### `union`

_Description:_
---
Defines a union type whose members share the same storage. Only the most recently written member has a valid value.

Example:

```c
union U { int i; float f; };
union U u; u.i = 42;  // u.f then has indeterminate value
```
---

<a id="kw-unsigned"></a>
### `unsigned`

_Description:_
---
Type modifier for unsigned integer types (no negative values; modulo arithmetic).

Example:

```c
unsigned int u = 10u;
```
---

<a id="kw-void"></a>
### `void`

_Description:_
---
Indicates no value (function return type) or an unknown object type (`void *`). Objects of type `void` cannot be declared.

Example:

```c
void log_message(const char *s);
void *p = NULL;
```
---

<a id="kw-volatile"></a>
### `volatile`

_Description:_
---
Type qualifier indicating that an object may be changed by factors outside the program. Inhibits certain optimizations. Not a substitute for atomicity or synchronization.

Example:

```c
volatile int flag;
```
---

<a id="kw-while"></a>
### `while`

_Description:_
---
Pre-test loop that repeats while the condition is nonzero.

Example:

```c
int i = 0;
while (i < 3) { i++; }
```
---

<a id="kw-_alignas"></a>
### `_Alignas`

_Description:_
---
Specifies the alignment requirement of an object or member (may increase, not decrease, alignment). See `<stdalign.h>` for standard alignment macros.

Example:

```c
_Alignas(16) unsigned char buf[64];
```
---

<a id="kw-_alignof"></a>
### `_Alignof`

_Description:_
---
Yields the alignment requirement (in bytes) of a type; result type is `size_t`.

Example:

```c
size_t a = _Alignof(double);
```
---

<a id="kw-_atomic"></a>
### `_Atomic`

_Description:_
---
Type qualifier/specifier for atomic types. Use `_Atomic(T)` or `T _Atomic` with `<stdatomic.h>` operations to perform lock-free or atomic accesses.

Example:

```c
#include <stdatomic.h>
_Atomic int counter = 0;
```
---

<a id="kw-_bitint"></a>
### `_BitInt`

_Description:_
---
Bit-precise integer type introduced in C23: `_BitInt(N)` and `unsigned _BitInt(N)` provide integers with exactly `N` value bits (where supported by the implementation).

Example:

```c
unsigned _BitInt(17) x = 0u;
```
---

<a id="kw-_bool"></a>
### `_Bool`

_Description:_
---
Boolean type with values 0 and 1. Include `<stdbool.h>` to use the aliases `bool`, `true`, and `false`.

Example:

```c
#include <stdbool.h>
bool ok = true;
```
---

<a id="kw-_complex"></a>
### `_Complex`

_Description:_
---
Complex number type qualifier introduced in C99. Use with a real floating type (e.g., `double _Complex`). Operations and helpers are provided by `<complex.h>`.

Example:

```c
#include <complex.h>
double _Complex z = 1.0 + 2.0 * I;
double r = creal(z), im = cimag(z);
```
---

<a id="kw-_generic"></a>
### `_Generic`

_Description:_
---
C11 compile-time generic selection that chooses an expression based on the type of a controlling expression. Useful for type-generic macros.

Example:

```c
#define type_name(x) _Generic((x), \
    int: "int", \
    double: "double", \
    default: "other")
```
---

<a id="kw-_imaginary"></a>
### `_Imaginary`

_Description:_
---
Imaginary-only floating type qualifier from C99. Rarely implemented and seldom used; `<complex.h>` complex types are generally preferred.

Example:

```c
double _Imaginary y = 2.0 * I;  // if supported
```
---

<a id="kw-_noreturn"></a>
### `_Noreturn`

_Description:_
---
Function specifier indicating that a function does not return to its caller. Typically used on functions that terminate the program or never return.

Example:

```c
#include <stdlib.h>
_Noreturn void die(void) { exit(1); }
```
---

<a id="kw-_static_assert"></a>
### `_Static_assert`

_Description:_
---
C11 compile-time assertion. First argument is a constant expression; second is a string literal message shown on failure.

Example:

```c
_Static_assert(sizeof(void*) >= 4, "Pointer too small");
```
---

<a id="kw-_thread_local"></a>
### `_Thread_local`

_Description:_
---
Specifies thread storage duration: each thread has its own instance initialized at thread start. Use with `static` or `extern` as needed. Deprecated in C23 in favor of `thread_local`.

Example:

```c
_Thread_local int tls_counter;
```
---

## Operators

### Table of Contents

- [`[ ]`](#op-5b-5d)
- [`( )`](#op-28-29)
- [`{ }`](#op-7b-7d)
- [`.`](#op-2e)
- [`->`](#op--3e)
- [`++`](#op-2b2b)
- [`--`](#op---)
- [`&`](#op-26)
- [`*`](#op-2a)
- [`+`](#op-2b)
- [`-`](#op--)
- [`~`](#op-7e)
- [`!`](#op-21)
- [`/`](#op-2f)
- [`%`](#op-25)
- [`<<`](#op-3c3c)
- [`>>`](#op-3e3e)
- [`<`](#op-3c)
- [`>`](#op-3e)
- [`<=`](#op-3c3d)
- [`>=`](#op-3e3d)
- [`==`](#op-3d3d)
- [`!=`](#op-213d)
- [`^`](#op-5e)
- [`|`](#op-7c)
- [`&&`](#op-2626)
- [`||`](#op-7c7c)
- [`?`](#op-3f)
- [`:`](#op-3a)
- [`;`](#op-3b)
- [`...`](#op-2e2e2e)
- [`=`](#op-3d)
- [`*=`](#op-2a3d)
- [`/=`](#op-2f3d)
- [`%=`](#op-253d)
- [`+=`](#op-2b3d)
- [`-=`](#op--3d)
- [`<<=`](#op-3c3c3d)
- [`>>=`](#op-3e3e3d)
- [`&=`](#op-263d)
- [`^=`](#op-5e3d)
- [`|=`](#op-7c3d)
- [`,`](#op-2c)
- [`#`](#op-23)
- [`##`](#op-2323)
- [`<:`](#op-3c3a)
- [`:>`](#op-3a3e)
- [`<%`](#op-3c25)
- [`%>`](#op-253e)
- [`%:`](#op-253a)
- [`%:%:`](#op-253a253a)

---

### Entries

<a id="op-5b-5d"></a>
### `[ ]`

_Description:_
---
Array subscript operator. For `a[b]`, computes `*(a + b)`. Behavior is undefined if the computed address is out of bounds.

Example:

```c
int a[3] = {1,2,3};
int x = a[1];  // 2
```
---

<a id="op-28-29"></a>
### `( )`

_Description:_
---
Parentheses for grouping expressions and for function calls.

Example:

```c
int y = (2 + 3) * 4;  // 20
int f(int);
int r = f(42);
```
---

<a id="op-7b-7d"></a>
### `{ }`

_Description:_
---
Braces create a compound statement (block) or delimit initializers.

Example:

```c
if (cond) { int t = 0; /* ... */ }
int a[3] = {1,2,3};
```
---

<a id="op-2e"></a>
### `.`

_Description:_
---
Member access operator for structures/unions via an lvalue object.

Example:

```c
struct P { int x, y; } p = {1,2};
int x = p.x;
```
---

<a id="op--3e"></a>
### `->`

_Description:_
---
Member access through a pointer to a structure/union; `p->m` is `(*p).m`.

Example:

```c
struct P { int x; } p = {3};
struct P *pp = &p;
int x = pp->x;  // 3
```
---

<a id="op-2b2b"></a>
### `++`

_Description:_
---
Increment operator. Prefix form yields the incremented value; postfix yields the original value.

Example:

```c
int i = 1;
int a = ++i; // i=2, a=2
int b = i++; // i=3, b=2
```
---

<a id="op---"></a>
### `--`

_Description:_
---
Decrement operator. Prefix form yields the decremented value; postfix yields the original value.

Example:

```c
int i = 2;
int a = --i; // i=1, a=1
int b = i--; // i=0, b=1
```
---

<a id="op-26"></a>
### `&`

_Description:_
---
Bitwise AND (binary) and address-of (unary). Unary `&` yields the address of its operand.

Example:

```c
int a = 6, b = 3; int c = a & b; // 2
int *p = &a; // address-of
```
---

<a id="op-2a"></a>
### `*`

_Description:_
---
Multiplication (binary) and indirection/dereference (unary).

Example:

```c
int prod = 6 * 7; // 42
int *p = &prod; int v = *p; // dereference
```
---

<a id="op-2b"></a>
### `+`

_Description:_
---
Addition (binary) and unary plus (no effect on value). Pointer arithmetic is scaled by pointed-to type size.

Example:

```c
int s = 1 + 2; // 3
```
---

<a id="op--"></a>
### `-`

_Description:_
---
Subtraction (binary) and unary negation. Pointer subtraction yields element count difference for pointers into the same array.

Example:

```c
int d = 5 - 2; // 3
```
---

<a id="op-7e"></a>
### `~`

_Description:_
---
Bitwise NOT (ones' complement) of an integer type.

Example:

```c
unsigned char m = (unsigned char)~0u; // 0xFF on 8-bit char
```
---

<a id="op-21"></a>
### `!`

_Description:_
---
Logical NOT. Converts nonzero to 0 and 0 to 1.

Example:

```c
int t = !0; // 1
```
---

<a id="op-2f"></a>
### `/`

_Description:_
---
Division. Integer division truncates toward zero; division by zero is undefined.

Example:

```c
int q = 7 / 3; // 2
```
---

<a id="op-25"></a>
### `%`

_Description:_
---
Remainder after integer division. Behavior is defined so that `(a / b) * b + (a % b) == a` when `b != 0`.

Example:

```c
int r = 7 % 3; // 1
```
---

<a id="op-3c3c"></a>
### `<<`

_Description:_
---
Left shift. Shifts bits left; shifting into/sign on signed types is implementation-defined or undefined—prefer unsigned.

Example:

```c
unsigned x = 1u << 3; // 8
```
---

<a id="op-3e3e"></a>
### `>>`

_Description:_
---
Right shift. On unsigned, logical shift; on signed, arithmetic vs logical is implementation-defined.

Example:

```c
unsigned x = 8u >> 1; // 4
```
---

<a id="op-3c"></a>
### `<`

_Description:_
---
Less-than relational operator.

Example:

```c
int b = (2 < 3); // 1
```
---

<a id="op-3e"></a>
### `>`

_Description:_
---
Greater-than relational operator.

Example:

```c
int b = (3 > 2); // 1
```
---

<a id="op-3c3d"></a>
### `<=`

_Description:_
---
Less-than-or-equal relational operator.

Example:

```c
int b = (2 <= 2); // 1
```
---

<a id="op-3e3d"></a>
### `>=`

_Description:_
---
Greater-than-or-equal relational operator.

Example:

```c
int b = (3 >= 2); // 1
```
---

<a id="op-3d3d"></a>
### `==`

_Description:_
---
Equality comparison. Compares values after usual conversions.

Example:

```c
int b = (2 + 2 == 4); // 1
```
---

<a id="op-213d"></a>
### `!=`

_Description:_
---
Inequality comparison.

Example:

```c
int b = (2 != 3); // 1
```
---

<a id="op-5e"></a>
### `^`

_Description:_
---
Bitwise XOR (exclusive OR).

Example:

```c
int r = 5 ^ 3; // 6
```
---

<a id="op-7c"></a>
### `|`

_Description:_
---
Bitwise OR.

Example:

```c
int r = 5 | 2; // 7
```
---

<a id="op-2626"></a>
### `&&`

_Description:_
---
Logical AND with short-circuit evaluation. Evaluates right operand only if left is nonzero.

Example:

```c
if (ptr && *ptr == '\0') { /* safe only if ptr != NULL */ }
```
---

<a id="op-7c7c"></a>
### `||`

_Description:_
---
Logical OR with short-circuit evaluation. Evaluates right operand only if left is zero.

Example:

```c
if (err || fallback()) { /* ... */ }
```
---

<a id="op-3f"></a>
### `?`

_Description:_
---
Part of the conditional operator `?:` used as `cond ? expr1 : expr2`. Ternary operator selects between two expressions based on `cond`.

Example:

```c
int max = (a > b) ? a : b;
```
---

<a id="op-3a"></a>
### `:`

_Description:_
---
Used in the conditional operator `?:` and to introduce `case` labels and bit-field widths.

Example:

```c
switch (x) { case 1: /* ... */ break; }
struct S { unsigned f:3; };
```
---

<a id="op-3b"></a>
### `;`

_Description:_
---
Statement terminator; also forms the null statement when used alone.

Example:

```c
while (getchar() != '\n') ;  // null body
```
---

<a id="op-2e2e2e"></a>
### `...`

_Description:_
---
Variadic parameter marker in function declarators and prototypes.

Example:

```c
int printf(const char *fmt, ...);
```
---

<a id="op-3d"></a>
### `=`

_Description:_
---
Simple assignment; stores right-hand value into left-hand lvalue.

Example:

```c
int x; x = 10;
```
---

<a id="op-2a3d"></a>
### `*=`

_Description:_
---
Multiplication assignment.

Example:

```c
x *= 3;  // x = x * 3
```
---

<a id="op-2f3d"></a>
### `/=`

_Description:_
---
Division assignment.

Example:

```c
x /= 2;  // x = x / 2
```
---

<a id="op-253d"></a>
### `%=`

_Description:_
---
Remainder assignment.

Example:

```c
x %= 3;  // x = x % 3
```
---

<a id="op-2b3d"></a>
### `+=`

_Description:_
---
Addition assignment.

Example:

```c
x += 5;  // x = x + 5
```
---

<a id="op--3d"></a>
### `-=`

_Description:_
---
Subtraction assignment.

Example:

```c
x -= 2;  // x = x - 2
```
---

<a id="op-3c3c3d"></a>
### `<<=`

_Description:_
---
Left shift assignment.

Example:

```c
x <<= 1; // x = x << 1
```
---

<a id="op-3e3e3d"></a>
### `>>=`

_Description:_
---
Right shift assignment.

Example:

```c
x >>= 2; // x = x >> 2
```
---

<a id="op-263d"></a>
### `&=`

_Description:_
---
Bitwise AND assignment.

Example:

```c
x &= 0xFF;
```
---

<a id="op-5e3d"></a>
### `^=`

_Description:_
---
Bitwise XOR assignment.

Example:

```c
x ^= 1;
```
---

<a id="op-7c3d"></a>
### `|=`

_Description:_
---
Bitwise OR assignment.

Example:

```c
x |= 0x10;
```
---

<a id="op-2c"></a>
### `,`

_Description:_
---
Comma operator evaluates left expression, discards the value, then evaluates and yields the right expression.

Example:

```c
int y = (x = 1, x + 2); // y = 3
```
---

<a id="op-23"></a>
### `#`

_Description:_
---
Preprocessor stringizing operator inside macros: converts a macro parameter to a string literal.

Example:

```c
#define S(x) #x
// S(hello) -> "hello"
```
---

<a id="op-2323"></a>
### `##`

_Description:_
---
Preprocessor token pasting operator: concatenates tokens in macro expansion.

Example:

```c
#define CAT(a,b) a##b
// CAT(var, 1) -> var1
```
---

<a id="op-3c3a"></a>
### `<:`

_Description:_
---
Digraph for `[` in source code.

Example:

```c
int a<:3:> = {1,2,3}; // same as int a[3] = {...}
```
---

<a id="op-3a3e"></a>
### `:>`

_Description:_
---
Digraph for `]` in source code.

Example:

```c
int a<:3:> = {1,2,3};
```
---

<a id="op-3c25"></a>
### `<%`

_Description:_
---
Digraph for `{` in source code.

Example:

```c
int main()<% return 0; %>
```
---

<a id="op-253e"></a>
### `%>`

_Description:_
---
Digraph for `}` in source code.

Example:

```c
int main()<% return 0; %>
```
---

<a id="op-253a"></a>
### `%:`

_Description:_
---
Digraph for `#` in source code.

Example:

```c
%:define N 10
```
---

<a id="op-253a253a"></a>
### `%:%:`

_Description:_
---
Digraph for `##` in source code.

Example:

```c
#define CAT(a,b) a %:%: b  // token pasting
```
---

## Standard Library Identifiers

### Table of Contents

- [`abort`](#id-abort)
- [`abs`](#id-abs)
- [`acos`](#id-acos)
- [`acosf`](#id-acosf)
- [`acosh`](#id-acosh)
- [`acoshf`](#id-acoshf)
- [`acoshl`](#id-acoshl)
- [`acosl`](#id-acosl)
- [`aligned_alloc`](#id-aligned_alloc)
- [`asctime`](#id-asctime)
- [`asin`](#id-asin)
- [`asinf`](#id-asinf)
- [`asinh`](#id-asinh)
- [`asinhf`](#id-asinhf)
- [`asinhl`](#id-asinhl)
- [`asinl`](#id-asinl)
- [`assert`](#id-assert)
- [`atan`](#id-atan)
- [`atan2`](#id-atan2)
- [`atan2f`](#id-atan2f)
- [`atan2l`](#id-atan2l)
- [`atanf`](#id-atanf)
- [`atanh`](#id-atanh)
- [`atanhf`](#id-atanhf)
- [`atanhl`](#id-atanhl)
- [`atanl`](#id-atanl)
- [`atexit`](#id-atexit)
- [`atof`](#id-atof)
- [`atoi`](#id-atoi)
- [`atol`](#id-atol)
- [`atoll`](#id-atoll)
- [`bsearch`](#id-bsearch)
- [`btowc`](#id-btowc)
- [`calloc`](#id-calloc)
- [`cabs`](#id-cabs)
- [`cabsf`](#id-cabsf)
- [`cabsl`](#id-cabsl)
- [`cacos`](#id-cacos)
- [`cacosf`](#id-cacosf)
- [`cacosl`](#id-cacosl)
- [`cacosh`](#id-cacosh)
- [`cacoshf`](#id-cacoshf)
- [`cacoshl`](#id-cacoshl)
- [`carg`](#id-carg)
- [`cargf`](#id-cargf)
- [`cargl`](#id-cargl)
- [`casin`](#id-casin)
- [`casinf`](#id-casinf)
- [`casinl`](#id-casinl)
- [`casinh`](#id-casinh)
- [`casinhf`](#id-casinhf)
- [`catan`](#id-catan)
- [`catanf`](#id-catanf)
- [`catanl`](#id-catanl)
- [`catanh`](#id-catanh)
- [`catanhf`](#id-catanhf)
- [`cbrt`](#id-cbrt)
- [`cbrtf`](#id-cbrtf)
- [`cbrtl`](#id-cbrtl)
- [`ccos`](#id-ccos)
- [`ccosf`](#id-ccosf)
- [`ccosl`](#id-ccosl)
- [`ccosh`](#id-ccosh)
- [`ccoshf`](#id-ccoshf)
- [`cexp`](#id-cexp)
- [`cexpf`](#id-cexpf)
- [`cexpl`](#id-cexpl)
- [`cimag`](#id-cimag)
- [`cimagf`](#id-cimagf)
- [`cimagl`](#id-cimagl)
- [`conj`](#id-conj)
- [`conjf`](#id-conjf)
- [`conjl`](#id-conjl)
- [`copysign`](#id-copysign)
- [`copysignf`](#id-copysignf)
- [`copysignl`](#id-copysignl)
- [`cos`](#id-cos)
- [`cosf`](#id-cosf)
- [`cosh`](#id-cosh)
- [`coshf`](#id-coshf)
- [`coshl`](#id-coshl)
- [`cosl`](#id-cosl)
- [`cpow`](#id-cpow)
- [`cpowf`](#id-cpowf)
- [`cpowl`](#id-cpowl)
- [`cproj`](#id-cproj)
- [`cprojf`](#id-cprojf)
- [`cprojl`](#id-cprojl)
- [`creal`](#id-creal)
- [`crealf`](#id-crealf)
- [`creall`](#id-creall)
- [`ctime`](#id-ctime)
- [`difftime`](#id-difftime)
- [`div`](#id-div)
- [`div_t`](#id-div_t)
- [`double_t`](#id-double_t)
- [`erf`](#id-erf)
- [`erfc`](#id-erfc)
- [`erfcf`](#id-erfcf)
- [`erfcl`](#id-erfcl)
- [`erff`](#id-erff)
- [`erfl`](#id-erfl)
- [`errno`](#id-errno)
- [`exit`](#id-exit)
- [`exp`](#id-exp)
- [`exp2`](#id-exp2)
- [`exp2f`](#id-exp2f)
- [`exp2l`](#id-exp2l)
- [`expf`](#id-expf)
- [`expl`](#id-expl)
- [`expm1`](#id-expm1)
- [`expm1f`](#id-expm1f)
- [`expm1l`](#id-expm1l)
- [`fabs`](#id-fabs)
- [`fabsf`](#id-fabsf)
- [`fabsl`](#id-fabsl)
- [`fclose`](#id-fclose)
- [`feclearexcept`](#id-feclearexcept)
- [`fegetenv`](#id-fegetenv)
- [`fegetexceptflag`](#id-fegetexceptflag)
- [`fegetround`](#id-fegetround)
- [`feholdexcept`](#id-feholdexcept)
- [`fenv_t`](#id-fenv_t)
- [`feraiseexcept`](#id-feraiseexcept)
- [`fetestexcept`](#id-fetestexcept)
- [`feof`](#id-feof)
- [`feraiseexcept`](#id-feraiseexcept)
- [`ferror`](#id-ferror)
- [`fesetenv`](#id-fesetenv)
- [`fesetexceptflag`](#id-fesetexceptflag)
- [`fesetround`](#id-fesetround)
- [`feupdateenv`](#id-feupdateenv)
- [`fexcept_t`](#id-fexcept_t)
- [`fflush`](#id-fflush)
- [`fgetc`](#id-fgetc)
- [`fgetpos`](#id-fgetpos)
- [`fgets`](#id-fgets)
- [`fiprintf`](#id-fiprintf)
- [`floor`](#id-floor)
- [`floorf`](#id-floorf)
- [`floorl`](#id-floorl)
- [`fma`](#id-fma)
- [`fmaf`](#id-fmaf)
- [`fmal`](#id-fmal)
- [`fmax`](#id-fmax)
- [`fmaxf`](#id-fmaxf)
- [`fmaxl`](#id-fmaxl)
- [`fmin`](#id-fmin)
- [`fminf`](#id-fminf)
- [`fminl`](#id-fminl)
- [`fmod`](#id-fmod)
- [`fmodf`](#id-fmodf)
- [`fmodl`](#id-fmodl)
- [`fopen`](#id-fopen)
- [`fprintf`](#id-fprintf)
- [`fputc`](#id-fputc)
- [`fputs`](#id-fputs)
- [`fread`](#id-fread)
- [`free`](#id-free)
- [`freopen`](#id-freopen)
- [`frexp`](#id-frexp)
- [`frexpf`](#id-frexpf)
- [`frexpl`](#id-frexpl)
- [`fscanf`](#id-fscanf)
- [`fseek`](#id-fseek)
- [`fsetpos`](#id-fsetpos)
- [`ftell`](#id-ftell)
- [`fwide`](#id-fwide)
- [`fwprintf`](#id-fwprintf)
- [`fwrite`](#id-fwrite)
- [`fwscanf`](#id-fwscanf)
- [`getc`](#id-getc)
- [`getchar`](#id-getchar)
- [`getenv`](#id-getenv)
- [`gets`](#id-gets)
- [`gmtime`](#id-gmtime)
- [`hypot`](#id-hypot)
- [`hypotf`](#id-hypotf)
- [`hypotl`](#id-hypotl)
- [`ilogb`](#id-ilogb)
- [`ilogbf`](#id-ilogbf)
- [`ilogbl`](#id-ilogbl)
- [`imaxabs`](#id-imaxabs)
- [`imaxdiv`](#id-imaxdiv)
- [`isalnum`](#id-isalnum)
- [`isalpha`](#id-isalpha)
- [`isblank`](#id-isblank)
- [`iscntrl`](#id-iscntrl)
- [`isdigit`](#id-isdigit)
- [`isfinite`](#id-isfinite)
- [`isgraph`](#id-isgraph)
- [`isgreater`](#id-isgreater)
- [`isgreaterequal`](#id-isgreaterequal)
- [`isinf`](#id-isinf)
- [`isless`](#id-isless)
- [`islessequal`](#id-islessequal)
- [`islessgreater`](#id-islessgreater)
- [`islower`](#id-islower)
- [`isnan`](#id-isnan)
- [`isnormal`](#id-isnormal)
- [`isprint`](#id-isprint)
- [`ispunct`](#id-ispunct)
- [`isspace`](#id-isspace)
- [`isunordered`](#id-isunordered)
- [`isupper`](#id-isupper)
- [`iswalnum`](#id-iswalnum)
- [`iswalpha`](#id-iswalpha)
- [`iswblank`](#id-iswblank)
- [`iswcntrl`](#id-iswcntrl)
- [`iswctype`](#id-iswctype)
- [`iswdigit`](#id-iswdigit)
- [`iswgraph`](#id-iswgraph)
- [`iswlower`](#id-iswlower)
- [`iswprint`](#id-iswprint)
- [`iswpunct`](#id-iswpunct)
- [`iswspace`](#id-iswspace)
- [`iswupper`](#id-iswupper)
- [`iswxdigit`](#id-iswxdigit)
- [`isxdigit`](#id-isxdigit)
- [`labs`](#id-labs)
- [`ldexp`](#id-ldexp)
- [`ldexpf`](#id-ldexpf)
- [`ldexpl`](#id-ldexpl)
- [`ldiv`](#id-ldiv)
- [`ldiv_t`](#id-ldiv_t)
- [`lgamma`](#id-lgamma)
- [`lgammaf`](#id-lgammaf)
- [`lgammal`](#id-lgammal)
- [`llabs`](#id-llabs)
- [`lldiv`](#id-lldiv)
- [`lldiv_t`](#id-lldiv_t)
- [`localeconv`](#id-localeconv)
- [`localtime`](#id-localtime)
- [`log`](#id-log)
- [`log10`](#id-log10)
- [`log10f`](#id-log10f)
- [`log10l`](#id-log10l)
- [`log1p`](#id-log1p)
- [`log1pf`](#id-log1pf)
- [`log1pl`](#id-log1pl)
- [`log2`](#id-log2)
- [`log2f`](#id-log2f)
- [`log2l`](#id-log2l)
- [`logb`](#id-logb)
- [`logbf`](#id-logbf)
- [`logbl`](#id-logbl)
- [`logf`](#id-logf)
- [`logl`](#id-logl)
- [`longjmp`](#id-longjmp)
- [`malloc`](#id-malloc)
- [`mblen`](#id-mblen)
- [`mbrlen`](#id-mbrlen)
- [`mbrtoc16`](#id-mbrtoc16)
- [`mbrtoc32`](#id-mbrtoc32)
- [`mbrtowc`](#id-mbrtowc)
- [`mbsinit`](#id-mbsinit)
- [`mbsnrtowcs`](#id-mbsnrtowcs)
- [`mbsrtowcs`](#id-mbsrtowcs)
- [`mbstowcs`](#id-mbstowcs)
- [`mbtowc`](#id-mbtowc)
- [`memchr`](#id-memchr)
- [`memcmp`](#id-memcmp)
- [`memcpy`](#id-memcpy)
- [`memmove`](#id-memmove)
- [`memset`](#id-memset)
- [`mktime`](#id-mktime)
- [`modf`](#id-modf)
- [`modff`](#id-modff)
- [`modfl`](#id-modfl)
- [`nan`](#id-nan)
- [`nanf`](#id-nanf)
- [`nanl`](#id-nanl)
- [`nearbyint`](#id-nearbyint)
- [`nearbyintf`](#id-nearbyintf)
- [`nearbyintl`](#id-nearbyintl)
- [`nextafter`](#id-nextafter)
- [`nextafterf`](#id-nextafterf)
- [`nextafterl`](#id-nextafterl)
- [`nexttoward`](#id-nexttoward)
- [`nexttowardf`](#id-nexttowardf)
- [`nexttowardl`](#id-nexttowardl)
- [`perror`](#id-perror)
- [`pow`](#id-pow)
- [`powf`](#id-powf)
- [`powl`](#id-powl)
- [`printf`](#id-printf)
- [`putc`](#id-putc)
- [`putchar`](#id-putchar)
- [`puts`](#id-puts)
- [`qsort`](#id-qsort)
- [`quick_exit`](#id-quick_exit)
- [`raise`](#id-raise)
- [`rand`](#id-rand)
- [`realloc`](#id-realloc)
- [`remainder`](#id-remainder)
- [`remainderf`](#id-remainderf)
- [`remainderl`](#id-remainderl)
- [`remove`](#id-remove)
- [`remquo`](#id-remquo)
- [`remquof`](#id-remquof)
- [`remquol`](#id-remquol)
- [`rename`](#id-rename)
- [`rewind`](#id-rewind)
- [`scanf`](#id-scanf)
- [`setbuf`](#id-setbuf)
- [`setjmp`](#id-setjmp)
- [`setlocale`](#id-setlocale)
- [`setvbuf`](#id-setvbuf)
- [`signal`](#id-signal)
- [`sig_atomic_t`](#id-sig_atomic_t)
- [`sin`](#id-sin)
- [`sinf`](#id-sinf)
- [`sinh`](#id-sinh)
- [`sinhf`](#id-sinhf)
- [`sinhl`](#id-sinhl)
- [`sinl`](#id-sinl)
- [`size_t`](#id-size_t)
- [`snprintf`](#id-snprintf)
- [`sprintf`](#id-sprintf)
- [`sqrt`](#id-sqrt)
- [`sqrtf`](#id-sqrtf)
- [`sqrtl`](#id-sqrtl)
- [`srand`](#id-srand)
- [`sscanf`](#id-sscanf)
- [`strcat`](#id-strcat)
- [`strchr`](#id-strchr)
- [`strcmp`](#id-strcmp)
- [`strcoll`](#id-strcoll)
- [`strcpy`](#id-strcpy)
- [`strcspn`](#id-strcspn)
- [`strerror`](#id-strerror)
- [`strftime`](#id-strftime)
- [`strlen`](#id-strlen)
- [`strncat`](#id-strncat)
- [`strncmp`](#id-strncmp)
- [`strncpy`](#id-strncpy)
- [`strpbrk`](#id-strpbrk)
- [`strrchr`](#id-strrchr)
- [`strspn`](#id-strspn)
- [`strstr`](#id-strstr)
- [`strtod`](#id-strtod)
- [`strtof`](#id-strtof)
- [`strtoimax`](#id-strtoimax)
- [`strtok`](#id-strtok)
- [`strtol`](#id-strtol)
- [`strtold`](#id-strtold)
- [`strtoll`](#id-strtoll)
- [`strtoul`](#id-strtoul)
- [`strtoull`](#id-strtoull)
- [`strtoumax`](#id-strtoumax)
- [`strxfrm`](#id-strxfrm)
- [`swprintf`](#id-swprintf)
- [`swscanf`](#id-swscanf)
- [`system`](#id-system)
- [`tan`](#id-tan)
- [`tanf`](#id-tanf)
- [`tanh`](#id-tanh)
- [`tanhf`](#id-tanhf)
- [`tanhl`](#id-tanhl)
- [`tanl`](#id-tanl)
- [`tgamma`](#id-tgamma)
- [`tgammaf`](#id-tgammaf)
- [`tgammal`](#id-tgammal)
- [`time`](#id-time)
- [`time_t`](#id-time_t)
- [`tmpfile`](#id-tmpfile)
- [`tmpnam`](#id-tmpnam)
- [`tolower`](#id-tolower)
- [`toupper`](#id-toupper)
- [`towctrans`](#id-towctrans)
- [`towlower`](#id-towlower)
- [`towupper`](#id-towupper)
- [`trunc`](#id-trunc)
- [`truncf`](#id-truncf)
- [`truncl`](#id-truncl)
- [`ungetc`](#id-ungetc)
- [`ungetwc`](#id-ungetwc)
- [`va_arg`](#id-va_arg)
- [`va_copy`](#id-va_copy)
- [`va_end`](#id-va_end)
- [`va_list`](#id-va_list)
- [`va_start`](#id-va_start)
- [`vfprintf`](#id-vfprintf)
- [`vfscanf`](#id-vfscanf)
- [`vprintf`](#id-vprintf)
- [`vscanf`](#id-vscanf)
- [`vsnprintf`](#id-vsnprintf)
- [`vsprintf`](#id-vsprintf)
- [`vsscanf`](#id-vsscanf)
- [`vwprintf`](#id-vwprintf)
- [`vwscanf`](#id-vwscanf)
- [`wcrtomb`](#id-wcrtomb)
- [`wcscat`](#id-wcscat)
- [`wcschr`](#id-wcschr)
- [`wcscmp`](#id-wcscmp)
- [`wcscoll`](#id-wcscoll)
- [`wcscpy`](#id-wcscpy)
- [`wcscspn`](#id-wcscspn)
- [`wcsftime`](#id-wcsftime)
- [`wcslen`](#id-wcslen)
- [`wcsncat`](#id-wcsncat)
- [`wcsncmp`](#id-wcsncmp)
- [`wcsncpy`](#id-wcsncpy)
- [`wcspbrk`](#id-wcspbrk)
- [`wcsrchr`](#id-wcsrchr)
- [`wcsrtombs`](#id-wcsrtombs)
- [`wcsspn`](#id-wcsspn)
- [`wcsstr`](#id-wcsstr)
- [`wcstod`](#id-wcstod)
- [`wcstof`](#id-wcstof)
- [`wcstoimax`](#id-wcstoimax)
- [`wcstok`](#id-wcstok)
- [`wcstol`](#id-wcstol)
- [`wcstold`](#id-wcstold)
- [`wcstoll`](#id-wcstoll)
- [`wcstombs`](#id-wcstombs)
- [`wcstoul`](#id-wcstoul)
- [`wcstoull`](#id-wcstoull)
- [`wcstoumax`](#id-wcstoumax)
- [`wcsxfrm`](#id-wcsxfrm)
- [`wctob`](#id-wctob)
- [`wctomb`](#id-wctomb)
- [`wctrans`](#id-wctrans)
- [`wctype`](#id-wctype)
- [`wcwidth`](#id-wcwidth)
- [`wmemchr`](#id-wmemchr)
- [`wmemcmp`](#id-wmemcmp)
- [`wmemcpy`](#id-wmemcpy)
- [`wmemmove`](#id-wmemmove)
- [`wmemset`](#id-wmemset)
- [`wprintf`](#id-wprintf)
- [`wscanf`](#id-wscanf)
- [`thrd_create`](#id-thrd_create)
- [`thrd_current`](#id-thrd_current)
- [`thrd_detach`](#id-thrd_detach)
- [`thrd_equal`](#id-thrd_equal)
- [`thrd_exit`](#id-thrd_exit)
- [`thrd_join`](#id-thrd_join)
- [`thrd_sleep`](#id-thrd_sleep)
- [`thrd_yield`](#id-thrd_yield)
- [`thrd_t`](#id-thrd_t)
- [`thrd_start_t`](#id-thrd_start_t)
- [`thrd_success`](#id-thrd_success)
- [`thrd_timedout`](#id-thrd_timedout)
- [`thrd_busy`](#id-thrd_busy)
- [`thrd_error`](#id-thrd_error)
- [`thrd_nomem`](#id-thrd_nomem)
- [`mtx_init`](#id-mtx_init)
- [`mtx_destroy`](#id-mtx_destroy)
- [`mtx_lock`](#id-mtx_lock)
- [`mtx_trylock`](#id-mtx_trylock)
- [`mtx_timedlock`](#id-mtx_timedlock)
- [`mtx_unlock`](#id-mtx_unlock)
- [`mtx_t`](#id-mtx_t)
- [`mtx_plain`](#id-mtx_plain)
- [`mtx_timed`](#id-mtx_timed)
- [`mtx_recursive`](#id-mtx_recursive)
- [`cnd_init`](#id-cnd_init)
- [`cnd_destroy`](#id-cnd_destroy)
- [`cnd_signal`](#id-cnd_signal)
- [`cnd_broadcast`](#id-cnd_broadcast)
- [`cnd_wait`](#id-cnd_wait)
- [`cnd_timedwait`](#id-cnd_timedwait)
- [`cnd_t`](#id-cnd_t)
- [`tss_create`](#id-tss_create)
- [`tss_delete`](#id-tss_delete)
- [`tss_get`](#id-tss_get)
- [`tss_set`](#id-tss_set)
- [`tss_t`](#id-tss_t)
- [`once_flag`](#id-once_flag)
- [`call_once`](#id-call_once)
- [`_I`](#id-_i)
- [`_Complex_I`](#id-_complex_i)
- [`I`](#id-i)
- [`FE_DIVBYZERO`](#id-fe_divbyzero)
- [`FE_INEXACT`](#id-fe_inexact)
- [`FE_INVALID`](#id-fe_invalid)
- [`FE_OVERFLOW`](#id-fe_overflow)
- [`FE_UNDERFLOW`](#id-fe_underflow)
- [`FE_ALL_EXCEPT`](#id-fe_all_except)
- [`FE_DOWNWARD`](#id-fe_downward)
- [`FE_TONEAREST`](#id-fe_tonearest)
- [`FE_TOWARDZERO`](#id-fe_towardzero)
- [`FE_UPWARD`](#id-fe_upward)
- [`PRId8`](#id-prid8)
- [`PRId16`](#id-prid16)
- [`PRId32`](#id-prid32)
- [`PRId64`](#id-prid64)
- [`PRIi8`](#id-prii8)
- [`PRIi16`](#id-prii16)
- [`PRIi32`](#id-prii32)
- [`PRIi64`](#id-prii64)
- [`PRIo8`](#id-prio8)
- [`PRIo16`](#id-prio16)
- [`PRIo32`](#id-prio32)
- [`PRIo64`](#id-prio64)
- [`PRIu8`](#id-priu8)
- [`PRIu16`](#id-priu16)
- [`PRIu32`](#id-priu32)
- [`PRIu64`](#id-priu64)
- [`PRIx8`](#id-prix8)
- [`PRIx16`](#id-prix16)
- [`PRIx32`](#id-prix32)
- [`PRIx64`](#id-prix64)
- [`PRIX8`](#id-prix8)
- [`PRIX16`](#id-prix16)
- [`PRIX32`](#id-prix32)
- [`PRIX64`](#id-prix64)
- [`SCNd8`](#id-scnd8)
- [`SCNd16`](#id-scnd16)
- [`SCNd32`](#id-scnd32)
- [`SCNd64`](#id-scnd64)
- [`SCNi8`](#id-scni8)
- [`SCNi16`](#id-scni16)
- [`SCNi32`](#id-scni32)
- [`SCNi64`](#id-scni64)
- [`SCNo8`](#id-scno8)
- [`SCNo16`](#id-scno16)
- [`SCNo32`](#id-scno32)
- [`SCNo64`](#id-scno64)
- [`SCNu8`](#id-scnu8)
- [`SCNu16`](#id-scnu16)
- [`SCNu32`](#id-scnu32)
- [`SCNu64`](#id-scnu64)
- [`SCNx8`](#id-scnx8)
- [`SCNx16`](#id-scnx16)
- [`SCNx32`](#id-scnx32)
- [`SCNx64`](#id-scnx64)
- [`EDOM`](#id-edom)
- [`ERANGE`](#id-erange)
- [`EILSEQ`](#id-eilseq)
- [`errno`](#id-errno)
- [`CHAR_BIT`](#id-char_bit)
- [`SCHAR_MIN`](#id-schar_min)
- [`SCHAR_MAX`](#id-schar_max)
- [`UCHAR_MAX`](#id-uchar_max)
- [`CHAR_MIN`](#id-char_min)
- [`CHAR_MAX`](#id-char_max)
- [`MB_LEN_MAX`](#id-mb_len_max)
- [`SHRT_MIN`](#id-shrt_min)
- [`SHRT_MAX`](#id-shrt_max)
- [`USHRT_MAX`](#id-ushrt_max)
- [`INT_MIN`](#id-int_min)
- [`INT_MAX`](#id-int_max)
- [`UINT_MAX`](#id-uint_max)
- [`LONG_MIN`](#id-long_min)
- [`LONG_MAX`](#id-long_max)
- [`ULONG_MAX`](#id-ulong_max)
- [`LLONG_MIN`](#id-llong_min)
- [`LLONG_MAX`](#id-llong_max)
- [`ULLONG_MAX`](#id-ullong_max)
- [`FLT_RADIX`](#id-flt_radix)
- [`FLT_TRUE_MIN`](#id-flt_true_min)
- [`FLT_MIN`](#id-flt_min)
- [`FLT_MAX`](#id-flt_max)
- [`FLT_EPSILON`](#id-flt_epsilon)
- [`DBL_TRUE_MIN`](#id-dbl_true_min)
- [`DBL_MIN`](#id-dbl_min)
- [`DBL_MAX`](#id-dbl_max)
- [`DBL_EPSILON`](#id-dbl_epsilon)
- [`LDBL_TRUE_MIN`](#id-ldbl_true_min)
- [`LDBL_MIN`](#id-ldbl_min)
- [`LDBL_MAX`](#id-ldbl_max)
- [`LDBL_EPSILON`](#id-ldbl_epsilon)

---

### Entries

<a id="id-abort"></a>
### `abort`

_Description:_
---
Abnormal process termination. Raises `SIGABRT`; does not call `atexit` handlers.

Example:

```c
#include <stdlib.h>
void fatal(void) { abort(); }
```
---

<a id="id-abs"></a>
### `abs`

_Description:_
---
Returns absolute value of an `int`.

Example:

```c
#include <stdlib.h>
int m = abs(-42); // 42
```
---

<a id="id-acos"></a>
### `acos`

_Description:_
---
Arc cosine of a floating-point value (in radians). Domain: [-1, 1].

Example:

```c
#include <math.h>
double x = acos(1.0); // 0.0
```
---

<a id="id-acosf"></a>
### `acosf`

_Description:_
---
`float` version of `acos`.

Example:

```c
#include <math.h>
float x = acosf(0.0f);
```
---

<a id="id-acosh"></a>
### `acosh`

_Description:_
---
Inverse hyperbolic cosine. Domain: x >= 1.

Example:

```c
#include <math.h>
double y = acosh(1.0); // 0.0
```
---

<a id="id-acoshf"></a>
### `acoshf`

_Description:_
---
`float` version of `acosh`.

Example:

```c
#include <math.h>
float y = acoshf(1.0f);
```
---

<a id="id-acoshl"></a>
### `acoshl`

_Description:_
---
`long double` version of `acosh`.

Example:

```c
#include <math.h>
long double y = acoshl(1.0L);
```
---

<a id="id-acosl"></a>
### `acosl`

_Description:_
---
`long double` version of `acos`.

Example:

```c
#include <math.h>
long double x = acosl(1.0L);
```
---

<a id="id-aligned_alloc"></a>
### `aligned_alloc`

_Description:_
---
Allocates memory with the specified alignment. Size must be a multiple of alignment; alignment must be a power of two and multiple of `sizeof(void*)`.

Example:

```c
#include <stdlib.h>
void *p = aligned_alloc(16, 64);
```
---

<a id="id-asctime"></a>
### `asctime`

_Description:_
---
Converts `struct tm` to a fixed-format string. Not thread-safe; consider `asctime_r` where available.

Example:

```c
#include <time.h>
char *s = asctime(gmtime(&(time_t){0}));
```
---

<a id="id-asin"></a>
### `asin`

_Description:_
---
Arc sine (radians). Domain: [-1, 1].

Example:

```c
#include <math.h>
double v = asin(0.0);
```
---

<a id="id-asinf"></a>
### `asinf`

_Description:_
---
`float` version of `asin`.

Example:

```c
#include <math.h>
float v = asinf(0.0f);
```
---

<a id="id-asinh"></a>
### `asinh`

_Description:_
---
Inverse hyperbolic sine.

Example:

```c
#include <math.h>
double v = asinh(0.0);
```
---

<a id="id-asinhf"></a>
### `asinhf`

_Description:_
---
`float` version of `asinh`.

Example:

```c
#include <math.h>
float v = asinhf(0.0f);
```
---

<a id="id-asinhl"></a>
### `asinhl`

_Description:_
---
`long double` version of `asinh`.

Example:

```c
#include <math.h>
long double v = asinhl(0.0L);
```
---

<a id="id-asinl"></a>
### `asinl`

_Description:_
---
`long double` version of `asin`.

Example:

```c
#include <math.h>
long double v = asinl(0.5L);
```
---

<a id="id-assert"></a>
### `assert`

_Description:_
---
Diagnostic macro that aborts the program if its condition is false (disabled if `NDEBUG` is defined).

Example:

```c
#include <assert.h>
assert(sizeof(int) >= 2);
```
---

<a id="id-atan"></a>
### `atan`

_Description:_
---
Arc tangent (radians). Range: (-pi/2, pi/2).

Example:

```c
#include <math.h>
double a = atan(1.0);
```
---

<a id="id-atan2"></a>
### `atan2`

_Description:_
---
Arc tangent of `y/x` using signs to determine the correct quadrant. Returns angle in radians.

Example:

```c
#include <math.h>
double a = atan2(1.0, 1.0);
```
---

<a id="id-atan2f"></a>
### `atan2f`

_Description:_
---
`float` version of `atan2`.

Example:

```c
#include <math.h>
float a = atan2f(1.0f, 1.0f);
```
---

<a id="id-atan2l"></a>
### `atan2l`

_Description:_
---
`long double` version of `atan2`.

Example:

```c
#include <math.h>
long double a = atan2l(1.0L, 1.0L);
```
---

<a id="id-atanf"></a>
### `atanf`

_Description:_
---
`float` version of `atan`.

Example:

```c
#include <math.h>
float a = atanf(1.0f);
```
---

<a id="id-atanh"></a>
### `atanh`

_Description:_
---
Inverse hyperbolic tangent. Domain: (-1, 1).

Example:

```c
#include <math.h>
double t = atanh(0.5);
```
---

<a id="id-atanhf"></a>
### `atanhf`

_Description:_
---
`float` version of `atanh`.

Example:

```c
#include <math.h>
float t = atanhf(0.5f);
```
---

<a id="id-atanhl"></a>
### `atanhl`

_Description:_
---
`long double` version of `atanh`.

Example:

```c
#include <math.h>
long double t = atanhl(0.5L);
```
---

<a id="id-atanl"></a>
### `atanl`

_Description:_
---
Arc tangent of a `long double` value (radians). Range: (-pi/2, pi/2).

Example:

```c
#include <math.h>
long double r = atanl(0.5L);
```
---

<a id="id-atexit"></a>
### `atexit`

_Description:_
---
Registers a function to be called at normal program termination (via `return` from `main` or `exit`). Called in reverse registration order.

Example:

```c
#include <stdlib.h>
static void on_exit(void) { /* cleanup */ }
int main(void) { atexit(on_exit); return 0; }
```
---

<a id="id-atof"></a>
### `atof`

_Description:_
---
Converts a C string to `double`. No error reporting on overflow/underflow; prefer `strtod` for robust parsing.

Example:

```c
#include <stdlib.h>
double v = atof("3.14");
```
---

<a id="id-atoi"></a>
### `atoi`

_Description:_
---
Converts a C string to `int`. No error reporting; prefer `strtol` for robust parsing.

Example:

```c
#include <stdlib.h>
int n = atoi("42");
```
---

<a id="id-atol"></a>
### `atol`

_Description:_
---
Converts a C string to `long`. No error reporting; prefer `strtol`.

Example:

```c
#include <stdlib.h>
long n = atol("123456");
```
---

<a id="id-atoll"></a>
### `atoll`

_Description:_
---
Converts a C string to `long long`. No error reporting; prefer `strtoll`.

Example:

```c
#include <stdlib.h>
long long n = atoll("123456789");
```
---

<a id="id-bsearch"></a>
### `bsearch`

_Description:_
---
Binary search in a sorted array. Returns a pointer to a matching element or `NULL`.

Example:

```c
#include <stdlib.h>
int cmp(const void *a, const void *b) { return (*(const int*)a - *(const int*)b); }
int arr[] = {1,2,3,4,5};
int key = 3; int *found = bsearch(&key, arr, 5, sizeof(int), cmp);
```
---

<a id="id-btowc"></a>
### `btowc`

_Description:_
---
Converts a single-byte character to wide character using current locale. Returns `WEOF` on failure or if `c` is `EOF`.

Example:

```c
#include <wchar.h>
wint_t wc = btowc('A');
```
---

<a id="id-calloc"></a>
### `calloc`

_Description:_
---
Allocates zero-initialized storage for an array (`nmemb * size`). Returns `NULL` on failure; beware multiplication overflow.

Example:

```c
#include <stdlib.h>
int *p = calloc(10, sizeof *p);
```
---

<a id="id-cabs"></a>
### `cabs`

_Description:_
---
Magnitude (absolute value) of a `double _Complex` number.

Example:

```c
#include <complex.h>
double _Complex z = 3.0 + 4.0*I; double m = cabs(z); // 5.0
```
---

<a id="id-cabsf"></a>
### `cabsf`

_Description:_
---
`float _Complex` version of `cabs`.

Example:

```c
#include <complex.h>
float _Complex z = 1.0f + 2.0f*I; float m = cabsf(z);
```
---

<a id="id-cabsl"></a>
### `cabsl`

_Description:_
---
`long double _Complex` version of `cabs`.

Example:

```c
#include <complex.h>
long double _Complex z = 1.0L + 1.0L*I; long double m = cabsl(z);
```
---

<a id="id-cacos"></a>
### `cacos`

_Description:_
---
Complex arc cosine of a `double _Complex` argument (radians).

Example:

```c
#include <complex.h>
double _Complex z = 1.0 + 0.0*I; double _Complex w = cacos(z);
```
---

<a id="id-cacosf"></a>
### `cacosf`

_Description:_
---
`float _Complex` version of `cacos`.

Example:

```c
#include <complex.h>
float _Complex z = 0.5f + 0.0f*I; float _Complex w = cacosf(z);
```
---

<a id="id-cacosl"></a>
### `cacosl`

_Description:_
---
`long double _Complex` version of `cacos`.

Example:

```c
#include <complex.h>
long double _Complex z = 1.0L + 0.0L*I; long double _Complex w = cacosl(z);
```
---

<a id="id-cacosh"></a>
### `cacosh`

_Description:_
---
Complex inverse hyperbolic cosine for `double _Complex`.

Example:

```c
#include <complex.h>
double _Complex w = cacosh(1.0 + 2.0*I);
```
---

<a id="id-cacoshf"></a>
### `cacoshf`

_Description:_
---
`float _Complex` version of `cacosh`.

Example:

```c
#include <complex.h>
float _Complex w = cacoshf(1.0f + 0.5f*I);
```
---

<a id="id-cacoshl"></a>
### `cacoshl`

_Description:_
---
`long double _Complex` version of `cacosh`.

Example:

```c
#include <complex.h>
long double _Complex w = cacoshl(1.0L + 1.0L*I);
```
---

<a id="id-carg"></a>
### `carg`

_Description:_
---
Argument (phase angle) of a `double _Complex` number, in radians.

Example:

```c
#include <complex.h>
double _Complex z = -1.0 + 0.0*I; double a = carg(z); // ~pi
```
---

<a id="id-cargf"></a>
### `cargf`

_Description:_
---
`float _Complex` version of `carg`.

Example:

```c
#include <complex.h>
float _Complex z = 1.0f + 1.0f*I; float a = cargf(z);
```
---

<a id="id-cargl"></a>
### `cargl`

_Description:_
---
`long double _Complex` version of `carg`.

Example:

```c
#include <complex.h>
long double _Complex z = 1.0L - 1.0L*I; long double a = cargl(z);
```
---

<a id="id-casin"></a>
### `casin`

_Description:_
---
Complex arc sine for `double _Complex`.

Example:

```c
#include <complex.h>
double _Complex w = casin(0.5 + 0.5*I);
```
---

<a id="id-casinf"></a>
### `casinf`

_Description:_
---
`float _Complex` version of `casin`.

Example:

```c
#include <complex.h>
float _Complex w = casinf(0.5f + 0.0f*I);
```
---

<a id="id-casinl"></a>
### `casinl`

_Description:_
---
`long double _Complex` version of `casin`.

Example:

```c
#include <complex.h>
long double _Complex w = casinl(0.0L + 1.0L*I);
```
---

<a id="id-casinh"></a>
### `casinh`

_Description:_
---
Complex inverse hyperbolic sine for `double _Complex`.

Example:

```c
#include <complex.h>
double _Complex w = casinh(1.0 + 1.0*I);
```
---

<a id="id-casinhf"></a>
### `casinhf`

_Description:_
---
Complex inverse hyperbolic sine for `float _Complex`.

Example:

```c
#include <complex.h>
float _Complex z = 1.0f + 2.0f * I;
float _Complex r = casinhf(z);
// r holds asinh(z) in complex plane
```
---

<a id="id-catan"></a>
### `catan`

_Description:_
---
Complex arc tangent for `double _Complex`.

Example:

```c
#include <complex.h>
double _Complex z = 1.0 + 2.0 * I;
double _Complex r = catan(z);
// r is atan(z) (principal value)
```
---

<a id="id-catanf"></a>
### `catanf`

_Description:_
---
`float _Complex` version of `catan`.

Example:

```c
#include <complex.h>
float _Complex z = 1.0f + 2.0f * I;
float _Complex r = catanf(z);
// r is atan(z) for float complex
```
---

<a id="id-catanl"></a>
### `catanl`

_Description:_
---
`long double _Complex` version of `catan`.

Example:

```c
#include <complex.h>
long double _Complex z = 1.0L + 2.0L * I;
long double _Complex r = catanl(z);
```
---

<a id="id-catanh"></a>
### `catanh`

_Description:_
---
Complex inverse hyperbolic tangent for `double _Complex`.

Example:

```c
#include <complex.h>
double _Complex z = 1.0 + 2.0 * I;
double _Complex r = catanh(z);
// r is atanh(z)
```
---

<a id="id-catanhf"></a>
### `catanhf`

_Description:_
---
`float _Complex` version of `catanh`.

Example:

```c
#include <complex.h>
float _Complex z = 1.0f + 2.0f * I;
float _Complex r = catanhf(z);
```
---

<a id="id-cbrt"></a>
### `cbrt`

_Description:_
---
Cube root for `double`.

Example:

```c
#include <math.h>
double r = cbrt(27.0);
// r == 3.0
```
---

<a id="id-cbrtf"></a>
### `cbrtf`

_Description:_
---
`float` version of `cbrt`.

Example:

```c
#include <math.h>
float r = cbrtf(27.0f);
```
---

<a id="id-cbrtl"></a>
### `cbrtl`

_Description:_
---
`long double` version of `cbrt`.

Example:

```c
#include <math.h>
long double r = cbrtl(27.0L);
```
---

<a id="id-ccos"></a>
### `ccos`

_Description:_
---
Complex cosine for `double _Complex`.

Example:

```c
#include <complex.h>
double _Complex z = 1.0 + 2.0*I;
double _Complex r = ccos(z);
```
---

<a id="id-ccosf"></a>
### `ccosf`

_Description:_
---
`float _Complex` version of `ccos`.

Example:

```c
#include <complex.h>
float _Complex z = 1.0f + 2.0f*I;
float _Complex r = ccosf(z);
```
---

<a id="id-ccosl"></a>
### `ccosl`

_Description:_
---
`long double _Complex` version of `ccos`.

Example:

```c
#include <complex.h>
long double _Complex z = 1.0L + 2.0L*I;
long double _Complex r = ccosl(z);
```
---

<a id="id-ccosh"></a>
### `ccosh`

_Description:_
---
Complex hyperbolic cosine for `double _Complex`.

Example:

```c
#include <complex.h>
double _Complex r = ccosh(1.0 + 0.5*I);
```
---

<a id="id-ccoshf"></a>
### `ccoshf`

_Description:_
---
`float _Complex` version of `ccosh`.

Example:

```c
#include <complex.h>
float _Complex r = ccoshf(1.0f + 0.5f*I);
```
---

<a id="id-cexp"></a>
### `cexp`

_Description:_
---
Complex exponential for `double _Complex`: computes e^z.

Example:

```c
#include <complex.h>
double _Complex z = I * 3.141592653589793/2;
double _Complex r = cexp(z);
// r ≈ 0.0 + 1.0i
```
---

<a id="id-cexpf"></a>
### `cexpf`

_Description:_
---
`float _Complex` version of `cexp`.

Example:

```c
#include <complex.h>
float _Complex r = cexpf(0.0f + I*0.0f);
// r == 1.0f + 0.0fi
```
---

<a id="id-cexpl"></a>
### `cexpl`

_Description:_
---
`long double _Complex` version of `cexp`.

Example:

```c
#include <complex.h>
long double _Complex r = cexplo(0.0L + I*0.0L);
// r == 1.0L + 0.0Li
```
---

<a id="id-cimag"></a>
### `cimag`

_Description:_
---
Imaginary part extractor for `double _Complex`.

Example:

```c
#include <complex.h>
double _Complex z = 2.0 + 3.0*I;
double im = cimag(z); // 3.0
```
---

<a id="id-cimagf"></a>
### `cimagf`

_Description:_
---
`float _Complex` version of `cimag`.

Example:

```c
#include <complex.h>
float _Complex z = 2.0f + 3.0f*I;
float im = cimagf(z); // 3.0f
```
---

<a id="id-cimagl"></a>
### `cimagl`

_Description:_
---
`long double _Complex` version of `cimag`.

Example:

```c
#include <complex.h>
long double _Complex z = 2.0L + 3.0L*I;
long double im = cimagl(z); // 3.0L
```
---

<a id="id-conj"></a>
### `conj`

_Description:_
---
Complex conjugate of `double _Complex`.

Example:

```c
#include <complex.h>
double _Complex z = 1.0 + 2.0*I;
double _Complex r = conj(z); // 1.0 - 2.0i
```
---

<a id="id-conjf"></a>
### `conjf`

_Description:_
---
`float _Complex` version of `conj`.

Example:

```c
#include <complex.h>
float _Complex z = 1.0f + 2.0f*I;
float _Complex r = conjf(z); // 1.0f - 2.0fi
```
---

<a id="id-conjl"></a>
### `conjl`

_Description:_
---
`long double _Complex` version of `conj`.

Example:

```c
#include <complex.h>
long double _Complex z = 1.0L + 2.0L*I;
long double _Complex r = conjl(z); // 1.0L - 2.0Li
```
---

<a id="id-copysign"></a>
### `copysign`

_Description:_
---
Returns a value with magnitude of first argument and sign of second.

Example:

```c
#include <math.h>
double r = copysign(3.5, -1.0); // -3.5
```
---

<a id="id-copysignf"></a>
### `copysignf`

_Description:_
---
`float` version of `copysign`.

Example:

```c
#include <math.h>
float r = copysignf(2.0f, -0.0f); // -2.0f
```
---

<a id="id-copysignl"></a>
### `copysignl`

_Description:_
---
`long double` version of `copysign`.

Example:

```c
#include <math.h>
long double r = copysignl(2.0L, -0.0L); // -2.0L
```
---

<a id="id-cos"></a>
### `cos`

_Description:_
---
Cosine of an angle in radians (`double`).

Example:

```c
#include <math.h>
double r = cos(0.0); // 1.0
```
---

<a id="id-cosf"></a>
### `cosf`

_Description:_
---
`float` version of `cos`.

Example:

```c
#include <math.h>
float r = cosf(0.0f); // 1.0f
```
---

<a id="id-cosh"></a>
### `cosh`

_Description:_
---
Hyperbolic cosine (`double`).

Example:

```c
#include <math.h>
double r = cosh(0.0); // 1.0
```
---

<a id="id-coshf"></a>
### `coshf`

_Description:_
---
`float` version of `cosh`.

Example:

```c
#include <math.h>
float r = coshf(0.0f); // 1.0f
```
---

<a id="id-coshl"></a>
### `coshl`

_Description:_
---
`long double` version of `cosh`.

Example:

```c
#include <math.h>
long double r = coshl(0.0L); // 1.0L
```
---

<a id="id-cosl"></a>
### `cosl`

_Description:_
---
`long double` version of `cos`.

Example:

```c
#include <math.h>
long double r = cosl(0.0L); // 1.0L
```
---

<a id="id-cpow"></a>
### `cpow`

_Description:_
---
Complex power: raises `double _Complex` base to `double _Complex` exponent.

Example:

```c
#include <complex.h>
double _Complex r = cpow(2.0 + 0.0*I, 3.0 + 0.0*I); // 8.0 + 0.0i
```
---

<a id="id-cpowf"></a>
### `cpowf`

_Description:_
---
`float _Complex` version of `cpow`.

Example:

```c
#include <complex.h>
float _Complex r = cpowf(2.0f + 0.0f*I, 3.0f + 0.0f*I); // 8.0f + 0.0fi
```
---

<a id="id-cpowl"></a>
### `cpowl`

_Description:_
---
`long double _Complex` version of `cpow`.

Example:

```c
#include <complex.h>
long double _Complex r = cpowl(2.0L + 0.0L*I, 3.0L + 0.0L*I); // 8.0L + 0.0Li
```
---

<a id="id-cproj"></a>
### `cproj`

_Description:_
---
Complex projection: maps finite values to themselves; maps infinities to a point on the Riemann sphere.

Example:

```c
#include <complex.h>
double _Complex r = cproj(INFINITY + INFINITY*I);
// r is infinite on the real axis, imag == copysign(0.0, cimag)
```
---

<a id="id-cprojf"></a>
### `cprojf`

_Description:_
---
`float _Complex` version of `cproj`.

Example:

```c
#include <complex.h>
float _Complex r = cprojf(INFINITY + INFINITY*I);
```
---

<a id="id-cprojl"></a>
### `cprojl`

_Description:_
---
`long double _Complex` version of `cproj`.

Example:

```c
#include <complex.h>
long double _Complex r = cprojl(INFINITY + INFINITY*I);
```
---

<a id="id-creal"></a>
### `creal`

_Description:_
---
Real part extractor for `double _Complex`.

Example:

```c
#include <complex.h>
double _Complex z = 2.0 + 3.0*I;
double re = creal(z); // 2.0
```
---

<a id="id-crealf"></a>
### `crealf`

_Description:_
---
`float _Complex` version of `creal`.

Example:

```c
#include <complex.h>
float _Complex z = 2.0f + 3.0f*I;
float re = crealf(z); // 2.0f
```
---

<a id="id-creall"></a>
### `creall`

_Description:_
---
`long double _Complex` version of `creal`.

Example:

```c
#include <complex.h>
long double _Complex z = 2.0L + 3.0L*I;
long double re = creall(z); // 2.0L
```
---

<a id="id-ctime"></a>
### `ctime`

_Description:_
---
Converts `time_t` to a human-readable local time string. Returns a pointer to a static buffer (not thread-safe).

Example:

```c
#include <time.h>
time_t now = time(NULL);
char *s = ctime(&now);
// e.g., s == "Sat Sep 13 05:12:08 2025\n"
```
---

<a id="id-difftime"></a>
### `difftime`

_Description:_
---
Returns the difference in seconds between two `time_t` values as `double`.

Example:

```c
#include <time.h>
time_t start = 1000, end = 1005;
double dt = difftime(end, start); // 5.0
```
---

<a id="id-div"></a>
### `div`

_Description:_
---
Integer division producing quotient and remainder for `int`.

Example:

```c
#include <stdlib.h>
div_t r = div(10, 3);
// r.quot == 3, r.rem == 1
```
---

<a id="id-div_t"></a>
### `div_t`

_Description:_
---
Result type returned by `div`, with members `int quot; int rem;`.

Example:

```c
#include <stdlib.h>
div_t r = div(7, -3);
// r.quot == -2, r.rem == 1
```
---

<a id="id-double_t"></a>
### `double_t`

_Description:_
---
Floating type from `<math.h>` used for efficient double-precision evaluation (typically an alias of `double`).

Example:

```c
#include <math.h>
double_t y = 0.0; // usually the same representation as double
```
---

<a id="id-erf"></a>
### `erf`

_Description:_
---
Error function of a real `double` argument.

Example:

```c
#include <math.h>
double v = erf(1.0); // ≈ 0.842701
```
---

<a id="id-erfc"></a>
### `erfc`

_Description:_
---
Complementary error function: `1 - erf(x)` for `double`.

Example:

```c
#include <math.h>
double v = erfc(1.0); // ≈ 0.157299
```
---

<a id="id-erfcf"></a>
### `erfcf`

_Description:_
---
`float` version of `erfc`.

Example:

```c
#include <math.h>
float v = erfcf(1.0f); // ≈ 0.157299f
```
---

<a id="id-erfcl"></a>
### `erfcl`

_Description:_
---
`long double` version of `erfc`.

Example:

```c
#include <math.h>
long double v = erfcl(1.0L); // ≈ 0.157299L
```
---

<a id="id-erff"></a>
### `erff`

_Description:_
---
`float` error function.

Example:

```c
#include <math.h>
float v = erff(1.0f); // ≈ 0.842701f
```
---

<a id="id-erfl"></a>
### `erfl`

_Description:_
---
`long double` error function.

Example:

```c
#include <math.h>
long double v = erfl(1.0L); // ≈ 0.842701L
```
---

<a id="id-errno"></a>
### `errno`

_Description:_

---

<a id="id-exit"></a>
### `exit`

_Description:_

---

<a id="id-exp"></a>
### `exp`

_Description:_
---
Natural exponential e^x for `double`.

Example:

```c
#include <math.h>
double v = exp(2.0); // ≈ 7.389056
```
---

<a id="id-exp2"></a>
### `exp2`

_Description:_
---
Base-2 exponential 2^x for `double`.

Example:

```c
#include <math.h>
double v = exp2(3.0); // 8.0
```
---

<a id="id-exp2f"></a>
### `exp2f`

_Description:_
---
`float` version of `exp2`.

Example:

```c
#include <math.h>
float v = exp2f(3.0f); // 8.0f
```
---

<a id="id-exp2l"></a>
### `exp2l`

_Description:_
---
`long double` version of `exp2`.

Example:

```c
#include <math.h>
long double v = exp2l(3.0L); // 8.0L
```
---

<a id="id-expf"></a>
### `expf`

_Description:_
---
`float` exponential e^x.

Example:

```c
#include <math.h>
float v = expf(2.0f); // ≈ 7.389056f
```
---

<a id="id-expl"></a>
### `expl`

_Description:_
---
`long double` exponential e^x.

Example:

```c
#include <math.h>
long double v = expl(2.0L); // ≈ 7.389056L
```
---

<a id="id-expm1"></a>
### `expm1`

_Description:_
---
Computes e^x - 1 with good precision for small x (`double`).

Example:

```c
#include <math.h>
double v = expm1(0.1); // ≈ 0.105171
```
---

<a id="id-expm1f"></a>
### `expm1f`

_Description:_
---
`float` version of `expm1`.

Example:

```c
#include <math.h>
float v = expm1f(0.1f); // ≈ 0.105171f
```
---

<a id="id-expm1l"></a>
### `expm1l`

_Description:_
---
`long double` version of `expm1`.

Example:

```c
#include <math.h>
long double v = expm1l(0.1L); // ≈ 0.105171L
```
---

<a id="id-fabs"></a>
### `fabs`

_Description:_
---
Absolute value of a `double`.

Example:

```c
#include <math.h>
double v = fabs(-5.5); // 5.5
```
---

<a id="id-fabsf"></a>
### `fabsf`

_Description:_
---
`float` absolute value.

Example:

```c
#include <math.h>
float v = fabsf(-5.5f); // 5.5f
```
---

<a id="id-fabsl"></a>
### `fabsl`

_Description:_
---
`long double` absolute value.

Example:

```c
#include <math.h>
long double v = fabsl(-5.5L); // 5.5L
```
---

<a id="id-fclose"></a>
### `fclose`

_Description:_
---
Closes a stream; flushes buffers. Returns 0 on success, EOF on error.

Example:

```c
#include <stdio.h>
FILE *fp = fopen("x.txt", "w");
int rc = fclose(fp); // 0 on success
```
---

<a id="id-feclearexcept"></a>
### `feclearexcept`

_Description:_
---
Clears the specified floating‑point exception flags given by the bitmask (e.g., `FE_DIVBYZERO`, `FE_INVALID`). Returns 0 on success, nonzero on failure.
---

<a id="id-fegetenv"></a>
### `fegetenv`

_Description:_
---
Stores the current floating‑point environment (rounding mode and exception flags) into a `fenv_t` object. Returns 0 on success.
---

<a id="id-fegetexceptflag"></a>
### `fegetexceptflag`

_Description:_
---
Saves the state of the specified floating‑point exception flags into an `fexcept_t` object for later restoration. Returns 0 on success.
---

<a id="id-fegetround"></a>
### `fegetround`

_Description:_
---
Gets the current rounding direction, returning one of the macros such as `FE_TONEAREST`, `FE_DOWNWARD`, `FE_UPWARD`, or `FE_TOWARDZERO`.
---

<a id="id-feholdexcept"></a>
### `feholdexcept`

_Description:_
---
Saves the current floating‑point environment to a `fenv_t` object, then clears all exception flags and sets a non‑stop mode. Returns 0 on success.
---

<a id="id-fenv_t"></a>
### `fenv_t`

_Description:_
---
Type that represents the entire floating‑point environment (rounding mode and exception flags) used by `<fenv.h>` functions.
---

<a id="id-feraiseexcept"></a>
### `feraiseexcept`

_Description:_
---
Raises (sets) the specified floating‑point exception flags. Returns 0 if all requested exceptions were successfully raised.
---

<a id="id-fetestexcept"></a>
### `fetestexcept`

_Description:_
---
Tests which of the specified floating‑point exceptions are currently set and returns a bitwise OR of those flags.
---

<a id="id-feof"></a>
### `feof`

_Description:_
---
Tests the end‑of‑file indicator for a stream. Returns nonzero if EOF has been reached; otherwise returns 0.
---

<a id="id-feraiseexcept"></a>
### `feraiseexcept`

_Description:_

---

<a id="id-ferror"></a>
### `ferror`

_Description:_
---
Tests the error indicator for a stream. Returns nonzero if a read/write error has occurred on the stream; otherwise returns 0.
---

<a id="id-fesetenv"></a>
### `fesetenv`

_Description:_
---
Installs the floating‑point environment from a `fenv_t` object, replacing the current environment. Returns 0 on success.
---

<a id="id-fesetexceptflag"></a>
### `fesetexceptflag`

_Description:_
---
Sets the state of the specified floating‑point exception flags from an `fexcept_t` object without raising exceptions. Returns 0 on success.
---

<a id="id-fesetround"></a>
### `fesetround`

_Description:_
---
Sets the current rounding direction to the given macro (e.g., `FE_TONEAREST`, `FE_UPWARD`). Returns 0 on success, nonzero on failure.
---

<a id="id-feupdateenv"></a>
### `feupdateenv`

_Description:_
---
Restores the floating‑point environment from a `fenv_t` object and then raises any exceptions that were set prior to the call. Returns 0 on success.
---

<a id="id-fexcept_t"></a>
### `fexcept_t`

_Description:_
---
Type that holds the state of the floating‑point exception flags, used with `fegetexceptflag`/`fesetexceptflag`.
---

<a id="id-fflush"></a>
### `fflush`

_Description:_
---
Flushes any buffered output for a stream to its underlying file. If `stream` is `NULL`, all open output streams are flushed. Returns 0 on success, `EOF` on error.
---

<a id="id-fgetc"></a>
### `fgetc`

_Description:_
---
Reads the next byte from a stream and returns it as an unsigned char cast to int, or `EOF` on end/error.

Example:

```c
#include <stdio.h>
// assume file has "Hello, World\n"
FILE *fp = fopen("example.txt", "r");
int ch = fgetc(fp);
// ch == 'H'
fclose(fp);
```
---

<a id="id-fgetpos"></a>
### `fgetpos`

_Description:_
---
Stores the current file position in a `fpos_t` object for later restoration with `fsetpos`. Returns 0 on success.

Example:

```c
#include <stdio.h>
FILE *fp = fopen("example.txt", "r");
fpos_t pos; int rc = fgetpos(fp, &pos); // rc == 0 on success
fclose(fp);
```
---

<a id="id-fgets"></a>
### `fgets`

_Description:_
---
Reads at most `n-1` chars from stream into buffer, stopping at newline or EOF; writes a terminating `\0`. Returns `buf` on success or `NULL`.

Example:

```c
#include <stdio.h>
// example.txt: "Hello, World!\n"
char buf[64]; FILE *fp = fopen("example.txt", "r");
char *p = fgets(buf, sizeof buf, fp);
// buf == "Hello, World!\n"
fclose(fp);
```
---

<a id="id-fiprintf"></a>
### `fiprintf`

_Description:_

---

<a id="id-floor"></a>
### `floor`

_Description:_
---
Largest integer value not greater than `x` (rounded toward −∞).

Example:

```c
#include <math.h>
double r = floor(-2.3); // r == -3.0
```
---

<a id="id-floorf"></a>
### `floorf`

_Description:_
---
`float` version of `floor`.

Example:

```c
#include <math.h>
float r = floorf(2.9f); // r == 2.0f
```
---

<a id="id-floorl"></a>
### `floorl`

_Description:_
---
`long double` version of `floor`.

Example:

```c
#include <math.h>
long double r = floorl(3.0L); // r == 3.0L
```
---

<a id="id-fma"></a>
### `fma`

_Description:_
---
Fused multiply-add: computes `x*y+z` with a single rounding.

Example:

```c
#include <math.h>
double r = fma(2.0, 3.0, 4.0); // r == 10.0
```
---

<a id="id-fmaf"></a>
### `fmaf`

_Description:_
---
`float` version of `fma`.

Example:

```c
#include <math.h>
float r = fmaf(1.5f, 2.0f, 1.0f); // r == 4.0f
```
---

<a id="id-fmal"></a>
### `fmal`

_Description:_
---
`long double` version of `fma`.

Example:

```c
#include <math.h>
long double r = fmal(2.0L, 2.5L, 0.5L); // r == 5.5L
```
---

<a id="id-fmax"></a>
### `fmax`

_Description:_
---
Returns the larger of two `double` values; if one operand is NaN, returns the other.

Example:

```c
#include <math.h>
double r = fmax(2.0, 3.5); // r == 3.5
```
---

<a id="id-fmaxf"></a>
### `fmaxf`

_Description:_
---
`float` version of `fmax`.

Example:

```c
#include <math.h>
float r = fmaxf(-1.0f, -2.0f); // r == -1.0f
```
---

<a id="id-fmaxl"></a>
### `fmaxl`

_Description:_
---
`long double` version of `fmax`.

Example:

```c
#include <math.h>
long double r = fmaxl(1.0L, 1.0L); // r == 1.0L
```
---

<a id="id-fmin"></a>
### `fmin`

_Description:_
---
Returns the smaller of two `double` values; if one operand is NaN, returns the other.

Example:

```c
#include <math.h>
double r = fmin(2.0, 3.5); // r == 2.0
```
---

<a id="id-fminf"></a>
### `fminf`

_Description:_
---
`float` version of `fmin`.

Example:

```c
#include <math.h>
float r = fminf(-1.0f, -2.0f); // r == -2.0f
```
---

<a id="id-fminl"></a>
### `fminl`

_Description:_
---
`long double` version of `fmin`.

Example:

```c
#include <math.h>
long double r = fminl(1.0L, 1.5L); // r == 1.0L
```
---

<a id="id-fmod"></a>
### `fmod`

_Description:_
---
Floating remainder of `x/y` with the sign of `x`: `x - trunc(x/y)*y`.

Example:

```c
#include <math.h>
double r = fmod(7.0, 3.0); // r == 1.0
```
---

<a id="id-fmodf"></a>
### `fmodf`

_Description:_
---
`float` version of `fmod`.

Example:

```c
#include <math.h>
float r = fmodf(7.0f, 2.5f); // r == 2.0f
```
---

<a id="id-fmodl"></a>
### `fmodl`

_Description:_
---
`long double` version of `fmod`.

Example:

```c
#include <math.h>
long double r = fmodl(5.0L, 2.0L); // r == 1.0L
```
---

<a id="id-fopen"></a>
### `fopen`

_Description:_
---
Opens a file and associates a stream. Returns `FILE*` or `NULL` on failure. Mode controls read/write/append, text vs binary.

Example:

```c
#include <stdio.h>
FILE *fp = fopen("data.bin", "rb"); // open for reading binary
// fp != NULL on success
if (fp) fclose(fp);
```
---

<a id="id-fprintf"></a>
### `fprintf`

_Description:_
---
Formatted print to a stream; returns number of characters written or a negative value on error.

Example:

```c
#include <stdio.h>
FILE *fp = fopen("out.txt", "w");
int n = fprintf(fp, "Name: %s, Age: %d\n", "Alice", 30);
// n >= 0, file contains: "Name: Alice, Age: 30\n"
fclose(fp);
```
---

<a id="id-fputc"></a>
### `fputc`

_Description:_
---
Writes a byte (unsigned char) to a stream. Returns the written byte or `EOF` on error.

Example:

```c
#include <stdio.h>
FILE *fp = fopen("out.txt", "w");
int rc = fputc('A', fp); // rc == 'A'
fclose(fp);
```
---

<a id="id-fputs"></a>
### `fputs`

_Description:_
---
Writes a string (excluding the terminating `\0`) to a stream. Returns a nonnegative value on success or `EOF` on error.

Example:

```c
#include <stdio.h>
FILE *fp = fopen("out.txt", "w");
int rc = fputs("Hello, World!\n", fp); // rc >= 0; file contains the line
fclose(fp);
```
---

<a id="id-fread"></a>
### `fread`

_Description:_
---
Reads up to `count` items of size `size` into `ptr`. Returns the number of items read.

Example:

```c
#include <stdio.h>
char buf[5]; FILE *fp = fopen("example.txt", "r");
size_t n = fread(buf, 1, 5, fp); // n == 5 if 5 bytes available
fclose(fp);
```
---

<a id="id-free"></a>
### `free`

_Description:_

---

<a id="id-freopen"></a>
### `freopen`

_Description:_
---
Reopens a stream with a new file and mode, reusing the stream object. Commonly used to redirect standard streams.

Example:

```c
#include <stdio.h>
FILE *fp = freopen("out.txt", "w", stdout);
// stdout now writes to out.txt
if (fp) fclose(fp);
```
---

<a id="id-frexp"></a>
### `frexp`

_Description:_
---
Decomposes a `double` into mantissa and exponent such that `x = m * 2^exp`, with `m` in [0.5, 1.0).

Example:

```c
#include <math.h>
int e; double m = frexp(8.0, &e); // m == 0.5, e == 4 (0.5*2^4 == 8)
```
---

<a id="id-frexpf"></a>
### `frexpf`

_Description:_
---
`float` version of `frexp`.

Example:

```c
#include <math.h>
int e; float m = frexpf(3.0f, &e); // m == 0.75f, e == 2 (0.75*2^2 == 3)
```
---

<a id="id-frexpl"></a>
### `frexpl`

_Description:_
---
`long double` version of `frexp`.

Example:

```c
#include <math.h>
int e; long double m = frexpl(1.0L, &e); // m == 0.5L, e == 1
```
---

<a id="id-fscanf"></a>
### `fscanf`

_Description:_
---
Scans formatted input from a stream; returns number of input items assigned, or `EOF` on error/EOF before any assignment.

Example:

```c
#include <stdio.h>
char name[32]; int age; FILE *fp = fopen("in.txt", "r");
int n = fscanf(fp, "Name: %31s, Age: %d", name, &age);
// if file has "Name: Bob, Age: 25", then n == 2, name=="Bob", age==25
fclose(fp);
```
---

<a id="id-fseek"></a>
### `fseek`

_Description:_
---
Sets the file position indicator relative to `SEEK_SET`, `SEEK_CUR`, or `SEEK_END`. Returns 0 on success.

Example:

```c
#include <stdio.h>
FILE *fp = fopen("example.txt", "r");
fseek(fp, 5, SEEK_SET);
int ch = fgetc(fp);
// If file starts "Hello, World", ch == ','
fclose(fp);
```
---

<a id="id-fsetpos"></a>
### `fsetpos`

_Description:_
---
Restores a file position saved by `fgetpos`. Returns 0 on success; clears end-of-file indicator.

Example:

```c
#include <stdio.h>
FILE *fp = fopen("example.txt", "r");
fpos_t pos; fgetpos(fp, &pos);
int c1 = fgetc(fp); // read one char
fsetpos(fp, &pos);
int c2 = fgetc(fp); // c2 == c1
fclose(fp);
```
---

<a id="id-ftell"></a>
### `ftell`

_Description:_
---
Returns the current file position as a long, or -1L on error.

Example:

```c
#include <stdio.h>
FILE *fp = fopen("example.txt", "r");
fgetc(fp);
long pos = ftell(fp); // 1
fclose(fp);
```
---

<a id="id-fwide"></a>
### `fwide`

_Description:_
---
Determines or sets the orientation of a stream: returns >0 for wide‑oriented, <0 for byte‑oriented, 0 if undecided. If `mode>0`, attempts to make it wide; if `mode<0`, byte.

Example:

```c
#include <wchar.h>
int o = fwide(stdout, 0); // query orientation; commonly 0 or <0
```
---

<a id="id-fwprintf"></a>
### `fwprintf`

_Description:_
---
Wide‑character equivalent of `fprintf`; writes formatted wide text to a wide‑oriented stream.

Example:

```c
#include <wchar.h>
int n = fwprintf(stdout, L"Pi ≈ %.2f\n", 3.14159); // prints wide text
```
---

<a id="id-fwrite"></a>
### `fwrite`

_Description:_
---
Writes up to `count` items of size `size` from `ptr` to stream. Returns the number of items written.

Example:

```c
#include <stdio.h>
const char *s = "ABC";
FILE *fp = fopen("out.bin", "wb");
size_t n = fwrite(s, 1, 3, fp); // n == 3, file gets ABC
fclose(fp);
```
---

<a id="id-fwscanf"></a>
### `fwscanf`

_Description:_
---
Wide‑character equivalent of `fscanf`; reads formatted wide text from a wide‑oriented stream.

Example:

```c
#include <wchar.h>
// fwscanf(fp, L"%ls", buf); // reads a wide string
```
---

<a id="id-getc"></a>
### `getc`

_Description:_
---
Reads the next byte from a stream (often a macro). Returns the byte as unsigned char cast to int, or `EOF`.

Example:

```c
#include <stdio.h>
FILE *fp = fopen("example.txt", "r");
int ch = getc(fp); // e.g., 'H'
fclose(fp);
```
---

<a id="id-getchar"></a>
### `getchar`

_Description:_
---
Reads the next byte from `stdin`. Returns the byte as unsigned char cast to int, or `EOF`.

Example:

```c
#include <stdio.h>
// getchar() waits for input
```
---

<a id="id-getenv"></a>
### `getenv`

_Description:_
---
Returns the value of an environment variable as a C string, or `NULL` if not set. The pointer may be invalidated by subsequent calls that modify the environment.

Example:

```c
#include <stdlib.h>
const char *p = getenv("HOME"); // e.g., "/Users/alice" or NULL
```
---

<a id="id-gets"></a>
### `gets`

_Description:_
---
Unsafe input function removed in C11; do not use. Use `fgets` instead.
---

<a id="id-gmtime"></a>
### `gmtime`

_Description:_
---
Converts `time_t` to broken‑down UTC time in a static `struct tm`. Not thread-safe; use `gmtime_r` where available.

Example:

```c
#include <time.h>
time_t t = 0; struct tm *tm = gmtime(&t); // tm->tm_year == 70 (1970)
```
---

<a id="id-hypot"></a>
### `hypot`

_Description:_
---
Computes `sqrt(x*x + y*y)` without undue overflow/underflow.

Example:

```c
#include <math.h>
double r = hypot(3.0, 4.0); // r == 5.0
```
---

<a id="id-hypotf"></a>
### `hypotf`

_Description:_
---
`float` version of `hypot`.

Example:

```c
#include <math.h>
float r = hypotf(3.0f, 4.0f); // r == 5.0f
```
---

<a id="id-hypotl"></a>
### `hypotl`

_Description:_
---
`long double` version of `hypot`.

Example:

```c
#include <math.h>
long double r = hypotl(3.0L, 4.0L); // r == 5.0L
```
---

<a id="id-ilogb"></a>
### `ilogb`

_Description:_
---
Extracts the unbiased exponent of a floating value as an `int` (FP exponent function).

Example:

```c
#include <math.h>
int e = ilogb(8.0); // e == 3 (since 8 == 2^3)
```
---

<a id="id-ilogbf"></a>
### `ilogbf`

_Description:_
---
`float` version of `ilogb`.

Example:

```c
#include <math.h>
int e = ilogbf(0.5f); // e == -1 (0.5 == 2^-1)
```
---

<a id="id-ilogbl"></a>
### `ilogbl`

_Description:_
---
`long double` version of `ilogb`.

Example:

```c
#include <math.h>
int e = ilogbl(1.0L); // e == 0
```
---

<a id="id-imaxabs"></a>
### `imaxabs`

_Description:_
---
Returns absolute value of a `intmax_t` integer.

Example:

```c
#include <inttypes.h>
intmax_t r = imaxabs((intmax_t)-5); // r == 5
```
---

<a id="id-imaxdiv"></a>
### `imaxdiv`

_Description:_
---
Divides two `intmax_t` values, returning quotient and remainder in `imaxdiv_t`.

Example:

```c
#include <inttypes.h>
imaxdiv_t d = imaxdiv(10, 3); // d.quot == 3, d.rem == 1
```
---

<a id="id-isalnum"></a>
### `isalnum`

_Description:_
---
Returns nonzero if the character is alphanumeric (letter or digit). Argument must be `EOF` or `unsigned char` value.

Example:

```c
#include <ctype.h>
#include <stdio.h>
int r = isalnum('A'); // r != 0
```
---

<a id="id-isalpha"></a>
### `isalpha`

_Description:_
---
Returns nonzero if the character is an alphabetic letter. Argument must be `EOF` or `unsigned char` value.

Example:

```c
#include <ctype.h>
int r = isalpha('1'); // r == 0
```
---

<a id="id-isblank"></a>
### `isblank`

_Description:_
---
Returns nonzero if the character is a blank (space or horizontal tab).

Example:

```c
#include <ctype.h>
int r = isblank('\t'); // r != 0
```
---

<a id="id-iscntrl"></a>
### `iscntrl`

_Description:_
---
Returns nonzero if the character is a control character.

Example:

```c
#include <ctype.h>
int r = iscntrl('\n'); // r != 0
```
---

<a id="id-isdigit"></a>
### `isdigit`

_Description:_
---
Returns nonzero if the character is a decimal digit ('0'..'9').

Example:

```c
#include <ctype.h>
int r = isdigit('5'); // r != 0
```
---

<a id="id-isfinite"></a>
### `isfinite`

_Description:_

---

<a id="id-isgraph"></a>
### `isgraph`

_Description:_
---
Returns nonzero if the character has a graphical representation (printable and not space).

Example:

```c
#include <ctype.h>
int r = isgraph('#'); // r != 0
```
---

<a id="id-isgreater"></a>
### `isgreater`

_Description:_

---

<a id="id-isgreaterequal"></a>
### `isgreaterequal`

_Description:_

---

<a id="id-isinf"></a>
### `isinf`

_Description:_

---

<a id="id-isless"></a>
### `isless`

_Description:_

---

<a id="id-islessequal"></a>
### `islessequal`

_Description:_

---

<a id="id-islessgreater"></a>
### `islessgreater`

_Description:_

---

<a id="id-islower"></a>
### `islower`

_Description:_
---
Returns nonzero if the character is a lowercase letter.

Example:

```c
#include <ctype.h>
int r = islower('g'); // r != 0
```
---

<a id="id-isnan"></a>
### `isnan`

_Description:_

---

<a id="id-isnormal"></a>
### `isnormal`

_Description:_

---

<a id="id-isprint"></a>
### `isprint`

_Description:_
---
Returns nonzero if the character is printable (including space).

Example:

```c
#include <ctype.h>
int r = isprint(' '); // r != 0
```
---

<a id="id-ispunct"></a>
### `ispunct`

_Description:_
---
Returns nonzero if the character is a punctuation character.

Example:

```c
#include <ctype.h>
int r = ispunct('!'); // r != 0
```
---

<a id="id-isspace"></a>
### `isspace`

_Description:_
---
Returns nonzero if the character is whitespace (space, tab, newline, vertical tab, form feed, carriage return).

Example:

```c
#include <ctype.h>
int r = isspace('\n'); // r != 0
```
---

<a id="id-isunordered"></a>
### `isunordered`

_Description:_

---

<a id="id-isupper"></a>
### `isupper`

_Description:_
---
Returns nonzero if the character is an uppercase letter.

Example:

```c
#include <ctype.h>
int r = isupper('Z'); // r != 0
```
---

<a id="id-iswalnum"></a>
### `iswalnum`

_Description:_

---
Returns nonzero if the wide character is alphanumeric (letter or decimal digit)
in the current locale.

Example:

```c
#include <wctype.h>
int a = iswalnum(L'A'); // a != 0
int b = iswalnum(L'7'); // b != 0
int c = iswalnum(L'#'); // c == 0
```
---

<a id="id-iswalpha"></a>
### `iswalpha`

_Description:_

---
Returns nonzero if the wide character is a letter in the current locale.

Example:

```c
#include <wctype.h>
int r1 = iswalpha(L'Z'); // r1 != 0
int r2 = iswalpha(L'9'); // r2 == 0
```
---

<a id="id-iswblank"></a>
### `iswblank`

_Description:_

---
Returns nonzero if the wide character is a blank character (space or horizontal
tab). Other whitespace like newline is not considered blank.

Example:

```c
#include <wctype.h>
int s = iswblank(L' ');  // s != 0
int t = iswblank(L'\t'); // t != 0
int n = iswblank(L'\n'); // n == 0
```
---

<a id="id-iswcntrl"></a>
### `iswcntrl`

_Description:_

---
Returns nonzero if the wide character is a control character (non-printing).

Example:

```c
#include <wctype.h>
int r1 = iswcntrl(L'\n'); // r1 != 0
int r2 = iswcntrl(L'A');  // r2 == 0
```
---

<a id="id-iswctype"></a>
### `iswctype`

_Description:_

---
Tests a wide character against a character class identified by a `wctype_t`
value obtained from `wctype("class")`.

Common classes include: "alnum", "alpha", "blank", "cntrl", "digit",
"graph", "lower", "print", "punct", "space", "upper", "xdigit".

Example:

```c
#include <wctype.h>
wctype_t digit_class = wctype("digit");
int r1 = iswctype(L'5', digit_class); // r1 != 0
int r2 = iswctype(L'G', digit_class); // r2 == 0
```
---

<a id="id-iswdigit"></a>
### `iswdigit`

_Description:_

---
Returns nonzero if the wide character is a decimal digit ('0'..'9') in the
current locale.

Example:

```c
#include <wctype.h>
int r1 = iswdigit(L'3'); // r1 != 0
int r2 = iswdigit(L'A'); // r2 == 0
```
---

<a id="id-iswgraph"></a>
### `iswgraph`

_Description:_

---
Returns nonzero if the wide character is printable and not a space. Equivalent
to `iswprint(wc) && !iswspace(wc)`.

Example:

```c
#include <wctype.h>
int r1 = iswgraph(L'!'); // r1 != 0
int r2 = iswgraph(L' '); // r2 == 0
```
---

<a id="id-iswlower"></a>
### `iswlower`

_Description:_

---
Returns nonzero if the wide character is a lowercase letter in the current
locale.

Example:

```c
#include <wctype.h>
int r1 = iswlower(L'a'); // r1 != 0
int r2 = iswlower(L'A'); // r2 == 0
```
---

<a id="id-iswprint"></a>
### `iswprint`

_Description:_

---
Returns nonzero if the wide character is printable, including the space
character. Control characters are not printable.

Example:

```c
#include <wctype.h>
int r1 = iswprint(L' ');  // r1 != 0
int r2 = iswprint(L'\n'); // r2 == 0
```
---

<a id="id-iswpunct"></a>
### `iswpunct`

_Description:_

---
Returns nonzero if the wide character is a punctuation character.

Example:

```c
#include <wctype.h>
int r = iswpunct(L'!'); // r != 0
```
---

<a id="id-iswspace"></a>
### `iswspace`

_Description:_

---
Returns nonzero if the wide character is whitespace (space, tab, newline,
vertical tab, form feed, carriage return).

Example:

```c
#include <wctype.h>
int r1 = iswspace(L'\t'); // r1 != 0
int r2 = iswspace(L'A');  // r2 == 0
```
---

<a id="id-iswupper"></a>
### `iswupper`

_Description:_

---
Returns nonzero if the wide character is an uppercase letter in the current
locale.

Example:

```c
#include <wctype.h>
int r1 = iswupper(L'Z'); // r1 != 0
int r2 = iswupper(L'z'); // r2 == 0
```
---

<a id="id-iswxdigit"></a>
### `iswxdigit`

_Description:_

---
Returns nonzero if the wide character is a hexadecimal digit ('0'..'9',
'a'..'f', 'A'..'F').

Example:

```c
#include <wctype.h>
int r1 = iswxdigit(L'B'); // r1 != 0
int r2 = iswxdigit(L'G'); // r2 == 0
```
---

<a id="id-isxdigit"></a>
### `isxdigit`

_Description:_
---
Returns nonzero if the character is a hexadecimal digit ('0'..'9', 'a'..'f', 'A'..'F').

Example:

```c
#include <ctype.h>
int r = isxdigit('B'); // r != 0
```
---

<a id="id-labs"></a>
### `labs`

_Description:_

---
Returns the absolute value of a `long int`.

Example:

```c
#include <stdlib.h>
long int r = labs(-123L); // r == 123
```
---

<a id="id-ldexp"></a>
### `ldexp`

_Description:_

---
Returns `x * 2^exp` as a `double`.

Example:

```c
#include <math.h>
double r = ldexp(3.0, 4); // r == 48.0
```
---

<a id="id-ldexpf"></a>
### `ldexpf`

_Description:_

---
Returns `x * 2^exp` as a `float`.

Example:

```c
#include <math.h>
float r = ldexpf(3.0f, 4); // r == 48.0f
```
---

<a id="id-ldexpl"></a>
### `ldexpl`

_Description:_

---
Returns `x * 2^exp` as a `long double`.

Example:

```c
#include <math.h>
long double r = ldexpl(3.0L, 4); // r == 48.0L
```
---

<a id="id-ldiv"></a>
### `ldiv`

_Description:_

---
Divides two `long int` values and returns quotient and remainder as `ldiv_t`.

Example:

```c
#include <stdlib.h>
ldiv_t q = ldiv(10L, 3L); // q.quot == 3, q.rem == 1
```
---

<a id="id-ldiv_t"></a>
### `ldiv_t`

_Description:_

---
Structure type returned by `ldiv`, with fields `long int quot; long int rem;`.

Example:

```c
#include <stdlib.h>
ldiv_t r = ldiv(42L, 5L); // r.quot == 8, r.rem == 2
```
---

<a id="id-lgamma"></a>
### `lgamma`

_Description:_

---
Returns the natural log of the absolute value of the gamma function of `x`
as a `double`. May set the external `int signgam` to the sign of `gamma(x)`.

Example:

```c
#include <math.h>
double r = lgamma(5.0); // r ~= log(24) ~= 3.17805383
```
---

<a id="id-lgammaf"></a>
### `lgammaf`

_Description:_

---
Float version of `lgamma`.

Example:

```c
#include <math.h>
float r = lgammaf(5.0f); // r ~= 3.17805383f
```
---

<a id="id-lgammal"></a>
### `lgammal`

_Description:_

---
Long double version of `lgamma`.

Example:

```c
#include <math.h>
long double r = lgammal(5.0L); // r ~= 3.17805383L
```
---

<a id="id-llabs"></a>
### `llabs`

_Description:_

---
Returns the absolute value of a `long long int`.

Example:

```c
#include <stdlib.h>
long long r = llabs(-42LL); // r == 42
```
---

<a id="id-lldiv"></a>
### `lldiv`

_Description:_

---
Divides two `long long int` values and returns quotient and remainder as
`lldiv_t`.

Example:

```c
#include <stdlib.h>
lldiv_t q = lldiv(100LL, 9LL); // q.quot == 11, q.rem == 1
```
---

<a id="id-lldiv_t"></a>
### `lldiv_t`

_Description:_

---
Structure type returned by `lldiv`, with fields `long long int quot; long long int rem;`.

Example:

```c
#include <stdlib.h>
lldiv_t r = lldiv(7LL, 3LL); // r.quot == 2, r.rem == 1
```
---

<a id="id-localeconv"></a>
### `localeconv`

_Description:_

---
Returns a pointer to a `struct lconv` with numeric and monetary formatting for
the current locale.

Example:

```c
#include <locale.h>
setlocale(LC_ALL, "C");
struct lconv *lc = localeconv();
// lc->decimal_point == "."
```
---

<a id="id-localtime"></a>
### `localtime`

_Description:_

---
Converts a `time_t` value to a broken-down local time `struct tm`.

Example:

```c
#include <time.h>
time_t t = time(NULL);
struct tm *tm = localtime(&t); // tm != NULL
```
---

<a id="id-log"></a>
### `log`

_Description:_

---
Returns the natural logarithm (base e) of `x` as a `double`.

Example:

```c
#include <math.h>
double r = log(2.718281828); // r ~= 1.0
```
---

<a id="id-log10"></a>
### `log10`

_Description:_

---
Returns the base-10 logarithm of `x` as a `double`.

Example:

```c
#include <math.h>
double r = log10(1000.0); // r == 3.0
```
---

<a id="id-log10f"></a>
### `log10f`

_Description:_

---
Float version of `log10`.

Example:

```c
#include <math.h>
float r = log10f(1000.0f); // r == 3.0f
```
---

<a id="id-log10l"></a>
### `log10l`

_Description:_

---
Long double version of `log10`.

Example:

```c
#include <math.h>
long double r = log10l(1000.0L); // r == 3.0L
```
---

<a id="id-log1p"></a>
### `log1p`

_Description:_

---
Returns the natural logarithm of 1 plus `x` (i.e., `log(1+x)`) with improved
accuracy for small `x`. Domain: `x > -1`.

Example:

```c
#include <math.h>
double r1 = log1p(0.0);          // r1 == 0.0
double r2 = log1p(exp(1.0) - 1); // r2 ~= 1.0
```
---

<a id="id-log1pf"></a>
### `log1pf`

_Description:_

---
Float version of `log1p`.

Example:

```c
#include <math.h>
float r = log1pf(expf(1.0f) - 1.0f); // r ~= 1.0f
```
---

<a id="id-log1pl"></a>
### `log1pl`

_Description:_

---
Long double version of `log1p`.

Example:

```c
#include <math.h>
long double r = log1pl(expl(1.0L) - 1.0L); // r ~= 1.0L
```
---

<a id="id-log2"></a>
### `log2`

_Description:_

---
Returns the base-2 logarithm of `x` as a `double`. Domain: `x > 0`.

Example:

```c
#include <math.h>
double r = log2(16.0); // r == 4.0
```
---

<a id="id-log2f"></a>
### `log2f`

_Description:_

---
Float version of `log2`.

Example:

```c
#include <math.h>
float r = log2f(8.0f); // r == 3.0f
```
---

<a id="id-log2l"></a>
### `log2l`

_Description:_

---
Long double version of `log2`.

Example:

```c
#include <math.h>
long double r = log2l(32.0L); // r == 5.0L
```
---

<a id="id-logb"></a>
### `logb`

_Description:_

---
Returns the unbiased exponent of `x` as a floating value. For normal numbers,
equivalent to `floor(log2(|x|))`. Domain excludes `x == 0` (returns `-HUGE_VAL`).

Example:

```c
#include <math.h>
double r = logb(16.0); // r == 4.0
```
---

<a id="id-logbf"></a>
### `logbf`

_Description:_

---
Float version of `logb`.

Example:

```c
#include <math.h>
float r = logbf(0.5f); // r == -1.0f
```
---

<a id="id-logbl"></a>
### `logbl`

_Description:_

---
Long double version of `logb`.

Example:

```c
#include <math.h>
long double r = logbl(8.0L); // r == 3.0L
```
---

<a id="id-logf"></a>
### `logf`

_Description:_

---
Float version of natural logarithm `log`.

Example:

```c
#include <math.h>
float r = logf(2.7182818f); // r ~= 1.0f
```
---

<a id="id-logl"></a>
### `logl`

_Description:_

---
Long double version of natural logarithm `log`.

Example:

```c
#include <math.h>
long double r = logl(1.0L); // r == 0.0L
```
---

<a id="id-longjmp"></a>
### `longjmp`

_Description:_

---
Performs a nonlocal jump to a point saved by `setjmp`. Causes `setjmp` to
return `val` (or 1 if `val == 0`).

Example:

```c
#include <setjmp.h>
#include <stdio.h>

jmp_buf env;

void f(void) {
    longjmp(env, 42);
}

int main(void) {
    int r = setjmp(env);
    if (r == 0) {
        f();
        return 1; // not reached
    }
    printf("Returned via longjmp with %d\n", r); // r == 42
    return 0;
}
```
---

<a id="id-malloc"></a>
### `malloc`

_Description:_

---
Allocates `size` bytes and returns a pointer to the allocated memory, or `NULL`
if the allocation fails. The memory is uninitialized.

Example:

```c
#include <stdlib.h>
#include <stdio.h>

int *p = (int *)malloc(3 * sizeof(int));
if (p) {
    p[0] = 10; p[1] = 20; p[2] = 30; // OK
    printf("%d %d %d\n", p[0], p[1], p[2]); // 10 20 30
}
free(p);
```
---

<a id="id-mblen"></a>
### `mblen`

_Description:_

---
Determines the number of bytes constituting the next multibyte character in the
current locale. Returns 0 for null byte, -1 on encoding error.

Example:

```c
#include <stdlib.h>
int r1 = mblen("A", MB_CUR_MAX); // r1 == 1
int r2 = mblen("\0", MB_CUR_MAX); // r2 == 0
```
---

<a id="id-mbrlen"></a>
### `mbrlen`

_Description:_

---
State-dependent version of `mblen`. Returns the number of bytes of the next
multibyte character, (size_t)-2 if incomplete, (size_t)-1 on error.

Example:

```c
#include <wchar.h>
mbstate_t st = {0};
size_t n = mbrlen("A", MB_CUR_MAX, &st); // n == 1
```
---

<a id="id-mbrtoc16"></a>
### `mbrtoc16`

_Description:_

---
Converts the next multibyte character to `char16_t`. Returns bytes consumed,
(size_t)-2 if incomplete, (size_t)-1 on error.

Example:

```c
#include <uchar.h>
#include <wchar.h>
mbstate_t st = {0};
char16_t out;
size_t n = mbrtoc16(&out, "A", MB_CUR_MAX, &st); // n == 1, out == u'A'
```
---

<a id="id-mbrtoc32"></a>
### `mbrtoc32`

_Description:_

---
Converts the next multibyte character to `char32_t`. Returns bytes consumed,
(size_t)-2 if incomplete, (size_t)-1 on error.

Example:

```c
#include <uchar.h>
#include <wchar.h>
mbstate_t st = {0};
char32_t out;
size_t n = mbrtoc32(&out, "A", MB_CUR_MAX, &st); // n == 1, out == U'A'
```
---

<a id="id-mbrtowc"></a>
### `mbrtowc`

_Description:_

---
Converts the next multibyte character to `wchar_t`. Returns bytes consumed,
(size_t)-2 if incomplete, (size_t)-1 on error.

Example:

```c
#include <wchar.h>
mbstate_t st = {0};
wchar_t wc;
size_t n = mbrtowc(&wc, "A", MB_CUR_MAX, &st); // n == 1, wc == L'A'
```
---

<a id="id-mbsinit"></a>
### `mbsinit`

_Description:_

---
Tests whether the conversion state object `mbstate_t` is in the initial state.
Returns nonzero if initial or if the pointer is `NULL`.

Example:

```c
#include <wchar.h>
mbstate_t st = {0};
int r = mbsinit(&st); // r != 0
```
---

<a id="id-mbsnrtowcs"></a>
### `mbsnrtowcs`

_Description:_

---
Converts a multibyte string to wide string, processing at most `n` bytes.
Updates the source pointer. Returns number of wide characters written.

Example:

```c
#include <wchar.h>
const char *src = "Hi";
mbstate_t st = {0};
wchar_t dst[8];
size_t r = mbsnrtowcs(dst, &src, 2, 8, &st); // r == 2
```
---

<a id="id-mbsrtowcs"></a>
### `mbsrtowcs`

_Description:_

---
Converts a NUL-terminated multibyte string to a wide-character string. Returns
the number of wide characters written (excluding terminator).

Example:

```c
#include <wchar.h>
const char *src = "Hello";
mbstate_t st = {0};
wchar_t dst[16];
size_t r = mbsrtowcs(dst, &src, 16, &st); // r == 5
```
---

<a id="id-mbstowcs"></a>
### `mbstowcs`

_Description:_

---
Converts a multibyte string to a wide-character string using the current
locale. Returns the number of wide characters written (excluding terminator),
or `(size_t)-1` on encoding error.

Example:

```c
#include <stdlib.h>
const char *src = "OK";
wchar_t dst[8];
size_t r = mbstowcs(dst, src, 8); // r == 2
```
---

<a id="id-mbtowc"></a>
### `mbtowc`

_Description:_

---
Converts the next multibyte character to `wchar_t`. Returns number of bytes
processed, 0 for null, or -1 on encoding error.

Example:

```c
#include <stdlib.h>
wchar_t wc;
int n = mbtowc(&wc, "A", MB_CUR_MAX); // n == 1, wc == L'A'
```
---

<a id="id-memchr"></a>
### `memchr`

_Description:_

---
Scans the first `n` bytes of the memory block for the first occurrence of byte
`c`. Returns pointer to match or `NULL`.

Example:

```c
#include <string.h>
const char *s = "hello";
const char *p = (const char *)memchr(s, 'e', 5); // p == &s[1]
```
---

<a id="id-memcmp"></a>
### `memcmp`

_Description:_

---
Compares the first `n` bytes of two memory blocks. Returns <0, 0, >0 if first
is less than, equal to, or greater than second.

Example:

```c
#include <string.h>
int r1 = memcmp("abc", "abc", 3); // r1 == 0
int r2 = memcmp("abc", "abd", 3); // r2 < 0
```
---

<a id="id-memcpy"></a>
### `memcpy`

_Description:_

---
Copies `n` bytes from source to destination. The memory regions must not
overlap.

Example:

```c
#include <string.h>
char dst[4];
memcpy(dst, "abc", 4); // copies 'a','b','c','\0'
// dst now contains "abc"
```
---

<a id="id-memmove"></a>
### `memmove`

_Description:_

---
Copies `n` bytes between memory areas, safe for overlapping regions.

Example:

```c
#include <string.h>
char s[] = "abcdef";
memmove(s + 2, s, 4); // s becomes "ababcd"
```
---

<a id="id-memset"></a>
### `memset`

_Description:_

---
Fills the first `n` bytes of the memory block with the byte value `c`.

Example:

```c
#include <string.h>
char buf[5];
memset(buf, '*', 4); buf[4] = '\0';
// buf contains "****"
```
---

<a id="id-mktime"></a>
### `mktime`

_Description:_

---
Converts local calendar time (broken-down `struct tm`) to `time_t` and
normalizes the fields. Updates `tm_wday` and `tm_yday`.

Example:

```c
#include <time.h>
struct tm tm = {0};
tm.tm_year = 120; // years since 1900 -> 2020
tm.tm_mon  = 0;   // January
tm.tm_mday = 1;   // 1st
mktime(&tm);
int wday = tm.tm_wday; // wday == 3 (Wednesday)
```
---

<a id="id-modf"></a>
### `modf`

_Description:_

---
Decomposes `x` into fractional and integral parts. Returns the fractional part
with the same sign as `x`, and stores the integral part in `*iptr`.

Example:

```c
#include <math.h>
double ip;
double frac = modf(3.75, &ip); // ip == 3.0, frac == 0.75
```
---

<a id="id-modff"></a>
### `modff`

_Description:_

---
Float version of `modf`.

Example:

```c
#include <math.h>
float ip;
float frac = modff(2.5f, &ip); // ip == 2.0f, frac == 0.5f
```
---

<a id="id-modfl"></a>
### `modfl`

_Description:_

---
Long double version of `modf`.

Example:

```c
#include <math.h>
long double ip;
long double frac = modfl(1.25L, &ip); // ip == 1.0L, frac == 0.25L
```
---

<a id="id-nan"></a>
### `nan`

_Description:_

---
Generates a quiet NaN value, optionally using a string tag. Result compares
unequal to all values, including itself.

Example:

```c
#include <math.h>
#include <stdbool.h>
double x = nan(""); // x is NaN
bool b = (x != x);   // b == true
```
---

<a id="id-nanf"></a>
### `nanf`

_Description:_

---
Generates a quiet NaN value of type `float`, optionally using a string tag.

Example:

```c
#include <math.h>
float x = nanf(""); // x is NaN
int is_nan = (x != x); // is_nan == 1
```
---

<a id="id-nanl"></a>
### `nanl`

_Description:_

---
Generates a quiet NaN value of type `long double`, optionally using a string tag.

Example:

```c
#include <math.h>
long double x = nanl(""); // x is NaN
int is_nan = (x != x);     // is_nan == 1
```
---

<a id="id-nearbyint"></a>
### `nearbyint`

_Description:_

---
Rounds `x` to the nearest integer value in floating type according to the current
rounding mode (default: ties-to-even). Does not raise inexact.

Example:

```c
#include <math.h>
double r = nearbyint(2.5); // with ties-to-even, r == 2.0
```
---

<a id="id-nearbyintf"></a>
### `nearbyintf`

_Description:_

---
Float version of `nearbyint`.

Example:

```c
#include <math.h>
float r = nearbyintf(3.5f); // with ties-to-even, r == 4.0f
```
---

<a id="id-nearbyintl"></a>
### `nearbyintl`

_Description:_

---
Long double version of `nearbyint`.

Example:

```c
#include <math.h>
long double r = nearbyintl(1.5L); // with ties-to-even, r == 2.0L
```
---

<a id="id-nextafter"></a>
### `nextafter`

_Description:_

---
Returns the next representable `double` value after `x` in the direction of `y`.

Example:

```c
#include <math.h>
double y = nextafter(1.0, 2.0); // y > 1.0 by the smallest possible increment
```
---

<a id="id-nextafterf"></a>
### `nextafterf`

_Description:_

---
Float version of `nextafter`.

Example:

```c
#include <math.h>
float y = nextafterf(1.0f, 0.0f); // y < 1.0f by the smallest decrement
```
---

<a id="id-nextafterl"></a>
### `nextafterl`

_Description:_

---
Long double version of `nextafter`.

Example:

```c
#include <math.h>
long double y = nextafterl(0.0L, 1.0L); // y > 0.0L by the smallest increment
```
---

<a id="id-nexttoward"></a>
### `nexttoward`

_Description:_

---
Returns the next representable `double` after `x` toward `y` (long double direction argument).

Example:

```c
#include <math.h>
double y = nexttoward(1.0, 2.0L); // moves one ULP toward 2.0
```
---

<a id="id-nexttowardf"></a>
### `nexttowardf`

_Description:_

---
Float version of `nexttoward`.

Example:

```c
#include <math.h>
float y = nexttowardf(0.0f, 1.0L); // moves one ULP toward 1.0
```
---

<a id="id-nexttowardl"></a>
### `nexttowardl`

_Description:_

---
Long double version of `nexttoward`.

Example:

```c
#include <math.h>
long double y = nexttowardl(1.0L, 0.0L); // moves one ULP toward 0.0
```
---

<a id="id-perror"></a>
### `perror`

_Description:_

---
Prints a descriptive error message to `stderr` for the current `errno`, prefixed
by the given string.

Example:

```c
#include <stdio.h>

FILE *f = fopen("/no/such/file.txt", "r");
if (!f) {
    perror("fopen"); // e.g., "fopen: No such file or directory"
}
```
---

<a id="id-pow"></a>
### `pow`

_Description:_

---
Returns `x` raised to the power `y` as `double`.

Example:

```c
#include <math.h>
double r = pow(2.0, 10.0); // r == 1024.0
```
---

<a id="id-powf"></a>
### `powf`

_Description:_

---
Float version of `pow`.

Example:

```c
#include <math.h>
float r = powf(3.0f, 3.0f); // r == 27.0f
```
---

<a id="id-powl"></a>
### `powl`

_Description:_

---
Long double version of `pow`.

Example:

```c
#include <math.h>
long double r = powl(10.0L, 2.0L); // r == 100.0L
```
---

<a id="id-printf"></a>
### `printf`

_Description:_

---
Writes formatted output to `stdout`.

Example:

```c
#include <stdio.h>
int n = printf("Hello %d\n", 42); // prints "Hello 42" and newline; n == 9
```
---

<a id="id-putc"></a>
### `putc`

_Description:_

---
Writes a character to the given stream. Typically a macro that calls `fputc`.

Example:

```c
#include <stdio.h>
FILE *f = fopen("out.txt", "w");
putc('A', f);
fclose(f); // out.txt now contains "A"
```
---

<a id="id-putchar"></a>
### `putchar`

_Description:_

---
Writes a character to `stdout`.

Example:

```c
#include <stdio.h>
putchar('A');
putchar('\n'); // outputs: A\n
```
---

<a id="id-puts"></a>
### `puts`

_Description:_

---
Writes a string to `stdout` followed by a newline.

Example:

```c
#include <stdio.h>
int n = puts("Hello"); // outputs: Hello\n; n >= 0
```
---

<a id="id-qsort"></a>
### `qsort`

_Description:_

---
Sorts an array using the quicksort algorithm with a user-provided comparator.

Example:

```c
#include <stdlib.h>
#include <stdio.h>

int cmp_ints(const void *a, const void *b) {
    int ia = *(const int *)a;
    int ib = *(const int *)b;
    return (ia > ib) - (ia < ib);
}

int arr[5] = {3, 1, 4, 1, 5};
qsort(arr, 5, sizeof(int), cmp_ints);
// arr is now {1, 1, 3, 4, 5}
```
---

<a id="id-quick_exit"></a>
### `quick_exit`

_Description:_

---
Terminates the program quickly without calling `atexit` handlers; calls
`at_quick_exit` handlers instead.

Example:

```c
#include <stdlib.h>
// at_quick_exit handlers (if any) would run here
quick_exit(0); // program terminates immediately
```
---

<a id="id-raise"></a>
### `raise`

_Description:_

---
Sends the signal `sig` to the calling process.

Example:

```c
#include <signal.h>
#include <stdio.h>

void handler(int s) { printf("handled %d\n", s); }

signal(SIGINT, handler);
raise(SIGINT); // prints: handled 2
```
---

<a id="id-rand"></a>
### `rand`

_Description:_

---
Returns a pseudo-random integer in the range `[0, RAND_MAX]`. Use `srand` to
seed.

Example:

```c
#include <stdlib.h>
srand(1234);
int r = rand(); // r is deterministic given the seed, 0 <= r <= RAND_MAX
```
---

<a id="id-realloc"></a>
### `realloc`

_Description:_

---
Changes the size of the memory block pointed to by `ptr`. Preserves existing
contents up to the lesser of old and new sizes; may move the block.

Example:

```c
#include <stdlib.h>
int *p = (int *)malloc(2 * sizeof(int));
p[0] = 7; p[1] = 9;
p = (int *)realloc(p, 4 * sizeof(int));
p[2] = 11; p[3] = 13;
// p now has {7, 9, 11, 13}
free(p);
```
---

<a id="id-remainder"></a>
### `remainder`

_Description:_

---
Returns the IEEE remainder of `x` with respect to `y`: `x - y * rint(x/y)`
with ties-to-even; magnitude of result ≤ `y/2`.

Example:

```c
#include <math.h>
double r = remainder(6.0, 4.0); // 6/4=1.5 -> nearest even 2 -> r == -2.0
```
---

<a id="id-remainderf"></a>
### `remainderf`

_Description:_

---
Float version of `remainder`.

Example:

```c
#include <math.h>
float r = remainderf(5.0f, 2.0f); // 5/2=2.5 -> nearest even 2 -> r == 1.0f
```
---

<a id="id-remainderl"></a>
### `remainderl`

_Description:_

---
Long double version of `remainder`.

Example:

```c
#include <math.h>
long double r = remainderl(7.0L, 4.0L); // 7/4=1.75 -> r == -1.0L
```
---

<a id="id-remove"></a>
### `remove`

_Description:_

---
Deletes the file with the given pathname. Returns 0 on success.

Example:

```c
#include <stdio.h>
FILE *f = fopen("temp.txt", "w");
if (f) { fputs("x", f); fclose(f); }
int r = remove("temp.txt"); // r == 0 on success
```
---

<a id="id-remquo"></a>
### `remquo`

_Description:_

---
Returns the IEEE remainder as `remainder(x,y)` and stores in `*quo` some low
order bits of the integral quotient of `x/y` with sign.

Example:

```c
#include <math.h>
int q;
double r = remquo(29.0, 8.0, &q); // r == -3.0; q holds low-order quotient bits
```
---

<a id="id-remquof"></a>
### `remquof`

_Description:_

---
Float version of `remquo`.

Example:

```c
#include <math.h>
int q;
float r = remquof(10.0f, 4.0f, &q); // r == -2.0f; q stores quotient bits
```
---

<a id="id-remquol"></a>
### `remquol`

_Description:_

---
Long double version of `remquo`.

Example:

```c
#include <math.h>
int q;
long double r = remquol(13.0L, 4.0L, &q); // r == 1.0L; q stores quotient bits
```
---

<a id="id-rename"></a>
### `rename`

_Description:_

---
Changes the name or location of a file. Returns 0 on success.

Example:

```c
#include <stdio.h>
FILE *f = fopen("old.txt", "w"); if (f) { fputs("x", f); fclose(f); }
int r = rename("old.txt", "new.txt"); // r == 0 on success
```
---

<a id="id-rewind"></a>
### `rewind`

_Description:_
---
Equivalent to `fseek(stream, 0L, SEEK_SET)` and clears error and EOF indicators.

Example:

```c
#include <stdio.h>
FILE *fp = fopen("example.txt", "r");
fgetc(fp); rewind(fp);
int ch = fgetc(fp); // back to first byte
fclose(fp);
```
---

<a id="id-scanf"></a>
### `scanf`

_Description:_

---
Reads formatted input from `stdin` and stores the parsed values into the provided
addresses. Returns the number of items successfully assigned.

Example:

```c
#include <stdio.h>
int x; char word[16];
// If user types: 42 hello<Enter>
int n = scanf("%d %15s", &x, word);
// n == 2, x == 42, word == "hello"
```
---

<a id="id-setbuf"></a>
### `setbuf`

_Description:_

---
Sets the buffer for a stream. If `buf` is `NULL`, the stream is unbuffered;
otherwise uses the provided buffer (size `BUFSIZ`).

Example:

```c
#include <stdio.h>
static char buf[BUFSIZ];
setbuf(stdout, buf); // stdout now uses 'buf' as its buffer
```
---

<a id="id-setjmp"></a>
### `setjmp`

_Description:_

---
Saves the calling environment in `jmp_buf` for later use by `longjmp`. Returns 0
on initial call, and returns the value passed to `longjmp` when jumping back.

Example:

```c
#include <setjmp.h>
#include <stdio.h>

jmp_buf env;

int main(void) {
    int r = setjmp(env);
    if (r == 0) {
        // later some function may call longjmp(env, 123);
        printf("saved env\n");
    } else {
        printf("returned via longjmp with %d\n", r); // e.g., 123
    }
    return 0;
}
```
---

<a id="id-setlocale"></a>
### `setlocale`

_Description:_

---
Sets or queries the program's current locale. Returns a string naming the new
locale or `NULL` on failure.

Example:

```c
#include <locale.h>
const char *loc = setlocale(LC_ALL, "C"); // loc == "C"
```
---

<a id="id-setvbuf"></a>
### `setvbuf`

_Description:_

---
Sets the buffering mode and buffer for a stream: `_IOFBF` (full), `_IOLBF`
(line), or `_IONBF` (none). Returns 0 on success.

Example:

```c
#include <stdio.h>
static char buf[1024];
int r = setvbuf(stdout, buf, _IOLBF, sizeof(buf)); // r == 0
```
---

<a id="id-signal"></a>
### `signal`

_Description:_

---
Sets a signal handler for the specified signal and returns the previous handler
on success, or `SIG_ERR` on error.

Example:

```c
#include <signal.h>
#include <stdio.h>

void handler(int s) { printf("caught %d\n", s); }
void (*prev)(int) = signal(SIGINT, handler);
// raising SIGINT will print: caught 2
```
---

<a id="id-sig_atomic_t"></a>
### `sig_atomic_t`

_Description:_

---
An integer type that can be read and written atomically, safe to use in signal
handlers.

Example:

```c
#include <signal.h>
volatile sig_atomic_t flag = 0;
void handler(int s) { flag = 1; }
```
---

<a id="id-sin"></a>
### `sin`

_Description:_

---
Returns the sine of `x` (in radians) as a `double`.

Example:

```c
#include <math.h>
double r = sin(M_PI / 2); // r == 1.0
```
---

<a id="id-sinf"></a>
### `sinf`

_Description:_

---
Float version of `sin`.

Example:

```c
#include <math.h>
float r = sinf((float)M_PI / 2.0f); // r == 1.0f
```
---

<a id="id-sinh"></a>
### `sinh`

_Description:_

---
Returns the hyperbolic sine of `x` as a `double`.

Example:

```c
#include <math.h>
double r = sinh(0.0); // r == 0.0
```
---

<a id="id-sinhf"></a>
### `sinhf`

_Description:_

---
Float version of `sinh`.

Example:

```c
#include <math.h>
float r = sinhf(1.0f); // r ~= 1.175201f
```
---

<a id="id-sinhl"></a>
### `sinhl`

_Description:_

---
Long double version of `sinh`.

Example:

```c
#include <math.h>
long double r = sinhl(1.0L); // r ~= 1.175201L
```
---

<a id="id-sinl"></a>
### `sinl`

_Description:_

---
Long double version of `sin`.

Example:

```c
#include <math.h>
long double r = sinl(0.0L); // r == 0.0L
```
---

<a id="id-size_t"></a>
### `size_t`

_Description:_

---
Unsigned integer type used for sizes and counts, returned by `sizeof`.

Example:

```c
#include <stdio.h>
size_t n = sizeof(int); // typically 4
printf("%zu\n", n);
```
---

<a id="id-snprintf"></a>
### `snprintf`

_Description:_

---
Writes formatted output to a buffer, up to `size` bytes including the null
terminator. Returns the number of characters that would have been written
excluding the null terminator.

Example:

```c
#include <stdio.h>
char buf[8];
int n = snprintf(buf, sizeof(buf), "%s %d", "hi", 42);
// buf == "hi 42\0" (fits), n == 5
```
---

<a id="id-sprintf"></a>
### `sprintf`

_Description:_

---
Writes formatted output to a string. Returns the number of characters written
excluding the null terminator. Use `snprintf` to avoid overflow.

Example:

```c
#include <stdio.h>
char buf[16];
int n = sprintf(buf, "%d-%s", 7, "ok");
// buf == "7-ok\0", n == 4
```
---

<a id="id-sqrt"></a>
### `sqrt`

_Description:_

---
Returns the non-negative square root of `x` as a `double`. Domain: `x >= 0`
for real results; negative `x` yields NaN on IEEE-754 systems.

Example:

```c
#include <math.h>
double r = sqrt(9.0); // r == 3.0
```
---

<a id="id-sqrtf"></a>
### `sqrtf`

_Description:_

---
Float version of `sqrt`.

Example:

```c
#include <math.h>
float r = sqrtf(2.25f); // r == 1.5f
```
---

<a id="id-sqrtl"></a>
### `sqrtl`

_Description:_

---
Long double version of `sqrt`.

Example:

```c
#include <math.h>
long double r = sqrtl(4.0L); // r == 2.0L
```
---

<a id="id-srand"></a>
### `srand`

_Description:_

---
Seeds the pseudo-random number generator used by `rand` with `seed`.

Example:

```c
#include <stdlib.h>
srand(42);
int r = rand(); // deterministic given seed 42
```
---

<a id="id-sscanf"></a>
### `sscanf`

_Description:_

---
Reads formatted input from a string and stores parsed values. Returns the number
of items successfully assigned.

Example:

```c
#include <stdio.h>
const char *s = "42 hello";
int x; char word[16];
int n = sscanf(s, "%d %15s", &x, word);
// n == 2, x == 42, word == "hello"
```
---

<a id="id-strcat"></a>
### `strcat`

_Description:_

---
Appends the C-string `src` to the end of `dest` (including the terminator).
`dest` must have enough space.

Example:

```c
#include <string.h>
char dest[16] = "Hello";
strcat(dest, ", ");
strcat(dest, "C");
// dest == "Hello, C"
```
---

<a id="id-strchr"></a>
### `strchr`

_Description:_

---
Returns a pointer to the first occurrence of character `c` in string `s`, or
`NULL` if not found.

Example:

```c
#include <string.h>
const char *s = "abcdea";
const char *p = strchr(s, 'a'); // p == &s[0]
```
---

<a id="id-strcmp"></a>
### `strcmp`

_Description:_

---
Lexicographically compares two C-strings. Returns <0, 0, >0 if `s1` is less
than, equal to, or greater than `s2`.

Example:

```c
#include <string.h>
int r = strcmp("apple", "banana"); // r < 0
```
---

<a id="id-strcoll"></a>
### `strcoll`

_Description:_

---
Compares two strings according to the current locale's collation order. Returns
<0, 0, >0 similar to `strcmp`.

Example:

```c
#include <string.h>
#include <locale.h>
setlocale(LC_COLLATE, "C");
int r = strcoll("a", "b"); // r < 0 in "C" locale
```
---

<a id="id-strcpy"></a>
### `strcpy`

_Description:_

---
Copies the C-string `src` (including the terminating `\0`) to `dest`. `dest`
must be large enough.

Example:

```c
#include <string.h>
char dest[16];
strcpy(dest, "hello");
// dest == "hello"
```
---

<a id="id-strcspn"></a>
### `strcspn`

_Description:_

---
Returns the length of the initial segment of `s` consisting of characters not
in `reject`.

Example:

```c
#include <string.h>
size_t n = strcspn("hello,world", ",!"); // n == 5
```
---

<a id="id-strerror"></a>
### `strerror`

_Description:_

---
Returns a pointer to a string describing the error code `errnum`. The returned
string may be static.

Example:

```c
#include <string.h>
const char *msg = strerror(2); // e.g., "No such file or directory"
```
---

<a id="id-strftime"></a>
### `strftime`

_Description:_

---
Formats date and time from a `struct tm` into a string according to the format
string. Returns the number of bytes placed in the array, not including the
terminating null, or 0 if the result does not fit.

Example:

```c
#include <time.h>
#include <stdio.h>
char buf[32];
struct tm tm = { .tm_year = 123, .tm_mon = 6, .tm_mday = 4 };
size_t n = strftime(buf, sizeof(buf), "%Y-%m-%d", &tm);
// buf == "2023-07-04", n == 10
```
---

<a id="id-strlen"></a>
### `strlen`

_Description:_

---
Returns the length of the string `s`, not including the terminating null byte.

Example:

```c
#include <string.h>
size_t n = strlen("hello"); // n == 5
```
---

<a id="id-strncat"></a>
### `strncat`

_Description:_

---
Appends at most `n` characters from `src` to the end of `dest`, and adds a null
terminator. `dest` must have space for the result.

Example:

```c
#include <string.h>
char dest[8] = "a";
strncat(dest, "bcdef", 3);
// dest == "abcd"
```
---

<a id="id-strncmp"></a>
### `strncmp`

_Description:_

---
Compares at most `n` characters of `s1` and `s2`. Returns <0, 0, >0 similar to
`strcmp`.

Example:

```c
#include <string.h>
int r = strncmp("apple", "application", 5); // r == 0
```
---

<a id="id-strncpy"></a>
### `strncpy`

_Description:_

---
Copies at most `n` characters from `src` to `dest`. If `src` is shorter than
`n`, the remainder of `dest` is padded with `\0`. Does not `\0`-terminate if
`src` is longer than or equal to `n`.

Example:

```c
#include <string.h>
char dest[5];
strncpy(dest, "hello", sizeof(dest));
// dest contains {'h','e','l','l','o'} (no extra terminator)
```
---

<a id="id-strpbrk"></a>
### `strpbrk`

_Description:_

---
Returns a pointer to the first character in `s` that matches any character in
`accept`, or `NULL` if none are found.

Example:

```c
#include <string.h>
const char *s = "abcdxyz";
const char *p = strpbrk(s, "xy"); // p == &s[4]
```
---

<a id="id-strrchr"></a>
### `strrchr`

_Description:_

---
Returns a pointer to the last occurrence of character `c` in string `s`, or
`NULL` if not found.

Example:

```c
#include <string.h>
const char *s = "abca";
const char *p = strrchr(s, 'a'); // p == &s[3]
```
---

<a id="id-strspn"></a>
### `strspn`

_Description:_

---
Returns the length of the initial segment of `s` consisting only of characters
in `accept`.

Example:

```c
#include <string.h>
size_t n = strspn("abc123", "abc"); // n == 3
```
---

<a id="id-strstr"></a>
### `strstr`

_Description:_

---
Finds the first occurrence of substring `needle` in `haystack`. Returns pointer
to the beginning of the substring, or `NULL` if not found.

Example:

```c
#include <string.h>
const char *h = "Hello, World!";
const char *p = strstr(h, "World"); // p == h + 7
```
---

<a id="id-strtod"></a>
### `strtod`

_Description:_

---
Converts the initial part of string `nptr` to `double`. Stores the address of
the first unconverted character in `*endptr` if non-`NULL`.

Example:

```c
#include <stdlib.h>
char *end;
double x = strtod("3.14pi", &end); // x == 3.14, *end == 'p'
```
---

<a id="id-strtof"></a>
### `strtof`

_Description:_

---
Converts the initial part of string `nptr` to `float`.

Example:

```c
#include <stdlib.h>
char *end;
float x = strtof("2.5e1x", &end); // x == 25.0f, *end == 'x'
```
---

<a id="id-strtoimax"></a>
### `strtoimax`

_Description:_

---
Converts string to `intmax_t` with the given base (0 autodetects). Stores end
pointer in `*endptr` if non-`NULL`.

Example:

```c
#include <inttypes.h>
char *end;
intmax_t v = strtoimax("-0x2A", &end, 0); // v == -42
```
---

<a id="id-strtok"></a>
### `strtok`

_Description:_

---
Splits a string into tokens separated by any of the delimiter characters.
Modifies the input string; subsequent calls use `NULL` to continue.

Example:

```c
#include <string.h>
char s[] = "a,b;c";
char *tok = strtok(s, ",;"); // tok == "a"
tok = strtok(NULL, ",;");   // tok == "b"
tok = strtok(NULL, ",;");   // tok == "c"
```
---

<a id="id-strtol"></a>
### `strtol`

_Description:_

---
Converts string to `long int` with the given base (0 autodetects). Stores end
pointer in `*endptr` if non-`NULL`.

Example:

```c
#include <stdlib.h>
char *end;
long v = strtol("1010", &end, 2); // v == 10
```
---

<a id="id-strtold"></a>
### `strtold`

_Description:_

---
Converts the initial part of string `nptr` to `long double`.

Example:

```c
#include <stdlib.h>
char *end;
long double x = strtold("1.25L", &end); // x == 1.25L, *end == 'L'
```
---

<a id="id-strtoll"></a>
### `strtoll`

_Description:_

---
Converts string to `long long int` with the given base.

Example:

```c
#include <stdlib.h>
char *end;
long long v = strtoll("-42", &end, 10); // v == -42
```
---

<a id="id-strtoul"></a>
### `strtoul`

_Description:_

---
Converts string to `unsigned long int` with the given base.

Example:

```c
#include <stdlib.h>
char *end;
unsigned long v = strtoul("0xff", &end, 0); // v == 255
```
---

<a id="id-strtoull"></a>
### `strtoull`

_Description:_

---
Converts string to `unsigned long long int` with the given base.

Example:

```c
#include <stdlib.h>
char *end;
unsigned long long v = strtoull("077", &end, 0); // v == 63 (octal)
```
---

<a id="id-strtoumax"></a>
### `strtoumax`

_Description:_

---
Converts string to `uintmax_t` with the given base.

Example:

```c
#include <inttypes.h>
char *end;
uintmax_t v = strtoumax("18446744073709551615", &end, 10); // max 64-bit
```
---

<a id="id-strxfrm"></a>
### `strxfrm`

_Description:_

---
Transforms `src` into a form suitable for locale-aware comparison so that
`strcmp(strxfrm(a), strxfrm(b))` has the same result as `strcoll(a,b)`. Returns
the length of the transformed string.

Example:

```c
#include <string.h>
#include <locale.h>
setlocale(LC_COLLATE, "C");
char out[32];
size_t n = strxfrm(out, "abc", sizeof(out)); // n == 3, out == "abc"
```
---

<a id="id-swprintf"></a>
### `swprintf`

_Description:_

---
Writes formatted wide-character output to a wide string buffer, with a maximum
of `n` wide characters including the terminator. Returns the number of wide
characters written (excluding the terminator), or a negative value on error.

Example:

```c
#include <wchar.h>
wchar_t wbuf[16];
int n = swprintf(wbuf, 16, L"%ls %d", L"hi", 7);
// wbuf == L"hi 7", n == 4
```
---

<a id="id-swscanf"></a>
### `swscanf`

_Description:_

---
Reads formatted input from a wide string and stores parsed values.
Returns the number of items successfully assigned.

Example:

```c
#include <wchar.h>
const wchar_t *ws = L"42 test";
int x; wchar_t word[8];
int n = swscanf(ws, L"%d %7ls", &x, word);
// n == 2, x == 42, word == L"test"
```
---

<a id="id-system"></a>
### `system`

_Description:_

---
Passes the command string to the host environment to be executed by the command
processor. Returns an implementation-defined status.

Example:

```c
#include <stdlib.h>
int r = system("echo hi > sys_out.txt"); // r >= 0 if executed
```
---

<a id="id-tan"></a>
### `tan`

_Description:_

---
Returns the tangent of `x` (in radians) as a `double`.

Example:

```c
#include <math.h>
double r = tan(M_PI / 4); // r ~= 1.0
```
---

<a id="id-tanf"></a>
### `tanf`

_Description:_

---
Float version of `tan`.

Example:

```c
#include <math.h>
float r = tanf((float)M_PI / 4.0f); // r ~= 1.0f
```
---

<a id="id-tanh"></a>
### `tanh`

_Description:_

---
Returns the hyperbolic tangent of `x` as a `double`.

Example:

```c
#include <math.h>
double r = tanh(1.0); // r ~= 0.761594
```
---

<a id="id-tanhf"></a>
### `tanhf`

_Description:_

---
Float version of `tanh`.

Example:

```c
#include <math.h>
float r = tanhf(1.0f); // r ~= 0.761594f
```
---

<a id="id-tanhl"></a>
### `tanhl`

_Description:_

---
Long double version of `tanh`.

Example:

```c
#include <math.h>
long double r = tanhl(1.0L); // r ~= 0.761594L
```
---

<a id="id-tanl"></a>
### `tanl`

_Description:_

---
Long double version of `tan` (tangent of `x` in radians).

Example:

```c
#include <math.h>
long double r = tanl(M_PI_4); // r ~= 1.0L
```
---

<a id="id-tgamma"></a>
### `tgamma`

_Description:_

---
Returns the gamma function of `x` as `double` (Γ(x)). For positive integers,
Γ(n) == (n-1)!.

Example:

```c
#include <math.h>
double r = tgamma(6.0); // r == 120.0
```
---

<a id="id-tgammaf"></a>
### `tgammaf`

_Description:_

---
Float version of `tgamma`.

Example:

```c
#include <math.h>
float r = tgammaf(5.0f); // r == 24.0f
```
---

<a id="id-tgammal"></a>
### `tgammal`

_Description:_

---
Long double version of `tgamma`.

Example:

```c
#include <math.h>
long double r = tgammal(3.0L); // r == 2.0L
```
---

<a id="id-time"></a>
### `time`

_Description:_

---
Returns the current calendar time as a `time_t`. If `t` is not `NULL`, stores
the value in `*t`.

Example:

```c
#include <time.h>
time_t now = time(NULL); // now != (time_t)-1 on success
```
---

<a id="id-time_t"></a>
### `time_t`

_Description:_

---
Arithmetic type capable of representing calendar time values returned by `time`.

Example:

```c
#include <time.h>
time_t t = 0; // represents the Unix epoch (implementation-defined)
```
---

<a id="id-tmpfile"></a>
### `tmpfile`

_Description:_

---
Creates a temporary binary file opened for update ("wb+") that is automatically
deleted when closed or on program termination.

Example:

```c
#include <stdio.h>
FILE *fp = tmpfile();
// fp != NULL on success; file is temporary
```
---

<a id="id-tmpnam"></a>
### `tmpnam`

_Description:_

---
Generates a string that is a valid pathname for a temporary file. Not secure;
prefer `tmpfile` or `mkstemp` (POSIX).

Example:

```c
#include <stdio.h>
char name[L_tmpnam];
tmpnam(name); // name now holds a temporary filename
```
---

<a id="id-tolower"></a>
### `tolower`

_Description:_

---
Converts an `unsigned char` value to lowercase if it is an uppercase letter;
otherwise returns it unchanged.

Example:

```c
#include <ctype.h>
int r = tolower('G'); // r == 'g'
```
---

<a id="id-toupper"></a>
### `toupper`

_Description:_

---
Converts an `unsigned char` value to uppercase if it is a lowercase letter;
otherwise returns it unchanged.

Example:

```c
#include <ctype.h>
int r = toupper('b'); // r == 'B'
```
---

<a id="id-towctrans"></a>
### `towctrans`

_Description:_

---
Applies a wide-character mapping to `wint_t wc` using a `wctrans_t` descriptor
obtained by `wctrans("lower")`, `wctrans("upper")`, etc.

Example:

```c
#include <wctype.h>
wctrans_t tolower_map = wctrans("tolower");
wint_t r = towctrans(L'A', tolower_map); // r == L'a'
```
---

<a id="id-towlower"></a>
### `towlower`

_Description:_

---
Converts a wide character to lowercase according to the current locale.

Example:

```c
#include <wctype.h>
wint_t r = towlower(L'Ö'); // r is lowercase variant in locale if defined
```
---

<a id="id-towupper"></a>
### `towupper`

_Description:_

---
Converts a wide character to uppercase according to the current locale.

Example:

```c
#include <wctype.h>
wint_t r = towupper(L'ß'); // may map to L'ẞ' in locales that support it
```
---

<a id="id-trunc"></a>
### `trunc`

_Description:_

---
Truncates `x` to the integer value toward zero, returned in floating type.

Example:

```c
#include <math.h>
double r = trunc(-3.9); // r == -3.0
```
---

<a id="id-truncf"></a>
### `truncf`

_Description:_

---
Float version of `trunc`.

Example:

```c
#include <math.h>
float r = truncf(2.8f); // r == 2.0f
```
---

<a id="id-truncl"></a>
### `truncl`

_Description:_

---
Long double version of `trunc`.

Example:

```c
#include <math.h>
long double r = truncl(-1.2L); // r == -1.0L
```
---

<a id="id-ungetc"></a>
### `ungetc`

_Description:_

---
Pushes character `c` back onto the input stream so the next read returns it.
Only one character of pushback is guaranteed.

Example:

```c
#include <stdio.h>
FILE *fp = fopen("in.txt", "r");
int ch = fgetc(fp);
ungetc(ch, fp);
int again = fgetc(fp); // again == ch
```
---

<a id="id-ungetwc"></a>
### `ungetwc`

_Description:_

---
Pushes wide character `wc` back onto the input wide stream so the next wide
character read returns it.

Example:

```c
#include <wchar.h>
FILE *fp = fopen("in.txt", "r");
wint_t wc = fgetwc(fp);
ungetwc(wc, fp);
wint_t again = fgetwc(fp); // again == wc
```
---

<a id="id-va_arg"></a>
### `va_arg`

_Description:_

---
Retrieves the next argument from a `va_list` with the specified type.

Example:

```c
#include <stdarg.h>
int sum(int count, ...) {
    va_list ap; va_start(ap, count);
    int s = 0; for (int i = 0; i < count; i++) s += va_arg(ap, int);
    va_end(ap); return s;
}
```
---

<a id="id-va_copy"></a>
### `va_copy`

_Description:_

---
Copies a `va_list` so it can be iterated independently of the original.

Example:

```c
#include <stdarg.h>
void f(int n, ...) {
    va_list ap, ap2; va_start(ap, n); va_copy(ap2, ap);
    // use ap and ap2
    va_end(ap2); va_end(ap);
}
```
---

<a id="id-va_end"></a>
### `va_end`

_Description:_

---
Ends traversal of a `va_list` started by `va_start`. Must be called before
function returns.

Example:

```c
#include <stdarg.h>
void g(int n, ...) {
    va_list ap; va_start(ap, n);
    // ...
    va_end(ap);
}
```
---

<a id="id-va_list"></a>
### `va_list`

_Description:_

---
Type used to hold information needed by the macros `va_start`, `va_arg`, and
`va_end` for variable argument lists.

Example:

```c
#include <stdarg.h>
va_list ap; // declared for use with varargs
```
---

<a id="id-va_start"></a>
### `va_start`

_Description:_

---
Initializes a `va_list` for argument retrieval. Must be paired with `va_end`.

Example:

```c
#include <stdarg.h>
void f(int n, ...) {
    va_list ap; va_start(ap, n);
    // retrieve args via va_arg
    va_end(ap);
}
```
---

<a id="id-vfprintf"></a>
### `vfprintf`

_Description:_

---
Writes formatted output to a stream using a `va_list` of arguments.
Returns the number of characters written, or a negative value on error.

Example:

```c
#include <stdio.h>
#include <stdarg.h>

int logf(FILE *fp, const char *fmt, ...) {
    va_list ap; va_start(ap, fmt);
    int n = vfprintf(fp, fmt, ap);
    va_end(ap); return n;
}
// logf(stdout, "%s %d\n", "ok", 7); // prints: ok 7
```
---

<a id="id-vfscanf"></a>
### `vfscanf`

_Description:_

---
Reads formatted input from a stream using a `va_list` of arguments. Returns the
number of input items successfully matched and assigned.

Example:

```c
#include <stdio.h>
#include <stdarg.h>

int readf(FILE *fp, const char *fmt, ...) {
    va_list ap; va_start(ap, fmt);
    int n = vfscanf(fp, fmt, ap);
    va_end(ap); return n;
}
```
---

<a id="id-vprintf"></a>
### `vprintf`

_Description:_

---
Writes formatted output to `stdout` using a `va_list` of arguments.

Example:

```c
#include <stdio.h>
#include <stdarg.h>

void vlog(const char *fmt, ...) {
    va_list ap; va_start(ap, fmt);
    vprintf(fmt, ap);
    va_end(ap);
}
// vlog("%d %s\n", 1, "done"); // prints: 1 done
```
---

<a id="id-vscanf"></a>
### `vscanf`

_Description:_

---
Reads formatted input from `stdin` using a `va_list` of arguments. Returns the
number of items successfully assigned.

Example:

```c
#include <stdio.h>
#include <stdarg.h>

int vscan_wrapper(const char *fmt, ...) {
    va_list ap; va_start(ap, fmt);
    int n = vscanf(fmt, ap);
    va_end(ap); return n;
}
```
---

<a id="id-vsnprintf"></a>
### `vsnprintf`

_Description:_

---
Writes formatted output to a buffer using a `va_list`, up to `size` bytes
including the null terminator. Returns the number of characters that would have
been written excluding the terminator.

Example:

```c
#include <stdio.h>
#include <stdarg.h>

int vfmt(char *buf, size_t size, const char *fmt, ...) {
    va_list ap; va_start(ap, fmt);
    int n = vsnprintf(buf, size, fmt, ap);
    va_end(ap); return n;
}
```
---

<a id="id-vsprintf"></a>
### `vsprintf`

_Description:_

---
Writes formatted output to a string using a `va_list`. Returns the number of
characters written, excluding the null terminator.

Example:

```c
#include <stdio.h>
#include <stdarg.h>

int vfmt2(char *buf, const char *fmt, ...) {
    va_list ap; va_start(ap, fmt);
    int n = vsprintf(buf, fmt, ap);
    va_end(ap); return n;
}
```
---

<a id="id-vsscanf"></a>
### `vsscanf`

_Description:_

---
Reads formatted data from a string using a `va_list` of arguments.
Returns the number of items successfully assigned.

Example:

```c
#include <stdio.h>
#include <stdarg.h>

int vscan(const char *s, const char *fmt, ...) {
    va_list ap; va_start(ap, fmt);
    int n = vsscanf(s, fmt, ap);
    va_end(ap); return n;
}
```
---

<a id="id-vwprintf"></a>
### `vwprintf`

_Description:_

---
Writes formatted wide-character output to `stdout` using a `va_list`.

Example:

```c
#include <wchar.h>
#include <stdarg.h>

void wlog(const wchar_t *fmt, ...) {
    va_list ap; va_start(ap, fmt);
    vwprintf(fmt, ap);
    va_end(ap);
}
// wlog(L"%ls %d\n", L"ok", 3); // prints: ok 3
```
---

<a id="id-vwscanf"></a>
### `vwscanf`

_Description:_

---
Reads formatted wide-character input from `stdin` using a `va_list` of
arguments. Returns the number of items successfully assigned.

Example:

```c
#include <wchar.h>
#include <stdarg.h>

int vwscan(const wchar_t *fmt, ...) {
    va_list ap; va_start(ap, fmt);
    int n = vwscanf(fmt, ap);
    va_end(ap); return n;
}
```
---

<a id="id-wcrtomb"></a>
### `wcrtomb`

_Description:_

---
Converts a wide character to its multibyte sequence, storing it in `s` and
updating `mbstate_t *ps`. Returns the number of bytes written, or `(size_t)-1`
on encoding error.

Example:

```c
#include <wchar.h>
mbstate_t st = {0};
char mb[MB_CUR_MAX];
size_t n = wcrtomb(mb, L'A', &st); // n == 1, mb[0] == 'A'
```
---

<a id="id-wcscat"></a>
### `wcscat`

_Description:_

---
Appends the wide string `src` to the end of `dest` (including terminator).
`dest` must have enough space.

Example:

```c
#include <wchar.h>
wchar_t dest[16] = L"Hello";
wcscat(dest, L", ");
wcscat(dest, L"C");
// dest == L"Hello, C"
```
---

<a id="id-wcschr"></a>
### `wcschr`

_Description:_

---
Returns a pointer to the first occurrence of wide character `wc` in wide string
`ws`, or `NULL` if not found.

Example:

```c
#include <wchar.h>
const wchar_t *ws = L"abcdea";
const wchar_t *p = wcschr(ws, L'a'); // p == &ws[0]
```
---

<a id="id-wcscmp"></a>
### `wcscmp`

_Description:_

---
Lexicographically compares two wide strings. Returns <0, 0, >0 if `ws1` is less
than, equal to, or greater than `ws2`.

Example:

```c
#include <wchar.h>
int r = wcscmp(L"apple", L"banana"); // r < 0
```
---

<a id="id-wcscoll"></a>
### `wcscoll`

_Description:_

---
Compares two wide strings according to the current locale's collation order.
Returns <0, 0, >0 similar to `wcscmp`.

Example:

```c
#include <wchar.h>
#include <locale.h>
setlocale(LC_COLLATE, "C");
int r = wcscoll(L"a", L"b"); // r < 0 in "C" locale
```
---

<a id="id-wcscpy"></a>
### `wcscpy`

_Description:_

---
Copies the wide string `src` (including the terminating L'\0') to `dest`.

Example:

```c
#include <wchar.h>
wchar_t dest[8];
wcscpy(dest, L"hi");
// dest == L"hi"
```
---

<a id="id-wcscspn"></a>
### `wcscspn`

_Description:_

---
Returns the length of the initial segment of wide string `ws` consisting of
characters not in `reject`.

Example:

```c
#include <wchar.h>
size_t n = wcscspn(L"hello,world", L",!"); // n == 5
```
---

<a id="id-wcsftime"></a>
### `wcsftime`

_Description:_

---
Formats date and time from a `struct tm` into a wide string according to the
format string. Returns the number of wide characters written, or 0 if it does
not fit.

Example:

```c
#include <wchar.h>
#include <time.h>
wchar_t buf[32];
struct tm tm = { .tm_year = 123, .tm_mon = 6, .tm_mday = 4 };
size_t n = wcsftime(buf, 32, L"%Y-%m-%d", &tm);
// buf == L"2023-07-04", n == 10
```
---

<a id="id-wcslen"></a>
### `wcslen`

_Description:_

---
Returns the length of wide string `ws`, excluding the terminating null.

Example:

```c
#include <wchar.h>
size_t n = wcslen(L"hello"); // n == 5
```
---

<a id="id-wcsncat"></a>
### `wcsncat`

_Description:_

---
Appends at most `n` wide characters from `src` to `dest` and adds a terminating
null. `dest` must have enough space.

Example:

```c
#include <wchar.h>
wchar_t dest[8] = L"a";
wcsncat(dest, L"bcdef", 3);
// dest == L"abcd"
```
---

<a id="id-wcsncmp"></a>
### `wcsncmp`

_Description:_

---
Compares at most `n` wide characters of `ws1` and `ws2`. Returns <0, 0, >0
similar to `wcscmp`.

Example:

```c
#include <wchar.h>
int r = wcsncmp(L"apple", L"application", 5); // r == 0
```
---

<a id="id-wcsncpy"></a>
### `wcsncpy`

_Description:_

---
Copies at most `n` wide characters from `src` to `dest`. If `src` is shorter
than `n`, the remainder is padded with L'\0'. Does not L'\0'-terminate if `src`
is longer than or equal to `n`.

Example:

```c
#include <wchar.h>
wchar_t dest[5];
wcsncpy(dest, L"hello", 5);
// dest contains L"hello" (no extra terminator)
```
---

<a id="id-wcspbrk"></a>
### `wcspbrk`

_Description:_

---
Returns a pointer to the first wide character in `ws` that matches any wide
character in `accept`, or `NULL` if none are found.

Example:

```c
#include <wchar.h>
const wchar_t *ws = L"abcdxyz";
const wchar_t *p = wcspbrk(ws, L"xy"); // p == &ws[4]
```
---

<a id="id-wcsrchr"></a>
### `wcsrchr`

_Description:_

---
Returns a pointer to the last occurrence of wide character `wc` in wide string
`ws`, or `NULL` if not found.

Example:

```c
#include <wchar.h>
const wchar_t *ws = L"abca";
const wchar_t *p = wcsrchr(ws, L'a'); // p == &ws[3]
```
---

<a id="id-wcsrtombs"></a>
### `wcsrtombs`

_Description:_

---
Converts a wide-character string to a multibyte string, restarting from the
state pointed to by `ps`. Updates the source pointer. Returns the number of
bytes written (excluding terminator), or `(size_t)-1` on encoding error.

Example:

```c
#include <wchar.h>
mbstate_t st = {0};
const wchar_t *src = L"Hi";
char dst[8];
size_t n = wcsrtombs(dst, &src, sizeof(dst), &st); // n == 2
```
---

<a id="id-wcsspn"></a>
### `wcsspn`

_Description:_

---
Returns the length of the initial segment of wide string `ws` consisting only
of wide characters in `accept`.

Example:

```c
#include <wchar.h>
size_t n = wcsspn(L"abc123", L"abc"); // n == 3
```
---

<a id="id-wcsstr"></a>
### `wcsstr`

_Description:_

---
Finds the first occurrence of wide substring `needle` in wide string `haystack`.
Returns pointer to the beginning of the substring, or `NULL` if not found.

Example:

```c
#include <wchar.h>
const wchar_t *h = L"Hello, World!";
const wchar_t *p = wcsstr(h, L"World"); // p == h + 7
```
---

<a id="id-wcstod"></a>
### `wcstod`

_Description:_

---
Converts the initial part of wide string `nptr` to `double`. Stores the address
of the first unconverted wide character in `*endptr` if non-`NULL`.

Example:

```c
#include <wchar.h>
double x = wcstod(L"3.14π", NULL); // x == 3.14
```
---

<a id="id-wcstof"></a>
### `wcstof`

_Description:_

---
Converts the initial part of wide string `nptr` to `float`.

Example:

```c
#include <wchar.h>
float x = wcstof(L"2.5e1x", NULL); // x == 25.0f
```
---

<a id="id-wcstoimax"></a>
### `wcstoimax`

_Description:_

---
Converts wide string to `intmax_t` with the given base (0 autodetects). Stores
end pointer in `*endptr` if non-`NULL`.

Example:

```c
#include <wchar.h>
#include <inttypes.h>
intmax_t v = wcstoimax(L"-0x2A", NULL, 0); // v == -42
```
---

<a id="id-wcstok"></a>
### `wcstok`

_Description:_

---
Splits a wide string into tokens separated by any of the delimiter wide
characters. Uses a state pointer for re-entrant behavior.

Example:

```c
#include <wchar.h>
wchar_t s[] = L"a,b;c";
wchar_t *ctx;
wchar_t *tok = wcstok(s, L",;", &ctx); // tok == L"a"
tok = wcstok(NULL, L",;", &ctx);       // tok == L"b"
tok = wcstok(NULL, L",;", &ctx);       // tok == L"c"
```
---

<a id="id-wcstol"></a>
### `wcstol`

_Description:_

---
Converts wide string to `long int` with the given base (0 autodetects).

Example:

```c
#include <wchar.h>
long v = wcstol(L"1010", NULL, 2); // v == 10
```
---

<a id="id-wcstold"></a>
### `wcstold`

_Description:_

---
Converts the initial part of wide string `nptr` to `long double`.

Example:

```c
#include <wchar.h>
long double x = wcstold(L"1.25L", NULL); // x == 1.25L
```
---

<a id="id-wcstoll"></a>
### `wcstoll`

_Description:_

---
Converts wide string to `long long int` with the given base.

Example:

```c
#include <wchar.h>
long long v = wcstoll(L"-42", NULL, 10); // v == -42
```
---

<a id="id-wcstombs"></a>
### `wcstombs`

_Description:_

---
Converts a wide-character string to a multibyte string using the current
locale. Returns number of bytes written (excluding terminator), or `(size_t)-1`
on encoding error.

Example:

```c
#include <stdlib.h>
#include <wchar.h>
char mb[16];
size_t n = wcstombs(mb, L"Hi", sizeof(mb)); // n == 2
```
---

<a id="id-wcstoul"></a>
### `wcstoul`

_Description:_

---
Converts wide string to `unsigned long int` with the given base.

Example:

```c
#include <wchar.h>
unsigned long v = wcstoul(L"0xff", NULL, 0); // v == 255
```
---

<a id="id-wcstoull"></a>
### `wcstoull`

_Description:_

---
Converts wide string to `unsigned long long int` with the given base.

Example:

```c
#include <wchar.h>
unsigned long long v = wcstoull(L"077", NULL, 0); // v == 63 (octal)
```
---

<a id="id-wcstoumax"></a>
### `wcstoumax`

_Description:_

---
Converts wide string to `uintmax_t` with the given base.

Example:

```c
#include <wchar.h>
#include <inttypes.h>
uintmax_t v = wcstoumax(L"18446744073709551615", NULL, 10); // max 64-bit
```
---

<a id="id-wcsxfrm"></a>
### `wcsxfrm`

_Description:_

---
Transforms wide string `src` into a form suitable for locale-aware comparison
into `dest`. Returns length of transformed string.

Example:

```c
#include <wchar.h>
#include <locale.h>
setlocale(LC_COLLATE, "C");
wchar_t out[16];
size_t n = wcsxfrm(out, L"abc", 16); // n == 3, out == L"abc"
```
---

<a id="id-wctob"></a>
### `wctob`

_Description:_

---
Converts wide character `wc` to a single byte if representable in the current
locale; returns `EOF` otherwise.

Example:

```c
#include <wchar.h>
int c = wctob(L'A'); // c == 'A'
```
---

<a id="id-wctomb"></a>
### `wctomb`

_Description:_

---
Converts wide character `wc` to its multibyte sequence using the current
conversion state. Returns number of bytes written, or -1 on encoding error.

Example:

```c
#include <stdlib.h>
char mb[MB_CUR_MAX];
int n = wctomb(mb, L'A'); // n == 1, mb[0] == 'A'
```
---

<a id="id-wctrans"></a>
### `wctrans`

_Description:_

---
Returns a mapping descriptor for wide-character transformations, e.g.,
`wctrans("tolower")` or `wctrans("toupper")`.

Example:

```c
#include <wctype.h>
wctrans_t map = wctrans("toupper");
wint_t r = towctrans(L'a', map); // r == L'A'
```
---

<a id="id-wctype"></a>
### `wctype`

_Description:_

---
Returns a character class descriptor for `iswctype`, e.g., `wctype("digit")`.

Example:

```c
#include <wctype.h>
wctype_t cls = wctype("digit");
int r1 = iswctype(L'5', cls); // r1 != 0
int r2 = iswctype(L'A', cls); // r2 == 0
```
---

<a id="id-wcwidth"></a>
### `wcwidth`

_Description:_

---
Returns the number of column positions needed for wide character `wc`, or -1 if
`wc` is not printable (POSIX).

Example:

```c
#include <wchar.h>
int w = wcwidth(L'A'); // w == 1
```
---

<a id="id-wmemchr"></a>
### `wmemchr`

_Description:_

---
Searches the first `n` wide characters of the array `ws` for `wc`. Returns
pointer to the match or `NULL`.

Example:

```c
#include <wchar.h>
const wchar_t *s = L"hello";
const wchar_t *p = wmemchr(s, L'l', 5); // p == &s[2]
```
---

<a id="id-wmemcmp"></a>
### `wmemcmp`

_Description:_

---
Compares the first `n` wide characters of two arrays. Returns <0, 0, >0 if the
first is less than, equal to, or greater than the second.

Example:

```c
#include <wchar.h>
int r = wmemcmp(L"abc", L"abd", 3); // r < 0
```
---

<a id="id-wmemcpy"></a>
### `wmemcpy`

_Description:_

---
Copies `n` wide characters from source to destination. Regions must not overlap.

Example:

```c
#include <wchar.h>
wchar_t dst[4];
wmemcpy(dst, L"abc", 4); // copies L'a',L'b',L'c',L'\0'
```
---

<a id="id-wmemmove"></a>
### `wmemmove`

_Description:_

---
Copies `n` wide characters between arrays, safe for overlapping regions.

Example:

```c
#include <wchar.h>
wchar_t s[] = L"abcdef";
wmemmove(s + 2, s, 4); // s becomes L"ababcd"
```
---

<a id="id-wmemset"></a>
### `wmemset`

_Description:_

---
Fills the first `n` wide characters of the array with `wc`.

Example:

```c
#include <wchar.h>
wchar_t buf[5];
wmemset(buf, L'*', 4); buf[4] = L'\0';
// buf == L"****"
```
---

<a id="id-wprintf"></a>
### `wprintf`

_Description:_

---
Writes formatted wide-character output to `stdout`.

Example:

```c
#include <wchar.h>
int n = wprintf(L"%ls %d\n", L"hi", 7); // prints: hi 7\n; n == 5
```
---

<a id="id-wscanf"></a>
### `wscanf`

_Description:_

---
Reads formatted wide-character input from `stdin`. Returns the number of input
items successfully assigned.

Example:

```c
#include <wchar.h>
int x; wchar_t w[8];
// If user types: 42 test<Enter>
int n = wscanf(L"%d %7ls", &x, w);
// n == 2, x == 42, w == L"test"
```
---

<a id="id-thrd_create"></a>
### `thrd_create`

_Description:_

---
Creates a new thread executing `func(arg)` and stores the thread identifier in
`*thr`. Returns `thrd_success` on success.

Example:

```c
#include <threads.h>
#include <stdio.h>

int worker(void *arg) { printf("%s\n", (const char *)arg); return 0; }

thrd_t t;
int r = thrd_create(&t, worker, (void *)"hi"); // r == thrd_success
thrd_join(t, NULL);
```
---

<a id="id-thrd_current"></a>
### `thrd_current`

_Description:_

---
Returns the identifier of the calling thread.

Example:

```c
#include <threads.h>
thrd_t self = thrd_current();
```
---

<a id="id-thrd_detach"></a>
### `thrd_detach`

_Description:_

---
Detaches a thread so that its resources are released automatically on exit.

Example:

```c
#include <threads.h>
thrd_t t; /* created earlier */
int r = thrd_detach(t); // r == thrd_success
```
---

<a id="id-thrd_equal"></a>
### `thrd_equal`

_Description:_

---
Compares two thread identifiers for equality. Returns nonzero if equal.

Example:

```c
#include <threads.h>
thrd_t a = thrd_current();
int same = thrd_equal(a, thrd_current()); // same != 0
```
---

<a id="id-thrd_exit"></a>
### `thrd_exit`

_Description:_

---
Terminates the calling thread, making `res` available to `thrd_join`.

Example:

```c
#include <threads.h>
thrd_exit(0);
```
---

<a id="id-thrd_join"></a>
### `thrd_join`

_Description:_

---
Joins with a terminated thread and retrieves its exit code in `*res` if not
`NULL`. Returns `thrd_success` on success.

Example:

```c
#include <threads.h>
int res; thrd_t t; /* created earlier */
int r = thrd_join(t, &res); // r == thrd_success
```
---

<a id="id-thrd_sleep"></a>
### `thrd_sleep`

_Description:_

---
Sleeps for the specified `timespec` duration, optionally returning remaining
time in `rem`. Returns 0 if the requested time has elapsed.

Example:

```c
#include <threads.h>
struct timespec ts = { .tv_sec = 0, .tv_nsec = 1000000 }; // 1ms
thrd_sleep(&ts, NULL);
```
---

<a id="id-thrd_yield"></a>
### `thrd_yield`

_Description:_

---
Hints to the scheduler to yield execution to another thread.

Example:

```c
#include <threads.h>
thrd_yield();
```
---

<a id="id-thrd_t"></a>
### `thrd_t`

_Description:_

---
Type of a thread identifier.

Example:

```c
#include <threads.h>
thrd_t t;
```
---

<a id="id-thrd_start_t"></a>
### `thrd_start_t`

_Description:_

---
Function pointer type for thread start routines: `int (*)(void *)`.

Example:

```c
#include <threads.h>
int fn(void *p) { return 0; }
thrd_start_t start = fn;
```
---

<a id="id-thrd_success"></a>
### `thrd_success`

_Description:_

---
Return value indicating a successful threads operation (typically 0).

Example:

```c
#include <threads.h>
int r = thrd_success; // r == 0
```
---

<a id="id-thrd_timedout"></a>
### `thrd_timedout`

_Description:_

---
Return value indicating a timed-out threads operation.

Example:

```c
#include <threads.h>
int r = thrd_timedout;
```
---

<a id="id-thrd_busy"></a>
### `thrd_busy`

_Description:_

---
Return value indicating the resource is busy in a threads operation.

Example:

```c
#include <threads.h>
int r = thrd_busy;
```
---

<a id="id-thrd_error"></a>
### `thrd_error`

_Description:_

---
Return value indicating an error in a threads operation.

Example:

```c
#include <threads.h>
int r = thrd_error;
```
---

<a id="id-thrd_nomem"></a>
### `thrd_nomem`

_Description:_

---
Return value indicating memory allocation failure in a threads operation.

Example:

```c
#include <threads.h>
int r = thrd_nomem;
```
---

<a id="id-mtx_init"></a>
### `mtx_init`

_Description:_

---
Initializes a mutex `*mtx` with the given type flags (`mtx_plain`,
`mtx_timed`, `mtx_recursive`). Returns `thrd_success` on success.

Example:

```c
#include <threads.h>
mtx_t m;
int r = mtx_init(&m, mtx_plain); // r == thrd_success
```
---

<a id="id-mtx_destroy"></a>
### `mtx_destroy`

_Description:_

---
Destroys a mutex and releases associated resources.

Example:

```c
#include <threads.h>
mtx_t m; /* initialized earlier */
mtx_destroy(&m);
```
---

<a id="id-mtx_lock"></a>
### `mtx_lock`

_Description:_

---
Locks a mutex, blocking until it becomes available. Returns `thrd_success` on
success.

Example:

```c
#include <threads.h>
mtx_t m; /* initialized */
mtx_lock(&m);
// critical section
mtx_unlock(&m);
```
---

<a id="id-mtx_trylock"></a>
### `mtx_trylock`

_Description:_

---
Attempts to lock a mutex without blocking. Returns `thrd_success` if the lock
was acquired, `thrd_busy` if already locked.

Example:

```c
#include <threads.h>
mtx_t m; /* initialized */
int r = mtx_trylock(&m);
```
---

<a id="id-mtx_timedlock"></a>
### `mtx_timedlock`

_Description:_

---
Attempts to lock a mutex until the specified absolute time. Returns
`thrd_success` on success, `thrd_timedout` if the time expires.

Example:

```c
#include <threads.h>
struct timespec ts = { .tv_sec = 1, .tv_nsec = 0 };
mtx_t m; /* initialized */
int r = mtx_timedlock(&m, &ts);
```
---

<a id="id-mtx_unlock"></a>
### `mtx_unlock`

_Description:_

---
Unlocks a mutex previously locked by the calling thread.

Example:

```c
#include <threads.h>
mtx_t m; /* locked earlier */
mtx_unlock(&m);
```
---

<a id="id-mtx_t"></a>
### `mtx_t`

_Description:_

---
Type representing a mutex object.

Example:

```c
#include <threads.h>
mtx_t m;
```
---

<a id="id-mtx_plain"></a>
### `mtx_plain`

_Description:_

---
Mutex type flag for a plain (non-recursive, possibly non-timed) mutex.

Example:

```c
#include <threads.h>
int flags = mtx_plain;
```
---

<a id="id-mtx_timed"></a>
### `mtx_timed`

_Description:_

---
Mutex type flag indicating support for timed locking (`mtx_timedlock`).

Example:

```c
#include <threads.h>
int flags = mtx_timed;
```
---

<a id="id-mtx_recursive"></a>
### `mtx_recursive`

_Description:_

---
Mutex type flag indicating a recursive mutex.

Example:

```c
#include <threads.h>
int flags = mtx_recursive;
```
---

<a id="id-cnd_init"></a>
### `cnd_init`

_Description:_

---
Initializes a condition variable. Returns `thrd_success` on success.

Example:

```c
#include <threads.h>
cnd_t cv; int r = cnd_init(&cv); // r == thrd_success
```
---

<a id="id-cnd_destroy"></a>
### `cnd_destroy`

_Description:_

---
Destroys a condition variable and releases resources.

Example:

```c
#include <threads.h>
cnd_t cv; /* initialized */
cnd_destroy(&cv);
```
---

<a id="id-cnd_signal"></a>
### `cnd_signal`

_Description:_

---
Unblocks one thread waiting on the condition variable.

Example:

```c
#include <threads.h>
cnd_t cv; /* initialized */
cnd_signal(&cv);
```
---

<a id="id-cnd_broadcast"></a>
### `cnd_broadcast`

_Description:_

---
Unblocks all threads waiting on the condition variable.

Example:

```c
#include <threads.h>
cnd_t cv; /* initialized */
cnd_broadcast(&cv);
```
---

<a id="id-cnd_wait"></a>
### `cnd_wait`

_Description:_

---
Atomically releases the mutex and blocks until signaled, then re-acquires the
mutex before returning.

Example:

```c
#include <threads.h>
cnd_t cv; mtx_t m; /* initialized */
mtx_lock(&m);
cnd_wait(&cv, &m);
mtx_unlock(&m);
```
---

<a id="id-cnd_timedwait"></a>
### `cnd_timedwait`

_Description:_

---
Like `cnd_wait` but times out at the specified absolute time. Returns
`thrd_success` on success, `thrd_timedout` if timed out.

Example:

```c
#include <threads.h>
struct timespec ts = { .tv_sec = 1, .tv_nsec = 0 };
cnd_t cv; mtx_t m; /* initialized */
mtx_lock(&m);
int r = cnd_timedwait(&cv, &m, &ts);
mtx_unlock(&m);
```
---

<a id="id-cnd_t"></a>
### `cnd_t`

_Description:_

---
Type representing a condition variable.

Example:

```c
#include <threads.h>
cnd_t cv;
```
---

<a id="id-tss_create"></a>
### `tss_create`

_Description:_

---
Creates a thread-specific storage (TLS) key, with optional destructor. Returns
`thrd_success` on success.

Example:

```c
#include <threads.h>
tss_t key;
int r = tss_create(&key, NULL); // r == thrd_success
```
---

<a id="id-tss_delete"></a>
### `tss_delete`

_Description:_

---
Deletes a TLS key created by `tss_create`.

Example:

```c
#include <threads.h>
tss_t key; /* created earlier */
tss_delete(key);
```
---

<a id="id-tss_get"></a>
### `tss_get`

_Description:_

---
Retrieves the thread-specific value associated with the TLS key.

Example:

```c
#include <threads.h>
tss_t key; /* created earlier */
void *p = tss_get(key);
```
---

<a id="id-tss_set"></a>
### `tss_set`

_Description:_

---
Sets the thread-specific value for the TLS key. Returns `thrd_success` on success.

Example:

```c
#include <threads.h>
tss_t key; /* created earlier */
int r = tss_set(key, (void*)0x1234);
```
---

<a id="id-tss_t"></a>
### `tss_t`

_Description:_

---
Type representing a TLS key.

Example:

```c
#include <threads.h>
tss_t key;
```
---

<a id="id-once_flag"></a>
### `once_flag`

_Description:_

---
Flag object used with `call_once` to ensure a function is executed only once.
Must be initialized with `ONCE_FLAG_INIT`.

Example:

```c
#include <threads.h>
once_flag flag = ONCE_FLAG_INIT;
```
---

<a id="id-call_once"></a>
### `call_once`

_Description:_

---
Executes the specified function exactly once across all threads using an
associated `once_flag`.

Example:

```c
#include <threads.h>
void init(void) { /* one-time init */ }
once_flag flag = ONCE_FLAG_INIT;
call_once(&flag, init);
```
---

<a id="id-_i"></a>
### `_I`

_Description:_

---
Imaginary unit for `_Complex` types in C when `<complex.h>` is included.
Equivalent to `I`.

Example:

```c
#include <complex.h>
double complex z = 1.0 + 2.0*_I; // z == 1 + 2i
```
---

<a id="id-_complex_i"></a>
### `_Complex_I`

_Description:_

---
Macro expanding to the imaginary unit of type `const float _Complex` promoted as
needed. Equivalent to `I` per `<complex.h>`.

Example:

```c
#include <complex.h>
double complex z = 3.0 + 4.0*_Complex_I; // z == 3 + 4i
```
---

<a id="id-i"></a>
### `I`

_Description:_

---
Standard macro for the imaginary unit `i` from `<complex.h>`.

Example:

```c
#include <complex.h>
double complex z = 0.0 + 1.0*I; // z == i
```
---

<a id="id-fe_divbyzero"></a>
### `FE_DIVBYZERO`

_Description:_

---
Floating-point exception macro indicating division by zero status/enable bit in
`<fenv.h>`.

Example:

```c
#include <fenv.h>
int m = FE_DIVBYZERO; // use with fetestexcept(FE_DIVBYZERO)
```
---

<a id="id-fe_inexact"></a>
### `FE_INEXACT`

_Description:_

---
Floating-point exception macro indicating inexact result status/enable bit in
`<fenv.h>`.

Example:

```c
#include <fenv.h>
int m = FE_INEXACT; // use with fetestexcept(FE_INEXACT)
```
---

<a id="id-fe_invalid"></a>
### `FE_INVALID`

_Description:_

---
Floating-point exception macro indicating invalid operation status/enable bit in
`<fenv.h>`.

Example:

```c
#include <fenv.h>
int m = FE_INVALID; // use with fetestexcept(FE_INVALID)
```
---

<a id="id-fe_overflow"></a>
### `FE_OVERFLOW`

_Description:_

---
Floating-point exception macro indicating overflow status/enable bit in
`<fenv.h>`.

Example:

```c
#include <fenv.h>
int m = FE_OVERFLOW; // use with fetestexcept(FE_OVERFLOW)
```
---

<a id="id-fe_underflow"></a>
### `FE_UNDERFLOW`

_Description:_

---
Floating-point exception macro indicating underflow status/enable bit in
`<fenv.h>`.

Example:

```c
#include <fenv.h>
int m = FE_UNDERFLOW; // use with fetestexcept(FE_UNDERFLOW)
```
---

<a id="id-fe_all_except"></a>
### `FE_ALL_EXCEPT`

_Description:_

---
Bitwise OR of all supported floating-point exception flags in `<fenv.h>`.
Useful with `feclearexcept`, `fetestexcept`.

Example:

```c
#include <fenv.h>
feclearexcept(FE_ALL_EXCEPT);
int raised = fetestexcept(FE_ALL_EXCEPT); // raised == 0
```
---

<a id="id-fe_downward"></a>
### `FE_DOWNWARD`

_Description:_

---
Rounding direction macro in `<fenv.h>`: round toward −∞.

Example:

```c
#include <fenv.h>
fesetround(FE_DOWNWARD);
```
---

<a id="id-fe_tonearest"></a>
### `FE_TONEAREST`

_Description:_

---
Rounding direction macro in `<fenv.h>`: round to nearest, ties to even.

Example:

```c
#include <fenv.h>
fesetround(FE_TONEAREST);
```
---

<a id="id-fe_towardzero"></a>
### `FE_TOWARDZERO`

_Description:_

---
Rounding direction macro in `<fenv.h>`: round toward zero (truncate).

Example:

```c
#include <fenv.h>
fesetround(FE_TOWARDZERO);
```
---

<a id="id-fe_upward"></a>
### `FE_UPWARD`

_Description:_

---
Rounding direction macro in `<fenv.h>`: round toward +∞.

Example:

```c
#include <fenv.h>
fesetround(FE_UPWARD);
```
---

<a id="id-prid8"></a>
### `PRId8`

_Description:_

---
`printf` format macro for signed 8-bit integer (`int8_t`): use with `%`.

Example:

```c
#include <inttypes.h>
int8_t v = -5;
printf("%" PRId8 "\n", v); // prints: -5
```
---

<a id="id-prid16"></a>
### `PRId16`

_Description:_

---
`printf` format macro for signed 16-bit integer (`int16_t`).

Example:

```c
#include <inttypes.h>
int16_t v = -1234;
printf("%" PRId16 "\n", v); // prints: -1234
```
---

<a id="id-prid32"></a>
### `PRId32`

_Description:_

---
`printf` format macro for signed 32-bit integer (`int32_t`).

Example:

```c
#include <inttypes.h>
int32_t v = -42;
printf("%" PRId32 "\n", v); // prints: -42
```
---

<a id="id-prid64"></a>
### `PRId64`

_Description:_

---
`printf` format macro for signed 64-bit integer (`int64_t`).

Example:

```c
#include <inttypes.h>
int64_t v = -9223372036854775807LL;
printf("%" PRId64 "\n", v);
```
---

<a id="id-prii8"></a>
### `PRIi8`

_Description:_

---
`printf` format macro for signed 8-bit integer (`int8_t`) in `i` style.

Example:

```c
#include <inttypes.h>
int8_t v = -5;
printf("%" PRIi8 "\n", v); // prints: -5
```
---

<a id="id-prii16"></a>
### `PRIi16`

_Description:_

---
`printf` format macro for signed 16-bit integer (`int16_t`) in `i` style.

Example:

```c
#include <inttypes.h>
int16_t v = -1234;
printf("%" PRIi16 "\n", v);
```
---

<a id="id-prii32"></a>
### `PRIi32`

_Description:_

---
`printf` format macro for signed 32-bit integer (`int32_t`) in `i` style.

Example:

```c
#include <inttypes.h>
int32_t v = -42;
printf("%" PRIi32 "\n", v);
```
---

<a id="id-prii64"></a>
### `PRIi64`

_Description:_

---
`printf` format macro for signed 64-bit integer (`int64_t`) in `i` style.

Example:

```c
#include <inttypes.h>
int64_t v = -42;
printf("%" PRIi64 "\n", v);
```
---

<a id="id-prio8"></a>
### `PRIo8`

_Description:_

---
`printf` format macro for unsigned 8-bit integer in octal (`uint8_t`).

Example:

```c
#include <inttypes.h>
uint8_t v = 63;
printf("%" PRIo8 "\n", v); // prints: 77
```
---

<a id="id-prio16"></a>
### `PRIo16`

_Description:_

---
`printf` format macro for unsigned 16-bit integer in octal (`uint16_t`).

Example:

```c
#include <inttypes.h>
uint16_t v = 511;
printf("%" PRIo16 "\n", v); // prints: 777
```
---

<a id="id-prio32"></a>
### `PRIo32`

_Description:_

---
`printf` format macro for unsigned 32-bit integer in octal (`uint32_t`).

Example:

```c
#include <inttypes.h>
uint32_t v = 8;
printf("%" PRIo32 "\n", v); // prints: 10
```
---

<a id="id-prio64"></a>
### `PRIo64`

_Description:_

---
`printf` format macro for unsigned 64-bit integer in octal (`uint64_t`).

Example:

```c
#include <inttypes.h>
uint64_t v = 64;
printf("%" PRIo64 "\n", v); // prints: 100
```
---

<a id="id-priu8"></a>
### `PRIu8`

_Description:_

---
`printf` format macro for unsigned 8-bit integer (`uint8_t`).

Example:

```c
#include <inttypes.h>
uint8_t v = 200;
printf("%" PRIu8 "\n", v); // prints: 200
```
---

<a id="id-priu16"></a>
### `PRIu16`

_Description:_

---
`printf` format macro for unsigned 16-bit integer (`uint16_t`).

Example:

```c
#include <inttypes.h>
uint16_t v = 65535;
printf("%" PRIu16 "\n", v); // prints: 65535
```
---

<a id="id-priu32"></a>
### `PRIu32`

_Description:_

---
`printf` format macro for unsigned 32-bit integer (`uint32_t`).

Example:

```c
#include <inttypes.h>
uint32_t v = 4294967295u;
printf("%" PRIu32 "\n", v);
```
---

<a id="id-priu64"></a>
### `PRIu64`

_Description:_

---
`printf` format macro for unsigned 64-bit integer (`uint64_t`).

Example:

```c
#include <inttypes.h>
uint64_t v = 18446744073709551615ull;
printf("%" PRIu64 "\n", v);
```
---

<a id="id-prix8"></a>
### `PRIx8`

_Description:_

---
`printf` format macro for unsigned 8-bit integer in lowercase hex.

Example:

```c
#include <inttypes.h>
uint8_t v = 255;
printf("%" PRIx8 "\n", v); // prints: ff
```
---

<a id="id-prix16"></a>
### `PRIx16`

_Description:_

---
`printf` format macro for unsigned 16-bit integer in lowercase hex.

Example:

```c
#include <inttypes.h>
uint16_t v = 48879;
printf("%" PRIx16 "\n", v); // prints: beef
```
---

<a id="id-prix32"></a>
### `PRIx32`

_Description:_

---
`printf` format macro for unsigned 32-bit integer in lowercase hex.

Example:

```c
#include <inttypes.h>
uint32_t v = 305419896u;
printf("%" PRIx32 "\n", v); // prints: 12345678
```
---

<a id="id-prix64"></a>
### `PRIx64`

_Description:_

---
`printf` format macro for unsigned 64-bit integer in lowercase hex.

Example:

```c
#include <inttypes.h>
uint64_t v = 0xFFFFFFFFFFFFFFFFull;
printf("%" PRIx64 "\n", v); // prints: ffffffffffffffff
```
---

<a id="id-prix8"></a>
### `PRIX8`

_Description:_

---
`printf` format macro for unsigned 8-bit integer in uppercase hex.

Example:

```c
#include <inttypes.h>
uint8_t v = 255;
printf("%" PRIX8 "\n", v); // prints: FF
```
---

<a id="id-prix16"></a>
### `PRIX16`

_Description:_

---
`printf` format macro for unsigned 16-bit integer in uppercase hex.

Example:

```c
#include <inttypes.h>
uint16_t v = 48879;
printf("%" PRIX16 "\n", v); // prints: BEEF
```
---

<a id="id-prix32"></a>
### `PRIX32`

_Description:_

---
`printf` format macro for unsigned 32-bit integer in uppercase hex.

Example:

```c
#include <inttypes.h>
uint32_t v = 305419896u;
printf("%" PRIX32 "\n", v); // prints: 12345678 (uppercase letters if any)
```
---

<a id="id-prix64"></a>
### `PRIX64`

_Description:_

---
`printf` format macro for unsigned 64-bit integer in uppercase hex.

Example:

```c
#include <inttypes.h>
uint64_t v = 0xABCDEF1234567890ull;
printf("%" PRIX64 "\n", v); // prints: ABCDEF1234567890
```
---

<a id="id-scnd8"></a>
### `SCNd8`

_Description:_

---
`scanf` format macro to read a signed 8-bit integer (`int8_t`).

Example:

```c
#include <inttypes.h>
int8_t v; sscanf("-5", "%" SCNd8, &v); // v == -5
```
---

<a id="id-scnd16"></a>
### `SCNd16`

_Description:_

---
`scanf` format macro to read a signed 16-bit integer (`int16_t`).

Example:

```c
#include <inttypes.h>
int16_t v; sscanf("-1234", "%" SCNd16, &v); // v == -1234
```
---

<a id="id-scnd32"></a>
### `SCNd32`

_Description:_

---
`scanf` format macro to read a signed 32-bit integer (`int32_t`).

Example:

```c
#include <inttypes.h>
int32_t v; sscanf("-42", "%" SCNd32, &v); // v == -42
```
---

<a id="id-scnd64"></a>
### `SCNd64`

_Description:_

---
`scanf` format macro to read a signed 64-bit integer (`int64_t`).

Example:

```c
#include <inttypes.h>
int64_t v; sscanf("-9223372036854775807", "%" SCNd64, &v);
```
---

<a id="id-scni8"></a>
### `SCNi8`

_Description:_

---
`scanf` format macro to read a signed 8-bit integer (`int8_t`) in `i` style
(base-detecting).

Example:

```c
#include <inttypes.h>
int8_t v; sscanf("-5", "%" SCNi8, &v); // v == -5
```
---

<a id="id-scni16"></a>
### `SCNi16`

_Description:_

---
`scanf` format macro to read a signed 16-bit integer (`int16_t`) in `i` style.

Example:

```c
#include <inttypes.h>
int16_t v; sscanf("-1234", "%" SCNi16, &v);
```
---

<a id="id-scni32"></a>
### `SCNi32`

_Description:_

---
`scanf` format macro to read a signed 32-bit integer (`int32_t`) in `i` style.

Example:

```c
#include <inttypes.h>
int32_t v; sscanf("-42", "%" SCNi32, &v);
```
---

<a id="id-scni64"></a>
### `SCNi64`

_Description:_

---
`scanf` format macro to read a signed 64-bit integer (`int64_t`) in `i` style.

Example:

```c
#include <inttypes.h>
int64_t v; sscanf("-42", "%" SCNi64, &v);
```
---

<a id="id-scno8"></a>
### `SCNo8`

_Description:_

---
`scanf` format macro to read an unsigned 8-bit integer in octal (`uint8_t`).

Example:

```c
#include <inttypes.h>
uint8_t v; sscanf("77", "%" SCNo8, &v); // v == 63
```
---

<a id="id-scno16"></a>
### `SCNo16`

_Description:_

---
`scanf` format macro to read an unsigned 16-bit integer in octal (`uint16_t`).

Example:

```c
#include <inttypes.h>
uint16_t v; sscanf("777", "%" SCNo16, &v); // v == 511
```
---

<a id="id-scno32"></a>
### `SCNo32`

_Description:_

---
`scanf` format macro to read an unsigned 32-bit integer in octal (`uint32_t`).

Example:

```c
#include <inttypes.h>
uint32_t v; sscanf("10", "%" SCNo32, &v); // v == 8
```
---

<a id="id-scno64"></a>
### `SCNo64`

_Description:_

---
`scanf` format macro to read an unsigned 64-bit integer in octal (`uint64_t`).

Example:

```c
#include <inttypes.h>
uint64_t v; sscanf("100", "%" SCNo64, &v); // v == 64
```
---

<a id="id-scnu8"></a>
### `SCNu8`

_Description:_

---
`scanf` format macro to read an unsigned 8-bit integer (`uint8_t`).

Example:

```c
#include <inttypes.h>
uint8_t v; sscanf("200", "%" SCNu8, &v); // v == 200
```
---

<a id="id-scnu16"></a>
### `SCNu16`

_Description:_

---
`scanf` format macro to read an unsigned 16-bit integer (`uint16_t`).

Example:

```c
#include <inttypes.h>
uint16_t v; sscanf("65535", "%" SCNu16, &v); // v == 65535
```
---

<a id="id-scnu32"></a>
### `SCNu32`

_Description:_

---
`scanf` format macro to read an unsigned 32-bit integer (`uint32_t`).

Example:

```c
#include <inttypes.h>
uint32_t v; sscanf("4294967295", "%" SCNu32, &v);
```
---

<a id="id-scnu64"></a>
### `SCNu64`

_Description:_

---
`scanf` format macro to read an unsigned 64-bit integer (`uint64_t`).

Example:

```c
#include <inttypes.h>
uint64_t v; sscanf("18446744073709551615", "%" SCNu64, &v);
```
---

<a id="id-scnx8"></a>
### `SCNx8`

_Description:_

---
`scanf` format macro to read an unsigned 8-bit integer in hex (`uint8_t`).

Example:

```c
#include <inttypes.h>
uint8_t v; sscanf("ff", "%" SCNx8, &v); // v == 255
```
---

<a id="id-scnx16"></a>
### `SCNx16`

_Description:_

---
`scanf` format macro to read an unsigned 16-bit integer in hex (`uint16_t`).

Example:

```c
#include <inttypes.h>
uint16_t v; sscanf("BEEF", "%" SCNx16, &v); // v == 48879
```
---

<a id="id-scnx32"></a>
### `SCNx32`

_Description:_

---
`scanf` format macro to read an unsigned 32-bit integer in hex (`uint32_t`).

Example:

```c
#include <inttypes.h>
uint32_t v; sscanf("12345678", "%" SCNx32, &v); // v == 0x12345678
```
---

<a id="id-scnx64"></a>
### `SCNx64`

_Description:_

---
`scanf` format macro to read an unsigned 64-bit integer in hex (`uint64_t`).

Example:

```c
#include <inttypes.h>
uint64_t v; sscanf("ABCDEF1234567890", "%" SCNx64, &v); // v == 0xABCDEF1234567890
```
---

<a id="id-edom"></a>
### `EDOM`

_Description:_

---
Mathematics argument out of domain error macro for `errno` (e.g., `acos(2)`).

Example:

```c
#include <math.h>
#include <errno.h>
errno = 0; acos(2.0); int e = errno; // e may be set to EDOM
```
---

<a id="id-erange"></a>
### `ERANGE`

_Description:_

---
Range error macro for `errno` (e.g., overflow/underflow such as `strtod` huge
values).

Example:

```c
#include <stdlib.h>
#include <errno.h>
errno = 0; strtod("1e5000", NULL); int e = errno; // e may be ERANGE
```
---

<a id="id-eilseq"></a>
### `EILSEQ`

_Description:_

---
Illegal byte sequence macro for `errno` (e.g., invalid multibyte sequence).

Example:

```c
#include <stdlib.h>
#include <errno.h>
errno = 0; mbtowc(NULL, "\xff", 1); int e = errno; // e may be EILSEQ
```
---

<a id="id-errno"></a>
### `errno`

_Description:_

---
Thread-local integer lvalue set by library functions on error to indicate the
error code.

Example:

```c
#include <stdio.h>
#include <errno.h>
FILE *f = fopen("/nope", "r");
if (!f) { int e = errno; /* use e */ }
```
---

<a id="id-char_bit"></a>
### `CHAR_BIT`

_Description:_

---
Number of bits in a byte for type `char` (commonly 8).

Example:

```c
#include <limits.h>
int n = CHAR_BIT; // e.g., 8
```
---

<a id="id-schar_min"></a>
### `SCHAR_MIN`

_Description:_

---
Minimum value for type `signed char`.

Example:

```c
#include <limits.h>
int m = SCHAR_MIN; // typically -128
```
---

<a id="id-schar_max"></a>
### `SCHAR_MAX`

_Description:_

---
Maximum value for type `signed char`.

Example:

```c
#include <limits.h>
int m = SCHAR_MAX; // typically 127
```
---

<a id="id-uchar_max"></a>
### `UCHAR_MAX`

_Description:_

---
Maximum value for type `unsigned char`.

Example:

```c
#include <limits.h>
int m = UCHAR_MAX; // typically 255
```
---

<a id="id-char_min"></a>
### `CHAR_MIN`

_Description:_

---
Minimum value for type `char` (either `SCHAR_MIN` or 0 depending on signedness
of `char`).

Example:

```c
#include <limits.h>
int m = CHAR_MIN; // implementation-defined
```
---

<a id="id-char_max"></a>
### `CHAR_MAX`

_Description:_

---
Maximum value for type `char` (either `SCHAR_MAX` or `UCHAR_MAX`).

Example:

```c
#include <limits.h>
int m = CHAR_MAX; // implementation-defined
```
---

<a id="id-mb_len_max"></a>
### `MB_LEN_MAX`

_Description:_

---
Maximum number of bytes in a multibyte character for the current locale.

Example:

```c
#include <limits.h>
int n = MB_LEN_MAX;
```
---

<a id="id-shrt_min"></a>
### `SHRT_MIN`

_Description:_

---
Minimum value for type `short int`.

Example:

```c
#include <limits.h>
int m = SHRT_MIN; // typically -32768
```
---

<a id="id-shrt_max"></a>
### `SHRT_MAX`

_Description:_

---
Maximum value for type `short int`.

Example:

```c
#include <limits.h>
int m = SHRT_MAX; // typically 32767
```
---

<a id="id-ushrt_max"></a>
### `USHRT_MAX`

_Description:_

---
Maximum value for type `unsigned short int`.

Example:

```c
#include <limits.h>
int m = USHRT_MAX; // typically 65535
```
---

<a id="id-int_min"></a>
### `INT_MIN`

_Description:_

---
Minimum value for type `int`.

Example:

```c
#include <limits.h>
int m = INT_MIN; // e.g., -2147483648 on 32-bit int
```
---

<a id="id-int_max"></a>
### `INT_MAX`

_Description:_

---
Maximum value for type `int`.

Example:

```c
#include <limits.h>
int m = INT_MAX; // e.g., 2147483647 on 32-bit int
```
---

<a id="id-uint_max"></a>
### `UINT_MAX`

_Description:_

---
Maximum value for type `unsigned int`.

Example:

```c
#include <limits.h>
unsigned int m = UINT_MAX; // e.g., 4294967295u on 32-bit
```
---

<a id="id-long_min"></a>
### `LONG_MIN`

_Description:_

---
Minimum value for type `long`.

Example:

```c
#include <limits.h>
long m = LONG_MIN; // platform-dependent (e.g., -9223372036854775808 on LP64)
```
---

<a id="id-long_max"></a>
### `LONG_MAX`

_Description:_

---
Maximum value for type `long`.

Example:

```c
#include <limits.h>
long m = LONG_MAX; // platform-dependent (e.g., 9223372036854775807 on LP64)
```
---

<a id="id-ulong_max"></a>
### `ULONG_MAX`

_Description:_

---
Maximum value for type `unsigned long`.

Example:

```c
#include <limits.h>
unsigned long m = ULONG_MAX; // e.g., 18446744073709551615ul on LP64
```
---

<a id="id-llong_min"></a>
### `LLONG_MIN`

_Description:_

---
Minimum value for type `long long`.

Example:

```c
#include <limits.h>
long long m = LLONG_MIN; // -9223372036854775808
```
---

<a id="id-llong_max"></a>
### `LLONG_MAX`

_Description:_

---
Maximum value for type `long long`.

Example:

```c
#include <limits.h>
long long m = LLONG_MAX; // 9223372036854775807
```
---

<a id="id-ullong_max"></a>
### `ULLONG_MAX`

_Description:_

---
Maximum value for type `unsigned long long`.

Example:

```c
#include <limits.h>
unsigned long long m = ULLONG_MAX; // 18446744073709551615ull
```
---

<a id="id-flt_radix"></a>
### `FLT_RADIX`

_Description:_

---
Radix (base) of the exponent representation for all floating types (commonly 2).

Example:

```c
#include <float.h>
int r = FLT_RADIX; // typically 2
```
---

<a id="id-flt_true_min"></a>
### `FLT_TRUE_MIN`

_Description:_

---
Minimum positive normalized or subnormal value of type `float` (IEEE-754 true
minimum subnormal).

Example:

```c
#include <float.h>
float x = FLT_TRUE_MIN; // smallest positive float
```
---

<a id="id-flt_min"></a>
### `FLT_MIN`

_Description:_

---
Minimum positive normalized value of type `float`.

Example:

```c
#include <float.h>
float x = FLT_MIN; // ~1.175494e-38 (IEEE-754)
```
---

<a id="id-flt_max"></a>
### `FLT_MAX`

_Description:_

---
Maximum finite value of type `float`.

Example:

```c
#include <float.h>
float x = FLT_MAX; // ~3.402823e+38
```
---

<a id="id-flt_epsilon"></a>
### `FLT_EPSILON`

_Description:_

---
Difference between 1 and the least `float` greater than 1 (machine epsilon for
float).

Example:

```c
#include <float.h>
float e = FLT_EPSILON; // ~1.192093e-07
```
---

<a id="id-dbl_true_min"></a>
### `DBL_TRUE_MIN`

_Description:_

---
Minimum positive subnormal `double` value (IEEE-754 true minimum).

Example:

```c
#include <float.h>
double x = DBL_TRUE_MIN; // ~4.940656e-324
```
---

<a id="id-dbl_min"></a>
### `DBL_MIN`

_Description:_

---
Minimum positive normalized `double` value.

Example:

```c
#include <float.h>
double x = DBL_MIN; // ~2.225074e-308
```
---

<a id="id-dbl_max"></a>
### `DBL_MAX`

_Description:_

---
Maximum finite `double` value.

Example:

```c
#include <float.h>
double x = DBL_MAX; // ~1.797693e+308
```
---

<a id="id-dbl_epsilon"></a>
### `DBL_EPSILON`

_Description:_

---
Difference between 1 and the least `double` greater than 1 (machine epsilon for
double).

Example:

```c
#include <float.h>
double e = DBL_EPSILON; // ~2.220446e-16
```
---

<a id="id-ldbl_true_min"></a>
### `LDBL_TRUE_MIN`

_Description:_

---
Minimum positive subnormal `long double` value (platform-dependent).

Example:

```c
#include <float.h>
long double x = LDBL_TRUE_MIN;
```
---

<a id="id-ldbl_min"></a>
### `LDBL_MIN`

_Description:_

---
Minimum positive normalized `long double` value.

Example:

```c
#include <float.h>
long double x = LDBL_MIN;
```
---

<a id="id-ldbl_max"></a>
### `LDBL_MAX`

_Description:_

---
Maximum finite `long double` value.

Example:

```c
#include <float.h>
long double x = LDBL_MAX;
```
---

<a id="id-ldbl_epsilon"></a>
### `LDBL_EPSILON`

_Description:_

---
Difference between 1 and the least `long double` greater than 1 (machine
epsilon for long double).

Example:

```c
#include <float.h>
long double e = LDBL_EPSILON;
```
---
