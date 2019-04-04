/**
 * Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(inorder.length === 0) return null

    const root = new TreeNode(postorder.pop())
    let inLeft = [], inRight = [], postLeft = [], postRight = []
    const pos = inorder.indexOf(root.val)

    for(let i=0;i<inorder.length;i++){
        if(i<pos){
            inLeft.push(inorder[i])
        }else if(i>pos){
            inRight.push(inorder[i])
        }
    }

    postLeft = postorder.splice(0, inLeft.length)
    postRight = postorder

    root.left = buildTree(inLeft, postLeft)
    root.right = buildTree(inRight, postRight)

    return root
};

 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}