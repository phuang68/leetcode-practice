/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

//Double Pointer
var removeElement = function (nums, val) {
    let first = 0;
    for (let second = 0; second < nums.length; second++) {
        if (nums[second] == val) continue;
        nums[first] = nums[second];
        first++;
    }
    return first;
};