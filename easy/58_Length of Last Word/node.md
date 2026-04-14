# 58. Length of Last Word

## Problem
Given a string `s` containing words and spaces, return the length of the last word.

A word is defined as a sequence of non-space characters.

---

## Approach (Current Solution)
- Remove leading and trailing spaces using `trim()`
- Split the string into words using `split(" ")`
- Get the last word using `pop()`
- Return its length

---

## Example Walkthrough

Input:
"   fly me   to   the moon  "

After trim():
"fly me   to   the moon"

After split(" "):
["fly", "me", "", "", "to", "", "", "the", "moon"]

After pop():
"moon"

Output:
4

---

## Time Complexity
O(n)

- `trim()` → O(n)
- `split()` → O(n)
- `pop()` → O(1)

Overall: O(n)

---

## Space Complexity
O(n)

- `split()` creates an array of substrings
- In worst case, space used is proportional to input size

---

## Edge Cases Considered
- String with trailing spaces → handled by `trim()`
- Single word → works correctly
- Multiple spaces between words → handled by `split()`

---

## Optimization (Better Approach)
Instead of using extra space with `split()`, we can:
- Traverse the string from the end
- Skip trailing spaces
- Count characters until a space is found

### Optimized Complexity
- Time: O(n)
- Space: O(1)

---

## Key Learning
- String manipulation problems often have **space-optimized solutions**
- Avoid using `split()` when space matters
- Think in reverse traversal for "last element" problems

---

## Pattern
- String Traversal
- Two-pointer (reverse scan)

---

## Difficulty
Easy