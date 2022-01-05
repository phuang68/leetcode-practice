/**
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//左闭右闭
var searchRange = function (nums, target) {
    const search = (nums, target, isLeft) => {
        let l = 0, r = nums.length - 1;
        let res = -1;
        while (l <= r) {
            let mid = (l + r) >> 1;
            if (nums[mid] < target) {
                l = mid + 1;
            } else if (nums[mid] > target) {
                r = mid - 1;
            } else {
                res = mid;
                if (isLeft) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
        }
        return res;
    }

    let res = [-1, -1];
    res[0] = search(nums, target, true);
    res[1] = search(nums, target, false);
    return res;
};

//左闭右开
var searchRange = function (nums, target) {
    const search = (nums, target, isLeft) => {
        let l = 0, r = nums.length;
        let res = -1;
        while (l < r) {
            let mid = (l + r) >> 1;
            if (nums[mid] < target) {
                l = mid + 1;
            } else if (nums[mid] > target) {
                r = mid;
            } else {
                res = mid;
                if (isLeft) {
                    r = mid;
                } else {
                    l = mid + 1;
                }
            }
        }
        return res;
    }

    let res = [-1, -1];
    res[0] = search(nums, target, true);
    res[1] = search(nums, target, false);
    return res;
};