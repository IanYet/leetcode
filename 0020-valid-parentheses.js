/**
    Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Note that an empty string is also considered valid.

    Example 1:

    Input: "()"
    Output: true
    Example 2:

    Input: "()[]{}"
    Output: true
    Example 3:

    Input: "(]"
    Output: false
    Example 4:

    Input: "([)]"
    Output: false
    Example 5:

    Input: "{[]}"
    Output: true
*/

/**
 * @param {string} s
 * @return {boolean}
*/
var isValid = function (s) {
    const oriArr = s.split('')
    const tempArr = []

    for (let sign of oriArr) {
        let opSign

        switch (sign) {
            case '(':
            case '{':
            case '[': {
                tempArr.push(sign)
                break
            }
            case ')':{
                opSign = '('
                let len = tempArr.length
                
                if (tempArr[len - 1] === opSign) {
                    tempArr.pop()
                } else {
                    return false
                }

                break
            }
            case '}':{
                opSign = '{'
                let len = tempArr.length
                
                if (tempArr[len - 1] === opSign) {
                    tempArr.pop()
                } else {
                    return false
                }

                break
            }
            case ']': {
                opSign = '['
                let len = tempArr.length

                if (tempArr[len - 1] === opSign) {
                    tempArr.pop()
                } else {
                    return false
                }

                break
            }
            default:
                break;
        }
    }

    return tempArr.length === 0 ? true : false
};

console.log(isValid('({[]}){}'));