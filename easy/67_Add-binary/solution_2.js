/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0;
    let arr1 = a.split("").reverse()
    let arr2 = b.split("").reverse()
    const largLen = arr1.length>arr2.length?arr1.length:arr2.length
    let newArr= new Array();
    let current = 0
    for(let i = 0;i<largLen;i++) {
        let sum = 0;
        if(carry) {
            sum += 1;
        }
        if(arr1[i] && arr1[i]=="1"){
            sum += 1;
        }
        if(arr2[i] && arr2[i]=="1") {
            sum += 1;
        }
        if(sum === 0){
            carry = 0;
            current = 0
        }else if(sum === 1){
            carry = 0
            current = 1
        }else if (sum ===2){
            carry = 1
            current = 0
        }else if (sum ===3) {
            carry = 1
            current = 1
        }


        if(current==0||current==1){
            newArr[i] = current+"";
            current = 0
        }
    }

    if(carry===1){
        newArr.push("1")
    }

    return newArr.reverse().join("")


    
};