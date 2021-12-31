/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

//Greedy Algo
var maxProfit = function (prices, fee) {
    var maxp = 0;
    var min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) min = prices[i]; //如果小于最小价钱就买入

        if (prices[i] >= min && prices[i] <= min + fee) {//卖了亏或不赚钱就不卖
            continue;
        }

        if (prices[i] - fee - min > 0) {//有的赚钱了, 并更新最小的价钱要让minPrice = prices[i] - fee;，这样在明天收获利润的时候，才不会多减一次手续费！
            maxp += prices[i] - fee - min;
            min = prices[i] - fee;
        }
    }
    return maxp;
};

//DP
var maxProfit = function (prices, fee) {
    const dp = new Array(prices.length).fill([0, 0]);
    dp[0][0] -= prices[0] + fee;//The initial trade comes with a price and a fee

    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i] - fee);//Make sure everytime you buy a stock, the fee comes with it
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
    }

    return dp[prices.length - 1][1];
};