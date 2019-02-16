/**
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    var islands = 0;

    // find land pieces
    for (var r = 0; r < grid.length; r++) {
        for (var c = 0; c < grid[r].length; c++) {
            if ('1' === grid[r][c]) {
                walk(grid, r, c);
                islands++;
            }
        }
    }

    return islands;
};

// do dfs walf and mark visited land pieces
function walk(grid, row, col) {
    if ('1' === grid[row][col]) {
        grid[row][col] = '*'; // mark land piece as visited
        /* left*/       if (col > 0) walk(grid, row, col - 1);
        /* right */     if (col < grid[row].length - 1) walk(grid, row, col + 1);
        /* top */       if (row > 0) walk(grid, row - 1, col);
        /* bottom */    if (row < grid.length - 1) walk(grid, row + 1, col);
    }
}

console.log(
    numIslands([
        ['1', '0', '1', '1', '1'],
        ['1', '0', '1', '0', '1'],
        ['1', '1', '1', '0', '1'],
    ])
)
