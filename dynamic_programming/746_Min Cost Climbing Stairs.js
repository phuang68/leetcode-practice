/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    //1. DEF: i in [0, cost.length - 1], dp[i] is the min cost of climbing to i;
    const n = cost.length;
    const dp = new Array(n + 1).fill(0);
    //2. FORMULA: dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    //3. INIT: dp[0] = 0, dp[1] = 0;
    //4. ORDER: left 2 right from 2;
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    //5. EXAMPLE: cost = [10, 15, 20], dp = [0, 0, 10, 15], dp[n] = 15
    return dp[n];
};

//Method 2
var minCostClimbingStairs = function (cost) {
    const dp = new Array(cost.length);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let i = 2; i < cost.length; i++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
    }
    return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
};