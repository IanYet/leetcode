/**
    Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

    Example:

    Input: 

    1 0 1 0 0
    1 0 1 1 1
    1 1 1 1 1
    1 0 0 1 0

    Output: 4
*/


// TODO 做得不对
/**
 * @param {character[][]} matrix
 * @return {number}
*/
var maximalSquare = function (matrix) {
    var height = matrix.length;
    var width = matrix[0].length;
    var len = width < height ? width : height;

    for(var i=len; i>=1; i--){
        var temp = findFilled(matrix, i)
        if(!temp){
            continue
        }

        return temp;
    }

    return 1;
};

var findFilled = function (matrix, slide) {
    var height = matrix.length;
    var width = matrix[0].length;
    var len = width < height ? width : height;

    for (var i = 0; i <= len-slide; i++) {
        for (var j = 0; j <= len-slide; j++) {
            var temp = matrix.filter((line, index) => {
                return index >= i && index <= slide + i;
            }).map((line) => {

                var sLine = line.join('').substr(j, slide).split('');
                if(sLine.includes('0')){
                    return 'null'
                }
                return sLine
            })

            console.log(temp);
            if(temp.includes('null')){
                continue;
            }
            return slide
        }
    }

    return 0
}

console.log(maximalSquare([[1,0,1,0,1],[1,0,1,1,1],[1,1,1,1,1],[1,0,0,1,0]]))