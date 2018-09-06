/**
 * Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

Example 1:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
Example 2:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false
 */

/**
* @param {string} s1
* @param {string} s2
* @param {string} s3
* @return {boolean}
*/
var isInterleave = function (s1, s2, s3) {
    var len1 = s1.length
    var len2 = s2.length
    var len3 = s3.length
    var match = [[]]
    match[0][0] = true

    if (len1 + len2 !== len3) {
        return false
    }

    for (let i = 1; i <= len1; i++) {
        match[i] = []
        match[i][0] = s3.charAt(i-1) === s1.charAt(i-1);
    }

    for (let j = 1; j < len2; j++) {
        match[0][j] = s3.charAt(j-1) === s2.charAt(j-1)
    }
    console.log(match);

    for(let i=1; i<= len1; i++){
        for(let j=1; j<=len2; j++){
            let k = i + j;
            match[i][j] = (match[i][j-1] && s2.charAt(j-1) === s3.charAt(k-1))||(match[i-1][j] && s1.charAt(i-1) === s3.charAt(k-1))

            console.log(match);
        }
    }

    return match[len1][len2]
};

console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'));