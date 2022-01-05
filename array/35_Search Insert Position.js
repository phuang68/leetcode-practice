/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//左闭右开[left, right)_
var searchInsert = function (nums, target) {
    let l = 0, r = nums.length;
    while (l < r) {
        let mid = (l + r) >> 1;
        if (nums[mid] < target) {
            l = mid + 1;
        } else if (nums[mid] > target) {
            r = mid;
        } else {
            return mid;
        }
    }
    return l;
};

//左闭右闭[left, right]
var searchInsert = function (nums, target) {
    let l = 0, r = nums.length - 1;//Closed border
    while (l <= r) {//Therefore while condition has to validate the right border too
        let mid = (l + r) >> 1;
        if (nums[mid] < target) {
            l = mid + 1;
        } else if (nums[mid] > target) {
            r = mid - 1;//Keeping the definition of a closed border
        } else {
            return mid;
        }
    }
    return l;
};
