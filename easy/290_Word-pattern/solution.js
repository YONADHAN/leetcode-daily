/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let wordAr = s.split(' ');
    if(pattern.length!==wordAr.length) return false;
    let obj = {}
    for(let index = 0;index<pattern.length;index++) {
        if(!obj[pattern[index]]) {
            if(Object.values(obj).includes(wordAr[index])) return false
            obj[pattern[index]] = wordAr[index]
        }else{
            if(obj[pattern[index]]!==wordAr[index]) return false;
        }
    }
    return true;
};