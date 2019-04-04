/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let res = true
    let map = {}

    const cycle = (head) => {
        if(!head) return 

        if(!map[head.val]){
            map[head.val] = true
            cycle(head.next)
        }

        res = false
        return
    }

    cycle(head)
    return res
};