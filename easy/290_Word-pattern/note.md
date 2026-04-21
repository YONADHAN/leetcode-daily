
---

# 290. Word Pattern

## Problem

Given a string `pattern` and a string `s`, find if `s` follows the same pattern.

* Each character in `pattern` maps to a word in `s`
* Mapping must be **one-to-one (bijection)**:

  * One character → one word
  * No two characters map to the same word

Return `true` if it follows the pattern, otherwise `false`.

---

## Approach (Current Solution)

* Split string `s` into words using `split(' ')`
* If lengths of `pattern` and words array are not equal → return `false`
* Use an object (`obj`) to store mapping:

  * key → pattern character
  * value → corresponding word

### Loop through pattern:

* If character is **not mapped yet**:

  * Check if word is already mapped using `Object.values(obj).includes()`

    * If yes → return `false` (violates one-to-one mapping)
  * Else → store mapping
* If character **already mapped**:

  * Check if mapped word matches current word

    * If not → return `false`

---

## Example Walkthrough

### Example 1

```
pattern = "abba"
s = "dog cat cat dog"
```

Mapping:

```
a → dog
b → cat
```

Valid → Output:

```
true
```

---

### Example 2

```
pattern = "abba"
s = "dog cat cat fish"
```

Mapping:

```
a → dog
b → cat
but last word is fish ❌
```

Output:

```
false
```

---

### Example 3

```
pattern = "aaaa"
s = "dog cat cat dog"
```

```
a → dog
but later maps to cat ❌
```

Output:

```
false
```

---

## Time Complexity

O(n²)

* Loop runs `n` times
* `Object.values(obj).includes()` takes O(n)

---

## Space Complexity

O(n)

* Object stores mappings

---

## Edge Cases Considered

* Length mismatch → return `false`
* Duplicate word mapping → invalid
* Same pattern char mapping to different words → invalid
* Single character / single word cases

---

## Optimization (Better Approach)

Avoid `Object.values().includes()` (costly).

Use **two hash maps**:

* `char → word`
* `word → char`

This ensures O(1) lookup.

### Optimized Complexity

* Time: O(n)
* Space: O(n)

---

## Optimized Code

```javascript
var wordPattern = function(pattern, s) {
    let words = s.split(' ');
    if (pattern.length !== words.length) return false;

    let charToWord = {};
    let wordToChar = {};

    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        let word = words[i];

        if (charToWord[char] && charToWord[char] !== word) return false;
        if (wordToChar[word] && wordToChar[word] !== char) return false;

        charToWord[char] = word;
        wordToChar[word] = char;
    }

    return true;
};
```

---

## Key Learning

* This is a **bijection mapping problem**
* One-direction map is not enough → need reverse check
* Avoid costly operations like `Object.values().includes()`

---

## Pattern

* Hash Map
* String Mapping
* Bijection Logic

---

## Difficulty

Easy

---


