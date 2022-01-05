 /**
 * https://leetcode-cn.com/problems/longest-palindromic-subsequence/
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const dp = Array.from(Array(s.length), () => Array(s.length).fill(0));
    for(let i = 0; i < s.length; i++) dp[i][i] = 1;

    for(let i = s.length - 1; i >= 0; i--){
        for(let j = i + 1; j < s.length; j++){
            if(s[i] == s[j]){
                dp[i][j] = dp[i+1][j-1] + 2;
            }else{
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
            }
        }
    }

    return dp[0][s.length - 1];
};