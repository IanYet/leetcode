/**
 * Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function(preorder, inorder) {
    if(inorder.length === 0) return null

    const root = new TreeNode(preorder.shift())
    let inLeft = [], inRight = [], preLeft = [], preRight = []
    const pos = inorder.indexOf(root.val)

    for(let i=0;i<inorder.length;i++){
        if(i<pos){
            inLeft.push(inorder[i])
        }else if(i>pos){
            inRight.push(inorder[i])
        }
    }

    preLeft = preorder.splice(0, inLeft.length)
    preRight = preorder

    root.left = buildTree(preLeft, inLeft)
    root.right = buildTree(preRight, inRight)

    return root
};

 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}