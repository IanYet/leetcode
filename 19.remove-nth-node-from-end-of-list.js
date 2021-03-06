/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let [ behPos, lefPos, curPos] = [head, head, head]
    let count = 0

    while(curPos){
        curPos = curPos.next
        if(count >= n){
            lefPos = lefPos.next
        }
        if(count > n){
            behPos = behPos.next
        }

        count ++
    }

    if(behPos === lefPos) return lefPos.next

    behPos.next = lefPos.next
    return head
};

