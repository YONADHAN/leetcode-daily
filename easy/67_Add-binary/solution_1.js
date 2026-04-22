/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    function binaryToDecimal(binary){
        let count = 0
        let decimal = 0
        for(let i = binary.length-1;i>=0;i--) {
            if(binary[i]==="1") {
                decimal += Math.pow(2, count) 
            }
            count++
        }
        return decimal;
    }
    function decimalToBinary(decimal){
        if (decimal === 0) return "0"; 
        let remainder = 0;
        let binary = ""
        let arr = []
        while(decimal!==0) {
            remainder = decimal%2;
            arr.push(remainder)
            decimal = Math.floor(decimal/2)
        }
        binary = arr.reverse().join("")
        return binary
    }
    function sumCal(a, b){
        return a+b
    }

    let num1 = binaryToDecimal(a)
    let num2 = binaryToDecimal(b)
    let total = sumCal(num1, num2)
    return decimalToBinary(total)
};






```
Gives Wrong Answer for the following input (Input is too large to be converted to a number in JavaScript):

a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"

b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"

expectedOutput = "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"


output = "110111101100010011000101110110100000011101000101011000000000000000000000000000000000000000000000000"

```