

---

# 67. Add Binary

## Problem

Given two binary strings `a` and `b`, return their sum as a binary string.

---

## Solution Status

* ❌ `solution_1.js` → **Failed**
* ✅ `solution_2.js` → **Passed**

---

## Approach (Solution 1 - Failed)

* Converted binary strings to decimal using loop
* Added the two decimal numbers
* Converted the result back to binary

### ❌ Issue

* JavaScript cannot handle very large integers safely
* Causes **precision loss** for big binary inputs

### ❌ Failing Example

Input:

```
a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"

b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
```

Expected Output:

```
110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000
```

Output:

```
110111101100010011000101110110100000011101000101011000000000000000000000000000000000000000000000000
```

### ❌ Reason

* Overflow due to large number conversion
* Not reliable for big inputs

---

## Approach (Solution 2 - Passed)

* Reverse both strings
* Traverse digit by digit
* Add bits along with `carry`
* Store result in array
* Reverse and return final string

---

## Example Walkthrough

Input:

```
a = "11"
b = "1"
```

Step-by-step:

```
1 + 1 = 0 (carry 1)
1 + carry = 0 (carry 1)
remaining carry = 1
```

Result:

```
"100"
```

---

## Time Complexity

O(n)

* Traverse both strings once

---

## Space Complexity

O(n)

* Result array stores output

---

## Edge Cases Considered

* Both inputs are `"0"` → output `"0"`
* Different length strings
* Final carry remains after loop
* Large binary inputs

---

## Clean Optimized Version (Best Approach)

```js
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = "";

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;

        if (i >= 0) sum += Number(a[i--]);
        if (j >= 0) sum += Number(b[j--]);

        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }

    return result;
};
```

---

## Key Learning

* Avoid converting binary → decimal for large inputs
* Use **bit-by-bit addition with carry**
* Always think about **overflow issues in JavaScript numbers**

---

## Pattern

* String Traversal
* Simulation (Manual Addition)
* Carry Handling

---

## Difficulty

Easy
