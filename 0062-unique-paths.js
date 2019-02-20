/**
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
 */


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(!m || !n){
        return 1
    }
    var mn = new Array(m).fill(1).map(a => new Array(n).fill(1))

    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            mn[i][j] = mn[i-1][j] + mn[i][j-1]
        }
    }

    return mn[m-1][n-1]
};

console.time('mn:')
uniquePaths(100,100)
console.timeEnd('mn:')