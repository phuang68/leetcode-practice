/**
 * https://leetcode-cn.com/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const dp = new Array(nums.length + 1).fill(0);
    dp[1] = nums[0]

    for (let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
    }
    return dp[nums.length];
};