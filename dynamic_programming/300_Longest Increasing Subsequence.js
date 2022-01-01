/**
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (nums.length <= 1) return nums.length;
    const dp = new Array(nums.length).fill(1);
    var result = 0;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1)
        }
        if (result < dp[i]) result = dp[i];
    }
    return result;
};