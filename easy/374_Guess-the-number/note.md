

---

# 374. Guess Number Higher or Lower

## Problem

We are given an API `guess(num)`:

* Returns `-1` → picked number is **lower than `num`**
* Returns `1` → picked number is **higher than `num`**
* Returns `0` → ✅ correct guess

Given `n`, find the number between **1 to n**.

---

## Approach (Binary Search)

* Use **Binary Search** since the range is sorted (1 → n)

### Steps:

* Initialize:

  * `left = 1`
  * `right = n`

* Loop while `left <= right`:

  * Find middle:

    ```js
    mid = Math.floor((left + right) / 2)
    ```

* Call API:

  ```js
  guess(mid)
  ```

### Based on result:

* If result is `0` → ✅ return `mid`
* If result is `-1` → number is smaller → move left:

  ```js
  right = mid - 1
  ```
* If result is `1` → number is larger → move right:

  ```js
  left = mid + 1
  ```

---

## Key Logic

* Apply **Binary Search on range [1, n]**
* Reduce search space by half each time
* Use API feedback to adjust range:

  * `-1` → go left
  * `1` → go right
  * `0` → found

---

## Example

```
n = 10
picked number = 6

mid = 5 → guess(5) = 1 → go right
mid = 8 → guess(8) = -1 → go left
mid = 6 → guess(6) = 0 → answer found

Output = 6
```

---

## Code

```js
var guessNumber = function(n) {
    let left = 1;
    let right = n;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let result = guess(mid);

        if (result === 0) {
            return mid;
        } else if (result === -1) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
};
```

---

## Time Complexity

* Binary Search → **O(log n)**

---

## Space Complexity

* No extra space used → **O(1)**

---

## Notes

* Classic **Binary Search template problem**

* Important for interviews

* Same pattern used in:

  * First Bad Version
  * Search Insert Position
  * Peak Element

* Always use:

  ```js
  mid = Math.floor((left + right) / 2)
  ```

  or

  ```js
  mid = Math.floor(left + (right - left) / 2)
  ```

---


