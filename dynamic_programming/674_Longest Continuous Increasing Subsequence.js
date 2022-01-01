/**
 * https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    if (nums.length <= 1) return nums.length;
    const dp = new Array(nums.length).fill(1);
    var result = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] > nums[i]) {
            dp[i + 1] = dp[i] + 1;
        }
        if (result < dp[i + 1]) result = dp[i + 1];
    }
    return result;
};