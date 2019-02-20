/**
 * You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.

Find out how many ways to assign symbols to make sum of integers equal to target S.

Example 1:
Input: nums is [1, 1, 1, 1, 1], S is 3. 
Output: 5
Explanation: 

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

There are 5 ways to assign symbols to make the sum of nums be target 3.
Note:
The length of the given array is positive and will not exceed 20.
The sum of elements in the given array will not exceed 1000.
Your output answer is guaranteed to be fitted in a 32-bit integer.
 */

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// var findTargetSumWays = function(nums, S) {
//     const queue = []
//     const map = {}
//     const res = []

//     queue.unshift(nums)
//     map[mkSymbol(nums)] = true

//     while (queue.length !== 0) {
//         const tempNums = queue.pop()
//         if(sum(tempNums) === S) res.push(tempNums)

//         findNext(tempNums).forEach(nums => {
//             if(!map[mkSymbol(nums)]) queue.unshift(nums)
//             map[mkSymbol(nums)] = true
//             console.log(nums);
//         })
//     }

//     console.log(res);
// }

// var findNext = nums => {
//     const res = []
//     for (let i = 0; i < nums.length; i++) {
//         res.push(
//             nums.map((num, index) => {
//                 if (index === i) {
//                     return -num
//                 }
//                 return num
//             })
//         )
//     }

//     // console.log(res);
//     return res
// }
// findNext([1,1,1,1,1])

var sum = nums => nums.reduce((pre, cur) => pre + cur, 0)

// var mkSymbol = nums => nums.map(num => 1/num>0?1:0).join('')

var findTargetSumWays = function(nums, S) {
    if((S + sum(nums)) % 2 ===1 || nums.length===0) return 0
    if(S > 2*sum(nums) || S< -2*sum(nums)) return 0
    const pSum = (S + sum(nums)) / 2
    const dp = []
    dp[0] = new Array(pSum + 1).fill(0)
    dp[0][nums[0]] = dp[0][0] = 1

    if(nums[0] === 0) dp[0][0] = 2

    for (let i = 1; i < nums.length; i++) {
        dp[i] = []
        for (let j = 0; j <= pSum; j++) {
            dp[i][j] = dp[i - 1][j] + (dp[i - 1][j - nums[i]] || 0)
        }
    }

    console.log(dp)
    return dp[nums.length - 1][pSum]
}

findTargetSumWays([0,0,0,0,0,0,0,0,1],
    1)
