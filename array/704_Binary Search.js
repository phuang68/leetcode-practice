/**
 * https://leetcode-cn.com/problems/binary-search/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//左闭右闭
var search = function (nums, target) {
    let l = 0, r = nums.length - 1;//The right border is included
    while (l <= r) {//Make sure that the right border is included
        let mid = (r + l) >> 1;
        if (nums[mid] > target) {
            r = mid - 1;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};

//左闭右开
var search = function (nums, target) {
    let l = 0, r = nums.length;//The right border is not valid therefore not assessed
    while (l < r) {//Make sure that the right border is not included
        let mid = (r + l) >> 1;
        if (nums[mid] > target) {
            r = mid;//When updating the right border, make sure the position's not valid
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};