/**
    Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

    Note:

    The length of both num1 and num2 is < 5100.
    Both num1 and num2 contains only digits 0-9.
    Both num1 and num2 does not contain any leading zero.
    You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
*/
var addStrings = function (num1, num2) {
    const len = num1.length > num2.length ? num1.length : num2.length
    const arr1 = num1.split('').reverse()
    const arr2 = num2.split('').reverse()
    const result = []

    for(let i=0;i<len;i++){
        
    }
};