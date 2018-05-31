/**
    Write a program to find the node at which the intersection of two singly linked lists begins.


    For example, the following two linked lists:

    A:       a1 → a2
                    ↘
                        c1 → c2 → c3
                    ↗            
    B:  b1 → b2 → b3
    begin to intersect at node c1.


    Notes:

    If the two linked lists have no intersection at all, return null.
    The linked lists must retain their original structure after the function returns.
    You may assume there are no cycles anywhere in the entire linked structure.
    Your code should preferably run in O(n) time and use only O(1) memory.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
*/

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
*/
// var getIntersectionNode = function (headA, headB) {

// }

/**
 * 
 * @param {ListNode} head 
 * @param {Number} len 
 */
var getLength = function (head, len = 0) {
    if (head) {
        len++
    } else {
        return len
    }

    return getLength(head.next, len)
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const nodeArr = []
for (let i = 0; i < 10; i++) {
    let node = new ListNode(i)
    nodeArr.push(node)
}

nodeArr.push(null)
for (let nodePos = 0; nodePos < nodeArr.length - 1; nodePos++) {
    nodeArr[nodePos].next = nodeArr[nodePos + 1]
}

console.log(getLength(nodeArr[0]));