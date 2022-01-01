/**
 * https://leetcode-cn.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */

//Greedy Algorithm
var maxSubArray = function (nums) {
    var max = -Number.MAX_VALUE, sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > max) max = sum;
        if (sum < 0) sum = 0;//当sum小于0的时候就要重新算sum
    }
    return max;
};

//DP
var maxSubArray = function (nums) {
    const dp = new Array(nums.length).fill(0);
    dp[0] = nums[0]
    var result = dp[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
        if (dp[i] > result) result = dp[i]
    }

    return result;
};