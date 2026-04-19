/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alphaStart = "a".charCodeAt(0)
    const alphaEnd = "z".charCodeAt(0)
    function isAlphabet(alp){
       const code = alp.toLowerCase().charCodeAt(0)

       return ((code>=65 && code<=90) || (code>=97 && code<=122) || (code>=48 && code<=57))
        
    }
    let left = 0;
    let right = s.length-1;

    while(left<right && left<s.length && right>=0){
        
        while(left<right && !isAlphabet(s[left]) ){
            left++
        }
        while(left<right && !isAlphabet(s[right]) ){
            right--
        }


        if(s[left].toLowerCase()!==s[right].toLowerCase()){
            return false
        }
            left++
            right--
        
       
    }

    return true;
};