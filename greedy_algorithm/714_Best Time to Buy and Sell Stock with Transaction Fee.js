/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    const dp = new Array(prices.length).fill([0, 0]);
    dp[0][0] -= prices[0] + fee;//The initial trade comes with a price and a fee

    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i] - fee);//Make sure everytime you buy a stock, the fee comes with it
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
    }

    return dp[prices.length - 1][1];
};