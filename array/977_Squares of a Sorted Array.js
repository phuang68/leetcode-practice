/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let l = 0, r = nums.length - 1;
    const arr = new Array(nums.length);
    let k = nums.length - 1;
    while (l <= r && k >= 0) {//l <= r needs to deal with the last two elements
        if (Math.abs(nums[l]) < Math.abs(nums[r])) {
            arr[k] = nums[r] * nums[r];
            r--;
        } else {
            arr[k] = nums[l] * nums[l];
            l++;
        }
        k--;
    }
    return arr;
};