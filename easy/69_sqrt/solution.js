/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let z = 0
    for(let i = 1;(i*i)<=x;i++) {
        z = i
        if(i*i===x) return i
    }
    return z
};
