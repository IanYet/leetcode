/**
 * Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character
Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
 */

 /**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    var len1 = word1.length,
        len2 = word2.length,
        matrix = [],
        i,
        j;
    
    if(len1 === 0 || len2 === 0) {
        return Math.max(len1, len2);
    }
    //initialization
    for(i = 0; i <= len1; i++) {
        matrix[i] = [];
        matrix[i][0] = i;
    }
    for (j = 0; j <= len2; j++) {
        matrix[0][j] = j;
    }

    for (i = 1; i <= len1; i++) {
        for (j = 1; j <= len2; j++) {
            if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) + 1;
            }
        }
    }

    console.log(matrix);
    return matrix[len1][len2];
};

console.log(minDistance('abc', 'bcdef'));