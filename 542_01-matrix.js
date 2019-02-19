/**
 * Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.
Example 1: 
Input:

0 0 0
0 1 0
0 0 0
Output:
0 0 0
0 1 0
0 0 0
Example 2: 
Input:

0 0 0
0 1 0
1 1 1
Output:
0 0 0
0 1 0
1 2 1
Note:
The number of elements of the given matrix will not exceed 10,000.
There are at least one 0 in the given matrix.
The cells are adjacent in only four directions: up, down, left and right.
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    const dp = []

    for (let i = 0; i < matrix.length; i++) {
        dp[i] = []
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                dp[i][j] = 0
            } else {
                let [l, u] = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]
                if (i > 0) {u = dp[i - 1][j] }
                if (j > 0) {l = dp[i][j - 1] }
                dp[i][j] = Math.min(l, u) + 1
            }
        }
    }

    console.log(dp);

    for(let i=matrix.length-1;i>=0;i--) {
        for(let j=matrix[i].length-1;j>=0;j--){
            if(matrix[i][j] === 0){
                dp[i][j] = 0
            }else{
                let [l, u, r, d] = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]
                if (i > 0) {u = dp[i - 1][j] }
                if (j > 0) {l = dp[i][j - 1] }
                if(i<matrix.length -1) {d = dp[i+1][j]}
                if(j<matrix[i].length -1) {r = dp[i][j+1]}
                dp[i][j] = Math.min(l, u, r, d) + 1
            }
        }
    }

    console.log(dp)
    return dp
}

updateMatrix([[0,0,0],[0,1,0],[1,1,1]])
