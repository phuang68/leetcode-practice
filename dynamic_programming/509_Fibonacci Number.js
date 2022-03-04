/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n < 2) return n;
    //1. i is in [0,n], dp[i] means the fibonacci number at i
    const dp = new Array(n + 1).fill(0);
    //2. Determine the formula of recursion, dp[i] = dp[i - 1] + [i - 2]
    //3. Initialization: dp[0] = 0, dp[1] = 1, dp[2] = 1;
    dp[0] = 0;
    dp[1] = 1;
    //4. Iteration order: from left to right
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];  
    }
    //5. Print example result: n = 6, dp = [0,1,1,2,3,5,8], dp[n] = 8;
    return dp[n];

};