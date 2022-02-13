/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
    if (nums.length <= 1) return nums.length;
    let res = 1;//We assume on the right there's at least one element either higher or lower than the element before
    let curDiff = preDiff = 0;//We use the difference of previous elements and current elements to determine the wiggleness
    for (let i = 0; i < nums.length - 1; i++) {
        curDiff = nums[i + 1] - nums[i];
        //preDiff == 0 is used under the case where there's only 2 elements, we treat it as if we have 3 so that there exist preDiff and currDiff.
        //Only update the preDiff when curDiff has a contrast with preDiff
        if ((preDiff <= 0 && curDiff > 0) || (preDiff >= 0 && curDiff < 0)) {
            res++;
            preDiff = curDiff;//Update to preDiff
        }
    }
    return res;
};

//Dynamic Programming
var wiggleMaxLength = function (nums) {
    const dp = new Array(nums.length).fill([]).map(() => [1, 1]);//dp二维数组, 每一个元素数组存了当前数字作为前面n个数字的山谷和作为山峰的摆动序列最大长度

    for (let i = 1; i < nums.length; ++i) {//从1开始因为我们总是知道至少会有一个

        for (let j = 0; j < i; ++j) {
            if (nums[j] > nums[i]) dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1); //i作为山谷
        }

        for (let j = 0; j < i; ++j) {
            if (nums[j] < nums[i]) dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1); //i作为山峰
        }
    }

    return Math.max(dp[nums.length - 1][0], dp[nums.length - 1][1]);
};