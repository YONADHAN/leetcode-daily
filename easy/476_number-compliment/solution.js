

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    function answer(num){
      
        function recursion(num, result =[]){
            if(num==0 ){
                return result
            }

            let rem = num%2;
            result.push(rem)
            return recursion(Math.floor(num/2), result)
        }

        let arr = recursion(num)
        // Reversing the array to get the correct order of bits
        let reversedArr = arr.reverse();
        let sum = 0;
        let flag = 0
        for(let i = 0;i<reversedArr.length;i++){
            if(reversedArr[i]==1 && flag ==0){
                flag = 1
            }
            if(flag==1){
                let powerint = arr.length-i-1

                sum += 2**powerint * (reversedArr[i]===1? 0: 1)
                
            }
        }
        return sum

    }

    return answer(num)
};