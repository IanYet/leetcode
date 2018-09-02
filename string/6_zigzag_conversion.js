/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
 */

 /**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    var totalCnum = s.length;
    var colNum = Math.ceil(totalCnum/(2*numRows - 2))*(numRows - 1);

    var res = Array(colNum).fill(0).map(() => Array(numRows).fill(' '));
    var sa = s.split('');

    sa.forEach((c, i) => {
        var gNum = Math.floor(i/(2*numRows - 2));
        var leftNum = i%(2*numRows - 2)
        var rbNum = gNum*(numRows - 1);

        var raNum = leftNum - numRows+1 <=0?0:leftNum - numRows +1;
        var cNum = raNum===0?(leftNum%numRows):(numRows - leftNum%numRows - 2)
        res[raNum + rbNum][cNum] = c
    })

    var ress = '';
    for(var i=0; i<numRows;i++){
        for(var j=0;j<colNum;j++){
            ress  = ress + (res[j][i] === ' '?'':res[j][i]);
        }
    }
    // return ress;
    console.log(ress);
};

convert("hfdhfeifheihfiehfieh", 2)