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
    const len = Math.max(num1.length, num2.length)
    const arr1 = num1.split('').reverse()
    const arr2 = num2.split('').reverse()
    const result = []

    let last = '0'

    for(let i=0;i<len;i++){
        let temp = add(last, arr1[i]||'0', arr2[i]||'0')
        result.unshift(temp[1])
        last = temp[0]

        if(i === len-1){
            result.unshift(Number(last)|| '')
        }
    }

    return result.join('');
};

var add = function(last, num1, num2){
    var sum = (Number(last) + Number(num1) + Number(num2)).toString();
    
    if(sum.length === 2){
        return [sum.substr(0,1), sum.substr(1,1)]
    }else {
        return ['0', sum.substr(0,1)]
    }
};

addStrings('1234567887654321', '8765432112345678')