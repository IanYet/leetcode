/**
 * Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Example 1:

Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"
Example 2:

Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"
 */

 /**
 * @param {string} s
 * @return {number}
 */
// var longestValidParentheses = function(s) {
//     let maxL = 0

//     for(let start=0; start<s.length; start++){
//         for(let end = start+ 1; end<= s.length; end++){
//             let temps = s.substring(start, end)
//             if(isValid(temps)){
//                 maxL = Math.max(maxL, temps.length)
//                 console.log(temps, temps.length)
//             }
//         }
//     }

//     console.log(maxL);
//     return maxL
// };

// var isValid = function (str) {
//     let validIndex = 0

//     for(let s of str){
//         if(validIndex <= 0 && s === ')'){
//            return false
//         }

//         if(s === '('){
//             ++validIndex
//         }else{
//             --validIndex
//         }
//     }
    
//     return !validIndex
// };

var longestValidParentheses = function(s) {
    let validS = replaceValid(s)
    let validA = validS.replace(/\(/g, ')').replace(/\)+/g, ')').split(')');

    let maxL = 0
    validA.forEach((s) => maxL = Math.max(maxL, s.length))
    console.log(validS, validA, maxL);

    return maxL
}

var replaceValid =  function (s){
    console.log(s);
    s = s.replace(/\(_*\)/g, (val)=> new Array(val.length).fill('_').join(''))

    var leftValid = s.match(/\(_*\)/g)
    console.log(leftValid);
    if(!leftValid){
        return s
    }else {
        return replaceValid(s)
    }
}

longestValidParentheses('()')