/**
 * Given an encoded string, return it's decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const [stack, pos] = [[], []]
    const a = s.split('')

    for (let i = 0; i < a.length; i++) {
        if (a[i] === '[') {
            stack.push(i)
        }
        if (a[i] === ']') {
            const start = stack.pop()
            pos.push([start, i])
        }
    }

    return combineString(a, pos, 0, a.length)
}

/**
 *
 * @param {[]} strArr
 * @param {[]} pos
 * @param {Number} offset
 */
var combineString = (strArr, pos, offset, range) => {
    const len = strArr.length
    let res = ''

    for (let i = offset; i < offset + range; i++) {
        const c = strArr[len - 1 - i]
        if (c === ']') {
            const [start, end] = pos.pop()
            let [times,j] = ['1',start-1]
            do{
                times = strArr.slice(j,start).join('')
                --j
            }while(Number(strArr[j]) || Number(strArr[j]) === 0)

            const timeOffset = times.length
            const subStr = combineString(strArr, pos, i + 1, end - start - 1)
            let subRes = ''

            for (let j = 0; j < Number(times); j++) {
                subRes = subRes + subStr
            }

            res = subRes + res
            i = len - start + timeOffset - 1
        } else {
            res = c + res
        }
    }
    console.log(res)

    return res
}

// decodeString('c10[a]')

const reg = /(\d+)?\[([a-zA-Z]+)\]/
console.log('2[2[55[ad]]]'.match(reg))