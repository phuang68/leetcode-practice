/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    const dp = new Array(prices.length).fill(0).map(() => new Array(2 * k + 1).fill(0));
    if (prices.length <= 1) return 0;//We don't buy any stock if there's only a day no stocks at all
    for (let i = 1; i <= k; i++) {//Initializing from 1 to k times transaction state from the 0 day
        dp[0][2 * i - 1] = -prices[0];
    }

    for (let i = 1; i < prices.length; i++) {//Starting at the first day
        for (let j = 1; j <= k; j++) {//Updating if the holding the i th day's stock and not holding the i th day's stock
            dp[i][2 * j - 1] = Math.max(dp[i - 1][2 * j - 1], dp[i - 1][2 * j - 2] - prices[i]);//With j times transaction, the state of holding stock decided by eiter no action or buying that ith day's stock
            dp[i][2 * j] = Math.max(dp[i - 1][2 * j], dp[i - 1][2 * j - 1] + prices[i]); ////With j times transaction, the state of holding stock decided by eiter no action or selling that ith day's stock
        }
    }

    return dp[prices.length - 1][2 * k];
};