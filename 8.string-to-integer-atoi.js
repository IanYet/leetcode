/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */
/**
 * 错题
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const [MAX, MIN] = [2 ** 31 - 1, -(2 ** 31)]
    const num = []
    const reg = /[1-9]|-|\+/
    let [isNeg, isFirst] = [false, true]

    for (let s of str) {
        if (s === ' ') {
            continue
        }
        if (isFirst && reg.test(s)) {
            isFirst = false
            num.push(s)
        } else if (/[0-9]/.test(s)) {
            num.push(s)
        } else {
            break
        }
    }

    // console.log(num);

    if (num.length === 0 || num.join('') === '-' || num.join('') === '+')
        return 0
    const res = Number(num.join(''))

    if (res <= MAX && res >= MIN) return res
    else if (res > MAX) return MAX
    else return MIN
}

// console.log(myAtoi('+1'));
