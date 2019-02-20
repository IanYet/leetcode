/*
    Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

    Example 1:

    Input: [1,2,3,1], k = 3
    Output: true
    Example 2:

    Input: [1,0,1,1], k = 1
    Output: true
    Example 3:

    Input: [1,2,1], k = 0
    Output: false
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function(nums, k) {
    if(k === 0){ return false}

    const hashObj = {}

    for( let i in nums){
        if(hashObj[nums[i]]){
            hashObj[nums[i]].push(i)

            let posArr = hashObj[nums[i]]
            let len = posArr.length
            let distance = posArr[len-1] - posArr[len-2]
            if(distance <= k){
                return true
            }
        }else {
            hashObj[nums[i]] = [i]
        }
    }

    return false
};
console.log(containsNearbyDuplicate([1,0,1,1], 1));
// containsNearbyDuplicate([1,2,1], 0)