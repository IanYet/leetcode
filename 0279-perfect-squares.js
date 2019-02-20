/**
 * Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:

Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
 */

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = [[]]
    let num

    for (let i = 0; i <= n; i++) {
        dp[0][i] = i
    }

    for (num = 1; num * num <= n; num++) {
        dp[num] = []

        for (let i = 0; i <= n; i++) {
            dp[num][i] = Math.min(
                dp[num - 1][i],
                typeof dp[num][i - num * num] === 'number'
                    ? dp[num][i - num * num] + 1
                    : Number.MAX_SAFE_INTEGER
            )
        }
    }

    console.log(dp[num-1][n])

    return dp[num-1][n]
}

numSquares(13)
