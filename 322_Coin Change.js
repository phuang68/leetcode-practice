/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    //物品 = coins, 重量 = coins[i], 价值 = 硬币个数, 背包容量 = amount
    const dp = new Array(amount + 1).fill(Number.MAX_VALUE);
    coins.sort((a, b) => { return b - a });
    dp[0] = 0;

    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            if (dp[j - coins[i]] != Number.MAX_VALUE) {
                dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
            }
        }
    }
    if (dp[amount] == Number.MAX_VALUE) return -1;
    return dp[amount];
};