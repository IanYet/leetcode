/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const dp = new Array(2)
        .fill(0)
        .map(a => new Array(height.length).fill(0))

    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const [dpi, dpj] = [i%2, j]
            const [previ, prevj] = [(i+1)%2, j-1]

            const up = dp[previ][dpj]
            const left = prevj >= 0 ? dp[dpi][prevj] : 0
            const cur = Math.min(height[i], height[j]) * Math.abs(i - j)

            dp[dpi][dpj] = Math.max(up, left, cur)
            // console.log(dp);
        }
    }

    // console.log(dp);

    return dp[0][height.length - 1]
}

maxArea([1,2,3])
