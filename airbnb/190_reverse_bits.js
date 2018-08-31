/**
 * Reverse bits of a given 32 bits unsigned integer.

Example:

Input: 43261596
Output: 964176192
Explanation: 43261596 represented in binary as 00000010100101000001111010011100, 
             return 964176192 represented in binary as 00111001011110000010100101000000.
Follow up:
If this function is called many times, how would you optimize it?
 */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    var s = to2(n, '');

    for(var i= s.length; i< 32; i++){
        s.unshift('0')
    }
    var res = to10(s)
    return res;
};

var to2 = function (n, temp) {
    if (n === 0 || n === 1) {
        return temp = (n + temp).split('');

    }
    return to2(Math.floor(n/2), n%2 + temp)
};

var to10 = function (a){
    var re = 0;
    
    for(var i=0; i< a.length; i++){
        re = re + Number(a[i]) * 2**i;
    }

    return re;
}
reverseBits(43261596);