

---

# 205. Isomorphic Strings

## Problem

Given two strings `s` and `t`, determine if they are isomorphic.

Two strings are isomorphic if:

* Characters in `s` can be replaced to get `t`
* Each character must map to exactly one character
* No two characters can map to the same character

---

## Approach (Current Solution)

* First, check if lengths are equal → if not, return `false`
* Use an object (`obj`) to store mapping from `s → t`
* Traverse both strings:

  * If character already exists in map:

    * Check if mapped value matches current character in `t`
    * If not → return `false`
  * If character not in map:

    * Ensure no other character is already mapped to `t[i]`
    * If yes → return `false`
    * Otherwise, store mapping
* If loop completes → return `true`

---

## Example Walkthrough

Input:

```
s = "egg"
t = "add"
```

Iteration:

```
e → a (store)
g → d (store)
g → d (matches existing mapping)
```

Output:

```
true
```

---

Another Example:

```
s = "foo"
t = "bar"
```

Iteration:

```
f → b (store)
o → a (store)
o → r (conflict: expected 'a', got 'r')
```

Output:

```
false
```

---

## Time Complexity

O(n²)

* Loop runs → O(n)
* `Object.values(obj).includes()` → O(n) each time

Overall: O(n²)

---

## Space Complexity

O(n)

* In worst case, storing mapping for each character

---

## Edge Cases Considered

* Different lengths → immediately `false`
* Repeated characters mapping to different ones → handled
* Multiple characters mapping to same character → prevented
* Single character strings → works correctly

---

## Optimization (Better Approach)

Instead of using `Object.values().includes()` (costly), use two hash maps:

* `mapST` → s → t
* `mapTS` → t → s

This ensures **constant time lookup**

### Optimized Complexity

* Time: O(n)
* Space: O(n)

---

## Key Learning

* One-way mapping is not enough → need **bijective mapping**
* Avoid costly operations like `includes()` inside loops
* Hash maps are powerful for character mapping problems

---

## Pattern

* Hash Map
* String Mapping

---

## Difficulty

Easy
