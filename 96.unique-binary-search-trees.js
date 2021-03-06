/**
 * Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
 */

 /**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    return factorial(2*n)/(factorial(n)*factorial(n+1))
};

var factorial = function(n) {
    if(n===1){
        return 1
    }else{
        return n*factorial(n-1)
    }
}

console.log(numTrees(3));