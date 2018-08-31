/**
 * Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

Example 1:

Input: "3+2*2"
Output: 7
Example 2:

Input: " 3/2 "
Output: 1
Example 3:

Input: " 3+5 / 2 "
Output: 5
Note:

You may assume that the given expression is always valid.
Do not use the eval built-in library function.

 */

 /**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var exp = s.replace(/\s+/g, '');
    var expR = exp.replace(/\+|-/g, function(match){
        return ' ' + match
    }).split(' ');

    console.log(`expR: ${expR}`);

    var r = expR.reduce(function (res, val){
        if(!isNaN(val)){
            return res + Number(val)
        }

        var op0 = val.substr(0,1)
        if(isNaN(op0)){
            val = val.substr(1)
        }else{
            op0 = 0
        }
        var expS = val.replace(/\*|\//g, (match) => ` ${match}`).split(' ');

        console.log(`expS: ${expS}`);
        var subV = expS.reduce((res, val) => {
            if(!val.includes('*') && !val.includes('/')){
                return res*Number(val)
            }

            var op = val.substr(0, 1), va = val.substr(1);
            if(op === '*'){
                return res*Number(va)
            }else {
                return Math.floor(res/Number(va))
            }
        }, 1)

        console.log(`subV: ${subV}`);

        console.log(res, op0, val);
        return Number(res + Number(op0 + subV))
    }, 0)

    return r

};

console.log(calculate('2/2'))