/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    //1. DEF of dp: i in [0,m-1], j in [0, n-1], dp[i][j] is the number of unique ways to get to [i][j]
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    //2. FORMULA: dp[i][j] = dp[i-1][j] + dp[i][j-1];
    //3. INIT of dp: j in [0, n-1] dp[0][j] = 1, i in [0,m-1] dp[i][0] = 1;
    for (let i = 0; i < m; i++) dp[i][0] = 1;
    for (let j = 0; j < n; j++) dp[0][j] = 1;
    //4. ORDER: top to bottom from 1, left to right from 1
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
        }
    }
    //5. EXAMPLE: m = 3, n = 7, dp[m - 1][n - 1] = 28;
    return dp[m - 1][n - 1];
};

//Simpler version
var uniquePaths = function (m, n) {
    const dp = new Array(m).fill(1).map(() => new Array(n).fill(1));

    // dp[i][j] 表示到达（i，j） 点的路径数
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];

};