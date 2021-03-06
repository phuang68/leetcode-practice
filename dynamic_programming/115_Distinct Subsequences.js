/**
 * https://leetcode-cn.com/problems/distinct-subsequences/
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    const dp = new Array(s.length + 1).fill(0).map(() => new Array(t.length + 1).fill(0));

    for (let i = 0; i <= s.length; i++) dp[i][0] = 1;
    for (let j = 1; j <= t.length; j++) dp[0][j] = 0;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            if (s[i - 1] === t[j - 1]) dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            else dp[i][j] = dp[i - 1][j];
        }
    }

    return dp[s.length][t.length];
};