/**
 * 
 * @param {Array} cost 
 * @param {Array} weight 
 */

const zeroOnePack = (cost, weight) => {
    const len = cost.length
    const dp = new Array(len).fill(0).map( a => new Array(len).fill(0))

    console.log(dp);
}