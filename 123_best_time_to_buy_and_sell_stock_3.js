/**
 * Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:

Input: [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
             Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
Example 2:

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
 */

 /**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let current = prices[0]
    let maxProfit = 0
    let [minPos, minTmp, maxPos] = [0, 0, 0]

    for(let i=1;i<prices.length;i++){
        let profit = prices[i] - current
        if(profit > maxProfit){
            maxProfit = profit
            maxPos = i
            minPos = minTmp
        }

        if(prices[i] <= current){
            current = prices[i]
            minTmp = i
        }
    }

    if(minPos === maxPos || maxProfit === 0){
        return 0
    }
    console.log(minPos, maxPos);

    const prePrices = prices.slice(0, minPos) || [0],
          inPrices = prices.slice(minPos+1, maxPos) || [0],
          afPrices = prices.slice(maxPos+1)|| [0]

    console.log(prePrices, inPrices, afPrices);
    const preProfit = profit(prePrices),
          afProfit = profit(afPrices)
          inProfit = profit(inPrices.reverse())

    console.log(maxProfit, preProfit, inProfit, afProfit);
    return maxProfit + Math.max(preProfit, afProfit, inProfit)
}

var profit = function(prices){
    let current = prices[0]
    let maxProfit = 0

    for(let i=1;i<prices.length;i++){
        let profit = prices[i] - current
        maxProfit = profit > maxProfit?profit:maxProfit
        current = prices[i] < current ? prices[i]: current
    }

    return maxProfit
}

console.log(maxProfit([1,2,3,4,5]));