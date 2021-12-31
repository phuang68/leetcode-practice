/**
 * https://leetcode-cn.com/problems/house-robber-ii/
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length == 1) return nums[0];
    const ignoreFirst = nums.slice(1);
    const ignoreLast = nums.slice(0, nums.length - 1);
    const robRange = (nums) => {
        const dp = new Array(nums.length + 1).fill(0);
        dp[1] = nums[0];

        for (let i = 2; i <= nums.length; i++) {
            dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
        }

        return dp[nums.length];
    }
    var result1 = robRange(ignoreFirst);
    var result2 = robRange(ignoreLast);
    return Math.max(result1, result2);
};