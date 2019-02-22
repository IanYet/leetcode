/**
 * Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 */

 /**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 1) return [[1]]
    if(numRows === 2) return [[1], [1,1]]
    
    const gene = (numRows, tri) => {
        if(tri.length === numRows) {
            // console.log(tri)
            return tri
        }
        
        const last = new Array(tri.length + 1).fill(1)
        const prev = tri[tri.length - 1]
        
        for(let i=0;i<tri.length-1;i++){
            last[i+1] = prev[i] + prev[i+1]
        }
        
        tri.push(last)
        return gene(numRows, tri)
    }
    
    return gene(numRows, [[1], [1,1]])
};