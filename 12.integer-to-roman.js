/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var [numOfM, num] = [Math.floor(num/1000), num%1000]
    var [numOfC, num] = [Math.floor(num/100), num%100]
    var [numOfX, numofI] = [Math.floor(num/10), num%10]

    const Ms = new Array(numOfM).fill('M').join('')
    const Cs = fourAndNine(numOfC, 'M', 'D', 'C')
    const Xs = fourAndNine(numOfX, 'C', 'L', 'X')
    const Is = fourAndNine(numofI, 'X', 'V', 'I')

    // console.log(Ms, Cs, Xs, Is);

    return Ms + Cs + Xs + Is
};

const fourAndNine = (num, signT, signF, signO) => {
    if(num === 4){
        return signO + signF
    }
    if(num === 9){
        return signO + signT
    }
    if(num < 5){
        return new Array(num).fill(signO).join('')
    }
    if(num >= 5){
        return signF + new Array(num-5).fill(signO).join('')
    }
}

// intToRoman(1834)

