/**
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return []
    }
    const res = [[]]
    const queue = []
    root.lv = 0
    let currentLv = 0

    queue.push(root)

    while (queue.length !== 0) {
        const temp = queue.shift()
        if (currentLv === temp.lv) {
            res[res.length - 1].push(temp.val)
        } else {
            currentLv++
            res.push([temp.val])
        }

        if (temp.left) {
            temp.left.lv = temp.lv + 1
            queue.push(temp.left)
        }
        if (temp.right) {
            temp.right.lv = temp.lv + 1
            queue.push(temp.right)
        }
    }

    return res
}
