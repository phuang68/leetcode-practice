/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    nums.sort((a, b) => { return Math.abs(b) - Math.abs(a) });//把数组排序, 从大到小, 其负数形式拥有同样比重值
    var largestk = 0;

    for (let i = 0; i < nums.length; i++) {//从绝对值大到小开始取反
        if (nums[i] < 0 && k > 0) {
            nums[i] = Math.abs(nums[i]);
            k--;
        }
    }

    if (k > 0) {//如果取反完了之后, 我们挑最小的正整数开师取反k次
        if (k % 2 == 1) nums[nums.length - 1] *= -1;
    }

    for (let i = 0; i < nums.length; i++) {//最后sum it up 获得结果
        largestk += nums[i];
    }

    return largestk;
};