/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return []
    if(digits.length === 1){
        return map[digits]
    }
    const digit = digits.charAt(0)
    digits = digits.substr(1)

    return map[digit].reduce((pre, cur) => {
        return [
            ...pre, 
            ...letterCombinations(digits).map(letter => cur + letter)
        ]
    }, [])

};
const map = [
    '',
    '',
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z'],
]

// console.log(letterCombinations('234'));

