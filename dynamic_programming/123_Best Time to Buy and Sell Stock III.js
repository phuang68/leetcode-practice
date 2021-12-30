/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const dp = new Array(prices.length).fill([0,0,0,0,0]);
    dp[0][1] = dp[0][3] = -prices[0];

    for(let i = 1; i < prices.length; i++){
        dp[i][0] = dp[i - 1][0];
        dp[i-1][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
        dp[i-1][2] = Math.max(dp[i-1][2], dp[i-1][1] + prices[i]);
        dp[i-1][3] = Math.max(dp[i-1][3], dp[i-1][2] - prices[i]);
        dp[i-1][4] = Math.max(dp[i-1][4], dp[i-1][3] + prices[i]);
    }

    return dp[prices.length - 1][4];
};