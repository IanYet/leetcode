/**
    Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

    For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

    Example:

    Given the sorted array: [-10,-3,0,5,9],

    One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

        0
        / \
      -3   9
      /   /
    -10  5
*/

/**
 * @param {number[]} nums
 * @return {TreeNode}
*/
// var sortedArrayToBST = function(nums) {
//     const len = nums.length

//     if(len === 1){
//         return nums[0]
//     }
//     if(len === 2){
//         let node = new TreeNode(nums[1])
//         node.left = nums[0]

//         return node
//     }

//     if(len === 3){
//         let node = new TreeNode(nums[1])
//         node.right = nums[2]
//         node.left = nums[0]

//         return node
//     }

//     const middle = Math.floor(len/2)
//     const leftNode = nums.slice(0, middle)
//     const rightNode = nums.slice(middle+1)
//     let node  = new TreeNode(nums[middle])
//     node.left = sortedArrayToBST(leftNode)
//     node.right = sortedArrayToBST(rightNode)

//     return node
// };

var sortedArrayToBST = function(nums) {
    return generate(nums,0,nums.length-1);
};

var generate = function(nums, start, end){
    
    if(start > end){
        return null;
    }
    var midIndex = start + parseInt((end - start)/2);
    var midVal = nums[midIndex];
    
    var node = new TreeNode(midVal);
    node.left = generate(nums, start, midIndex-1);
    node.right = generate(nums, midIndex+1, end);
    
    return node;
}


/**
 * Definition for a binary tree node.
*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(sortedArrayToBST([1,2,3,4,5,6,7,8,9,10,11,12]));