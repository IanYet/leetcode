/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (30.83%)
 * Total Accepted:    815.1K
 * Total Submissions: 2.6M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 * Example:
 *
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 *
 *
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    const [a1, a2] = [parseList(l1), parseList(l2)]
    return makeList(bigAdd(a1, a2))
}

const parseList = l => {
    if (l) {
        return [l.val, ...parseList(l.next)]
    } else {
        return []
    }
}

/**
 *
 * @param {Array} a
 */
const makeList = a => {
    if (a.length !== 0) {
        return {
            val: a.shift(),
            next: makeList(a),
        }
    } else {
        return null
    }
}

/**
 *
 * @param {Array} a1
 * @param {Array} a2
 */
const bigAdd = (a1, a2) => {
    const len = Math.max(a1.length, a2.length) + 1
    let ad = 0
    const res = []

    for (let i = 0; i < len; i++) {
        const sum = (a1[i]||0) + (a2[i]||0) + ad
        let dig = 0
        if (sum >= 10) {
            dig = sum - 10
            ad = 1
        } else {
            dig = sum 
            ad = 0
        }
        res.push(dig)
    }

    return res.pop()?[...res, 1]:res
}
