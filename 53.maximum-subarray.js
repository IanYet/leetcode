/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//     if(nums.length === 0){
//         return 0
//     }

//     let local = Number.MIN_SAFE_INTEGER
//     let global = Number.MIN_SAFE_INTEGER

//     nums.forEach(num => {
//         local = Math.max(local+ num, num)
//         global = Math.max(global, local)

//         console.log(global, local);
//     })

//     return global
// };

// maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);