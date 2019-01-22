/**
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
 */

 /**
 * @param {string} os
 * @return {string}
 */
var longestPalindrome = function(os) {
    if(checkPal(os)){
        return os
    }
    os = os + '^#'
    var ss = [];
    var sr = os.split('').reverse().join('')
    var s0 = os.split('')
    
    s0.forEach((s, i) => {
        var sh = sr.substring(i);
        var sf = sr.substring(0, i);
        var sl = (sh + sf).split('');

        ss.push(...checkArray(s0, sl));
    })

    var max = 0, maxl = '';
    ss.forEach((s) => {
        if(s.length > max && checkPal(s)){
            max = s.length;
            maxl = s;
        }
    })

    return maxl
};

/**
 * 
 * @param {Array} s0 
 * @param {Array} sl 
 */
var checkArray = function(s0, sl){
    console.log(s0, sl);
    var r = s0.map((s, i) => s === sl[i]? s:' ').join('').replace(/\s+/g, ' ').split(' ').filter((s) => s !== '');

    console.log(r);
    return r;
}

/**
 * 
 * @param {String} s 
 */
var checkPal = function(s){
    var sr = s.split('').reverse().join('')
    return s === sr
}

console.log( longestPalindrome('112345211'));