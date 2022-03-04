/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var maxp = 0;
    //Any profit can be reduce to price[i] - price[j] when j is the day bought and i the day sell
    // profit[i] - profit[i-1] + profit[i-1] - profit[i-2]...profit[j + 2] - profit[j-1] + profit[j-1] - profit[j]
    // that means we any days we get positive profit are the day range of transaction
    for (let i = 1; i < prices.length; i++) {//starts at day 1 because day 0 doesn't have a profit
        if (prices[i] - prices[i - 1] > 0) //Only collect positive profits
            maxp += prices[i] - prices[i - 1];
    }
    return maxp;
};