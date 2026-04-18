/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length!==t.length) return false
    let obj = {}
    for(let i = 0;i<s.length;i++) {
        if(obj[s[i]]){
            if(obj[s[i]]!==t[i]){
                return false;
            }
        }else{
            if(Object.values(obj).includes(t[i])) return false
            obj[s[i]] = t[i]
        }
    }
    return true;
};