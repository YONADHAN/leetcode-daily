
---

# 125. Valid Palindrome

## Problem

Given a string `s`, determine if it is a palindrome, considering only **alphanumeric characters** and ignoring cases.

---

## Approach (Current Solution)

* Use **two pointers** (`left` and `right`)
* Traverse from both ends of the string
* Skip non-alphanumeric characters using a helper function
* Compare characters after converting to lowercase
* If mismatch occurs → return `false`
* If all characters match → return `true`

---

## Example Walkthrough

Input:

```
"A man, a plan, a canal: Panama"
```

Step-by-step:

* Skip spaces and special characters
* Compare:

```
a == a  
m == m  
a == a  
...
```

All match → palindrome

Output:

```
true
```

---

## Code

```javascript id="palin1"
var isPalindrome = function(s) {

    function isAlphaNumeric(ch){
        const code = ch.charCodeAt(0)

        return (
            (code >= 48 && code <= 57) ||  // 0-9
            (code >= 65 && code <= 90) ||  // A-Z
            (code >= 97 && code <= 122)    // a-z
        )
    }

    let left = 0;
    let right = s.length - 1;

    while(left < right){
        
        while(left < right && !isAlphaNumeric(s[left])){
            left++
        }

        while(left < right && !isAlphaNumeric(s[right])){
            right--
        }

        if(s[left].toLowerCase() !== s[right].toLowerCase()){
            return false
        }

        left++
        right--
    }

    return true;
};
```

---

## Time Complexity

O(n)

* Each character is visited at most once

---

## Space Complexity

O(1)

* No extra space used (in-place comparison)

---

## Edge Cases Considered

* String with only special characters → returns `true`
* Mixed case letters → handled using `toLowerCase()`
* Digits included → handled using ASCII check
* Empty string → valid palindrome

---

## Optimization (Alternative Approach)

* Convert string to lowercase
* Remove non-alphanumeric characters using regex
* Compare with reversed string

```javascript id="palin2"
var isPalindrome = function(s) {
    let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "")
    return cleaned === cleaned.split("").reverse().join("")
};
```

### Optimized Complexity

* Time: O(n)
* Space: O(n)

---

## Key Learning

* Two-pointer technique is powerful for string problems
* Always clarify **input constraints (alphanumeric vs alphabet)**
* Avoid extra space when possible

---

## Pattern

* Two Pointer
* String Traversal

---

## Difficulty

Easy

---
