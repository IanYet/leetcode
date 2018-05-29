/**
    Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.

    Example 1:

    Input: [1,2,3,1], k = 4, t = 0
    Output: true
    Example 2:

    Input: [1,0,1,1], k = 1, t = 0
    Output: true
    Example 3:

    Input: [4,2], k = 2, t = 1 
    Output: false
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
*/
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    if (k === 0) { return false }

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let absVal = Math.abs(nums[i] - nums[j])
            let absPos = Math.abs(i - j)

            if (absVal <= t && absPos <= k) {
                return true
            }
        }
    }

    return false

};

console.log(containsNearbyAlmostDuplicate([4,2], 2, 1));