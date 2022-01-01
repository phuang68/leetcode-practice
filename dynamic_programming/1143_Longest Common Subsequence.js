/**
 * https://leetcode-cn.com/problems/longest-common-subsequence/
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    //dp[i][j] is the longest common subsequence between the substring of text1 from 0-i and of text2 from 0-j
    const dp = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0));

    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] === text2[j - 1])//We increment the number of common subsequence
                dp[i][j] = dp[i - 1][j - 1] + 1;
            else
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])//If not equal, the longest would be text1(0,i-1) and text2(0,j) or text1(0,i) and text2(0, j-1)
        }
    }

    return dp[text1.length][text2.length];
};