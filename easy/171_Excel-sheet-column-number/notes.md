# 171. Excel Sheet Column Number

## Problem

Given a string `columnTitle` that represents the column title as appears in an Excel sheet, return its corresponding column number.

---

## Approach (Current Solution)

- Create a helper function to convert each character into its alphabet value

### Character Conversion:
- Convert character to lowercase (or uppercase)
- Use ASCII value:
  - `'a' → 1`, `'b' → 2`, ..., `'z' → 26`
- Formula:
  ```js
  charCodeAt(0) - 97 + 1
Traverse the string:
Convert string into an array
Traverse from right to left
Maintain a power variable (starting from 0)
For each character:
Get its alphabet value
Multiply with 26^power
Add to sum
Increment power
Final Step:
Return the accumulated sum
Key Logic
Treat the string as a base-26 number
Each position represents a power of 26:
Rightmost → 26⁰
Next → 26¹
Next → 26²
Example
columnTitle = "AB"

A → 1
B → 2

= (1 × 26¹) + (2 × 26⁰)
= (1 × 26) + (2 × 1)
= 28
Time Complexity
Traversing string → O(n)
Space Complexity
Array + variables → O(n)
Notes
This approach manually simulates base-26 conversion
Works correctly and is easy to understand
Can be optimized to O(1) space by avoiding array creation
Optimized Approach (Better)
let result = 0;

for (let i = 0; i < columnTitle.length; i++) {
    result = result * 26 + (columnTitle.charCodeAt(i) - 64);
}
Insight

Similar to how numbers are built in base-10:

123 = ((1 × 10) + 2) × 10 + 3

Here:

AB = ((1 × 26) + 2)