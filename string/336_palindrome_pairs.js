/**
 * Given a list of unique words, find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

Example 1:

Input: ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]] 
Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]
Example 2:

Input: ["bat","tab","cat"]
Output: [[0,1],[1,0]] 
Explanation: The palindromes are ["battab","tabbat"]
 */

 /**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    var wordMap = {}

    words.forEach((w, i) => {
        wordMap[w.split('').reverse().join('')] = i
    })
    console.log(wordMap);

    words.forEach((word, i) => {
        var pos = palindromePos(word)
    })
};

/**
 * 
 * @param {String} s 
 */
var palindromePos = function(s) {
    var sa = s.split('')
    var sra = sa.reverse()

    
}

console.log(palindromePairs(["bat","tab","cat"]));