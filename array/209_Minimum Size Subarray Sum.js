/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

//Sliding Window
var minSubArrayLen = function (target, nums) {
    let l = r = 0;
    let sum = 0;
    let sublength = 0;
    let result = 100000;//Because the constraints is nums.length <= 10^5
    for (; r < nums.length; r++) {
        if (sum < target) sum += nums[r];
        while (sum >= target) {
            sublength = r - l + 1;
            result = Math.min(result, sublength);
            sum -= nums[l++];
        }
    }
    return result != 100000 ? result : 0;
};