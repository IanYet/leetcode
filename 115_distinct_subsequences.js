/**
 * Given a string S and a string T, count the number of distinct subsequences of S which equals T.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

Example 1:

Input: S = "rabbbit", T = "rabbit"
Output: 3
Explanation:

As shown below, there are 3 ways you can generate "rabbit" from S.
(The caret symbol ^ means the chosen letters)

rabbbit
^^^^ ^^
rabbbit
^^ ^^^^
rabbbit
^^^ ^^^
Example 2:

Input: S = "babgbag", T = "bag"
Output: 5
Explanation:

As shown below, there are 5 ways you can generate "bag" from S.
(The caret symbol ^ means the chosen letters)

babgbag
^^ ^
babgbag
^^    ^
babgbag
^    ^^
babgbag
  ^  ^^
babgbag
    ^^^
 */

 /**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    var sLen = s.length, tLen = t.length;
    var num = [[]]

    if(sLen < tLen){
        return 0
    }

    if(sLen === tLen){
        return s === t? 1:0
    }

    num[0][0] = 1;
    for(let i=1; i<=tLen; i++){
        num[i] = []
        num[i][0] = 0
    }

    for(let j=1;j<=sLen; j++){
        num[0][j] = 1
    }

    for(let i=1; i<=tLen; i++){
        for(let j=1; j<= sLen; j++){
            if(t.charAt(i-1) !== s.charAt(j-1)){
                num[i][j] = num[i][j-1]
            }else {
                num[i][j] = num[i][j-1] + num[i-1][j-1]
            }
        }
    }

    console.log(num);
    return num[tLen][sLen]
};

console.log(numDistinct('rabbbit', 'rabbit'));