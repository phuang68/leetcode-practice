/**
 * Link: https://leetcode-cn.com/problems/perfect-squares/
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    //物品 = 完全平方数, 重量 = 完全平方数, 价值 = 完全平方数的数量, 背包容量 = n, 完全背包问题, 求的是最小值, 所以遍历顺序不重要

    //可以不用求m
    // var m = 0;
    // for(let i = n; i >= 0; i--){
    //     if(i * i <= n){
    //         m = i;
    //         break;
    //     }
    // }

    // if(m * m == n) return 1;

    const dp = new Array(n + 1).fill(Number.MAX_VALUE);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = i * i; j <= n; j++) {
            if (dp[j - i * i] != Number.MAX_VALUE) dp[j] = Math.min(dp[j], dp[j - i * i] + 1);
        }
    }

    return dp[n];
};