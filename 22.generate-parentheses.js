/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let queue = ['(']

    while(true){
        if(queue[0].length === 2*n) break

        const cur = queue.shift()
        const [curl, curr] = [`${cur}(`, `${cur})`]

        if(isValid(curl, n)) queue.push(curl)
        if(isValid(curr, n)) queue.push(curr)
        // console.log(queue);
    }

    return queue
}

/**
 * 
 * @param {string} str 
 */
const isValid = (str, n) => {
    let count = 0
    for(let s of str){
        if(s === '('){
            ++count
        }
    }

    if(count >= Math.ceil(str.length/2) && count <=n) return true
    else return false
}

// generateParenthesis(3)
