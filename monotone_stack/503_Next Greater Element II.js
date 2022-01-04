/**
 * https://leetcode-cn.com/problems/next-greater-element-ii/
 * @param {number[]} nums
 * @return {number[]}
 */

//Monotone stack && simulate circular array by iterating through the same array twice
var nextGreaterElements = function (nums) {
    const res = new Array(nums.length).fill(-1);
    const mstk = [];
    mstk.push(0);
    for (let i = 1; i < nums.length * 2; i++) {
        if (nums[mstk[mstk.length - 1]] > nums[i % nums.length]) {
            mstk.push(i % nums.length);
        } else if (nums[mstk[mstk.length - 1]] == nums[i]) {
            mstk.push(i % nums.length);
        } else {
            while (mstk.length > 0 && nums[mstk[mstk.length - 1]] < nums[i % nums.length]) {
                let top = mstk.pop();
                res[top] = nums[i % nums.length];
            }
            mstk.push(i % nums.length);
        }
    }

    return res;
};