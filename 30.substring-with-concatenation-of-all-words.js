/**
 * You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

Example 1:

Input:
  s = "barfoothefoobarman",
  words = ["foo","bar"]
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoor" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.
Example 2:

Input:
  s = "wordgoodstudentgoodword",
  words = ["word","student"]
Output: []
 */

 /**
 * @param {string} os
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(os, words) {
    if(os === ''){
        return (words.length === 1 && words[0] === '')?[0]: []
    }

    if(words.length === 0){
        return []
    }

    if(words.length === 1 && words[0] === ''){
        return [0]
    }
    var uLen = words[0].length;
    var wLen = words.join('').length;

    var sa = os;
    words.forEach((word) => {
        console.log(sa);
        sa = sa.replace(createReg(word), () => new Array(uLen).fill('_').join(''))
    });

    //xor
    var sb = os.split('').map((s, i) => s === sa[i]?'_':s).join('');
    var ab = sb.replace(/_+/g, '_').split('_').filter(val => val.length >= wLen).filter(val => includesAll(val, words));

    // console.log(sa, sb, ab);
    var resSA = []
    ab.forEach((s) => {
        
        do{
            var stemp = s.substr(0, wLen)
            words.forEach(word => {
                stemp = stemp.replace(word, '')
            }) 

            if(stemp.length === 0){
                resSA.push(s.substr(0, wLen))
            }
            s = s.replace(s.substr(0, 1), '');

            console.log(resSA);
        }while(s.length >= wLen)
    })

    var resSP = []
    resSA.forEach(resS => {
        resSP.push(sb.indexOf(resS));
        var tempa = sb.split('')
        tempa.splice(sb.indexOf(resS), 1, '_')
        
        sb = tempa.join('')
        console.log(sb);
    })

    return resSP
};

var createReg = (val) => new RegExp(`${val}`, 'g');

var includesAll = (os, words) => {
    var res = true;

    words.forEach((word) => {
        if(!os.includes(word)){
            res = false;
        }
    })

    return res;
};

console.log(findSubstring("", ["ba","ab","ba"])); 

// var findSubstring = function(s, words) {
//     if(s.length == 0 || words.length ==0){
//         return [];
//     }
//     var len = words.length*words[0].length;
//     if(s.length < len){
//         return [];
//     }
//     var  result = [];
//     for(let i = 0; i < s.length - len + 1; i++){      
//         str = s.substr(i, len);    
//         // console.log('str: ', str);
//         if(isConcatenation(str, words)){
//             result.push(i);
//             // console.log('result: ',result);
//         }
        
//     }
//     // console.log('result',result);
//     return result;
// };
// function isConcatenation(str, words){
//     var arr = [];
//     var re = new RegExp('[a-zA-Z]{' + words[0].length +'}','g');
//     str.replace(re,function($$){arr.push($$)});
//     return arr.sort().toString()==words.sort().toString();
// };