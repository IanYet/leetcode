/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let arr = []
    let map = {}
    let maxLen = 0

    for (let c of s) {
        if (map[c]){
            maxLen = maxLen > arr.length ? maxLen : arr.length
            let prev = ''

            while(prev !== c){
                prev = arr.shift()
                delete map[prev]
            }
        }

        arr.push(c)
        map[c] = true

        // console.log(map, arr);
    }

    return maxLen > arr.length ? maxLen : arr.length
}

// lengthOfLongestSubstring('pwwkew')
