/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    function AlphaValue(alpha){        
        return alpha.toLowerCase().charCodeAt(0) - 97 + 1;
    }


    function answer(title){
       const tArr = title.split('');
       let sum = 0
       let power = 0
       for(let i = tArr.length-1;i>=0;i--){
        sum += AlphaValue(tArr[i]) * (26**power)
        power++
       }
       return sum;
    }

    return answer(columnTitle);
};