/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    //1. DEF of dp: i in [0,m-1], j in [0, n-1], dp[i][j] is the number of unique ways to get to [i][j]
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    //2. FORMULA: dp[i][j] = dp[i-1][j] + dp[i][j-1];
    //3. INIT of dp: j in [0, n-1] dp[0][j] = 1, i in [0,m-1] dp[i][0] = 1;, if [0][j] or [i][0] has obsticle, the later is 0
    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] != 1) dp[i][0] = 1;
        else break;
    }
    for (let j = 0; j < n; j++) {
        if (obstacleGrid[0][j] != 1) dp[0][j] = 1;
        else break;
    }
    //4. ORDER: top to bottom from 1, left to right from 1
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] != 1) dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
        }
    }
    return dp[m - 1][n - 1];
};