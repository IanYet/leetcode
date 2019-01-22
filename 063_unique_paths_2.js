/**
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const [m, n] = [obstacleGrid.length, obstacleGrid[0].length]
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            obstacleGrid[i][j] = -obstacleGrid[i][j]
        }
    }
    obstacleGrid[0][0] = obstacleGrid[0][0]===-1?-1:1
    console.log(obstacleGrid)

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!i && !j) {
                continue
            } else if (obstacleGrid[i][j] === -1) {
                continue
            } else {
                
                let ld = j === 0 ? 0 : obstacleGrid[i][j - 1]
                let ru = i === 0 ? 0 : obstacleGrid[i - 1][j]
                ld = ld === -1? 0: ld
                ru = ru === -1? 0: ru
                obstacleGrid[i][j] = ld + ru
            }
        }
    }

    console.log(obstacleGrid)
    return obstacleGrid[m-1][n-1] === -1?0:obstacleGrid[m-1][n-1]
}

uniquePathsWithObstacles([[1,0],[0,0]])
