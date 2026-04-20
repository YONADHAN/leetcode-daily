Here’s your clean **`note.md`** for the `mySqrt` solution 👇

---

# 69. Sqrt(x)

## Problem

Given a non-negative integer `x`, return the **square root of `x`** rounded down to the nearest integer.

* You must not use built-in exponent functions like `Math.sqrt()`
* Return only the **integer part**

---

## Approach (Current Solution)

* Initialize a variable `z = 0` to store the result
* Start a loop from `i = 1`
* Continue loop while `i * i <= x`
* For each iteration:

  * Update `z = i` (store latest valid square root)
  * If `i * i === x`, return `i` immediately (perfect square)
* If loop ends, return `z` (floor value)

---

## Example Walkthrough

Input:

```
x = 8
```

Iteration:

```
i = 1 → 1*1 = 1 ≤ 8 → z = 1
i = 2 → 2*2 = 4 ≤ 8 → z = 2
i = 3 → 3*3 = 9 > 8 → stop
```

Output:

```
2
```

---

Another Example:

```
x = 16
```

Iteration:

```
i = 1 → 1
i = 2 → 4
i = 3 → 9
i = 4 → 16 (perfect match)
```

Output:

```
4
```

---

## Time Complexity

O(√x)

* Loop runs until `i * i > x`
* Maximum iterations ≈ √x

---

## Space Complexity

O(1)

* Only a few variables used

---

## Edge Cases Considered

* `x = 0` → return `0`
* `x = 1` → return `1`
* Perfect squares → return exact root
* Non-perfect squares → return floor value

---

## Optimization (Better Approach)

Use **Binary Search** instead of linear scan:

* Search range: `1 → x`
* Find mid such that `mid * mid <= x`
* Reduce search space each time

### Optimized Complexity

* Time: O(log x)
* Space: O(1)

---

## Key Learning

* Instead of finding exact root, focus on **floor value**
* Linear scan works but is not optimal
* Binary Search is preferred for large inputs

---

## Pattern

* Math
* Brute Force → Binary Search Optimization

---

## Difficulty

Easy
