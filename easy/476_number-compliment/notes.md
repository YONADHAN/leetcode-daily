# 476. Number Complement

## Problem

Given a positive integer `num`, return its complement.

The complement strategy is to flip all the bits in its binary representation up to the most significant 1-bit.

---

## Approach (Current Solution)

- Create a helper function to convert the number into binary using recursion

### In recursion:
- Keep dividing the number by 2
- Store the remainder (`num % 2`) in an array
- Continue until `num == 0`

- Reverse the array to get the correct binary order

### Traverse the binary array:
- Use a flag to detect the first occurrence of `1`
- Only start flipping bits after the first `1` is found

### For each bit:
- If bit is `1`, convert to `0`
- If bit is `0`, convert to `1`

- Calculate the decimal value using powers of 2
- Return the final sum

---

## Key Logic

- Convert number → Binary  
- Reverse binary array  
- Ignore leading zeros (using flag)  
- Flip bits after first `1`  
- Convert back to decimal  

---

## Example


num = 5

Binary = 101
Complement = 010

Output = 2


---

## Time Complexity

- Binary conversion → O(log n)  
- Traversal → O(log n)  

 Overall: **O(log n)**

---

## Space Complexity

- Recursive stack + array → **O(log n)**

---

## Notes

- This approach manually simulates binary conversion and bit flipping  
- It works but is not optimal  
- A better approach uses bit manipulation (XOR with mask)