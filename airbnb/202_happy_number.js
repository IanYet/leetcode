/**
    Write an algorithm to determine if a number is "happy".

    A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

    Example: 

    Input: 19
    Output: true
    Explanation: 
    12 + 92 = 82
    82 + 22 = 68
    62 + 82 = 100
    12 + 02 + 02 = 1
*/

/**
 * @param {number} n
 * @return {boolean}
*/
const preNum = []
var isHappy = function (n) {
    const numStr = n.toString()
    let sum = 0

    for (let num of numStr) {
        let tempNum = parseInt(num)
        sum = sum + tempNum * tempNum
    }


    if(sum === 1){
        return true
    }else if(preNum.includes(sum)){
        return false
    }else{
        preNum.push(sum)
        return isHappy(sum)
    }
};

console.log(isHappy(13));