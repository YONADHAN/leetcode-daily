# 278. First Bad Version

## Problem
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

---

### Approach (Current Solution)

 - declare and initiate left and right variable with 1 and n values
 - write a while loop by keeping right variable always greater than left variable
 - within the loop, find mid value of 1 to n
 - if mid value is true or isBadVersion(mid) is true then our consern of values should focus on left side, right = mid - 1
 - if mid value is false then our consern of values is on  right side, left = mid + 1
 - At the end left values is the first value of getting started with true for isBadVersion(mid)  check


 ## Time Complexity

O(n)

 - Bineary Search Algorithm Used - log(n)