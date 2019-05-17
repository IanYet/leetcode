/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const map = {}
    let i = nums.length - 1

    for (i; i >= 0; i--) {
        const num = nums[i]
        const biggerNums = findBigger(num, map)

        if (biggerNums.length) {
            const min = Math.min(...biggerNums)
            const pos = Math.min(...map[min])

            ;[nums[i], nums[pos]] = [nums[pos], nums[i]]
            const afterNums = nums.splice(i+1).sort((a, b) => a-b)
            // console.log(afterNums);
            nums.push(...afterNums)
            break
        }

        map[num] ? map[num].push(i) : (map[num] = [i])
    }

    if(i < 0){
        nums = nums.reverse()
    }

    // console.log(nums)
}

const findBigger = (num, map) => Object.keys(map).filter(n => n > num)

// nextPermutation([11,12,0,27,3,11,21,9,0,15,26,27,17,24,0,16,4,17,14,8,15,8,2,16,10,6,6,24,16,2,18,19,6,10,17,10,21,0,11,13,7,7,2,16,24,25,2,20,12,9,20,19])
