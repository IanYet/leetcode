/**
 * Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Note:

Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.


 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const [m, n] = [triangle.length, triangle[triangle.length - 1].length]
    const mn = [[triangle[0][0]]]
    const max = Number.MAX_SAFE_INTEGER

    for (let i = 1; i < m; i++) {
        mn[i] = []
        for (let j = 0; j <= i; j++) {
            const [up, lu] = [mn[i - 1][j], mn[i - 1][j - 1]]
            let [upc, upv, luc, luv] = [0,0,0,0]

            if(j===i){
                upc = max
                upv = 0
            }else {
                upc = upv = up
            }

            if(j===0){
                luc = max
                luv = 0
            }else{
                luc = luv = lu
            }

            mn[i][j] = triangle[i][j] + (upc < luc ? upv : luv)
        }
    }

    console.log(mn)
    return Math.min(... mn[m-1])
}

minimumTotal([[7],[-5,9],[6,5,2],[-8,-2,-7,3],[-2,6,-6,-1,4]])
