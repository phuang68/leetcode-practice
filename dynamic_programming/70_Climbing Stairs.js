/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    //Edge case
    if (n < 3) return n;
    //1. Def of dp: i in [0, n], dp[i] is number of distinct ways of climbing to step i;
    const dp = new Array(n + 1).fill(0);
    //2. Formula of dp: dp[i] = dp[i - 1] + dp[i - 2], either 1-step or 2-step
    //3. Init of dp: dp[1] = 1, dp[2] = 2;
    dp[1] = 1;
    dp[2] = 2;
    //4. Iter order: left 2 right from 3;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    //5. Example res: n = 8, dp = [0,1,2,3,5,8,13,21,34], dp[n] = 34
    return dp[n];
};

//Knapsack solution
var climbStairs = function (n) {
    //The collection of m is [1,2]
    //Item = m， weight = m[i]， value = m[i]，knapsack weight = n
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    for (let j = 1; j <= n; j++) {
        for (let i = 1; i <= 2; i++) {
            if (j - i >= 0) dp[j] += dp[j - i];
        }
    }

    return dp[n];
};