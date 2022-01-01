/**
 * https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
    const dp = new Array(nums1.length).fill(0).map(() => new Array(nums2.length).fill(0));
    var result = 0;
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                if (i > 0 && j > 0) {
                    dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1]) + 1;
                } else {
                    dp[i][j] = 1;
                }
            }
            if (result < dp[i][j]) result = dp[i][j];
        }
    }
    return result;
};

//Refined solution: Expanding the space of dp
var findLength = function (nums1, nums2) {
    const dp = new Array(nums1.length + 1).fill(0).map(() => new Array(nums2.length + 1).fill(0));
    var result = 0;
    for (let i = 1; i <= nums1.length; i++) {
        for (let j = 1; j <= nums2.length; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            if (result < dp[i][j]) result = dp[i][j];
        }
    }
    return result;
};

//More refined solution: Using 1d array of dp
var findLength = function (nums1, nums2) {
    const dp = new Array(nums2.length + 1).fill(0);
    var result = 0;
    for (let i = 1; i <= nums1.length; i++) {
        for (let j = nums2.length; j > 0; j--) {//Iterating backwards to avoid repitition
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[j] = dp[j - 1] + 1;
            } else {
                dp[j] = 0;//Need to make it zero if both characters aren't the same
            }
            if (result < dp[j]) result = dp[j];
        }
    }
    return result;
};