/**
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const [m, n] = [grid.length, grid[0].length]
    const mn = new Array(m).fill(1).map(a => new Array(n).fill(grid[0][0]))

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!i && !j) {
                continue
            } else {
                const ld = j === 0 ? Number.MAX_SAFE_INTEGER : mn[i][j - 1]
                const ru = i === 0 ? Number.MAX_SAFE_INTEGER : mn[i - 1][j]
                mn[i][j] = Math.min(ld, ru) + grid[i][j]
            }
        }
    }

    console.log(mn)
    return mn[m-1][n-1]
}

minPathSum([[3]])
