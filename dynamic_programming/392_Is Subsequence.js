/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//Method 1  - using 1143's solution since they are finding the longest common subsequence, therefore finding if s is a subsequence of t
var isSubsequence = function (s, t) {
    const dp = new Array(t.length + 1).fill(0).map(() => new Array(s.length + 1).fill(0));

    for (let i = 1; i <= t.length; i++) {
        for (let j = 1; j <= s.length; j++) {
            if (s[j - 1] == t[i - 1])
                dp[i][j] = dp[i - 1][j - 1] + 1;
            else
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    if (dp[t.length][s.length] === s.length) return true;
    else return false;
};

//Method 2 - Editing the distance between s and t, Finding the same subsequence
var isSubsequence = function (s, t) {
    const dp = new Array(s.length + 1).fill(0).map(() => new Array(t.length + 1).fill(0));

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            if (s[i - 1] == t[j - 1])
                dp[i][j] = dp[i - 1][j - 1] + 1;
            else//If they are different we need to delete t[j-1], so we should check the result of s[i-1] and t[j-2]
                dp[i][j] = dp[i][j - 1];
        }
    }

    if (dp[s.length][t.length] === s.length) return true;
    else return false;
};