/**
 * https://leetcode-cn.com/problems/word-break/
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    //物品 = wordDict, 重量 = word.length, 价值 = false/true, 背包容量 = s的长度
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let j = 0; j <= s.length; j++) {
        for (let i = 0; i < wordDict.length; i++) {
            if (j >= wordDict[i].length && dp[j - wordDict[i].length] && s.slice(j - wordDict[i].length, j) == wordDict[i]) {
                dp[j] = true;
            }

        }
    }

    return dp[s.length];
};