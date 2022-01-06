/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Using two loops
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            if (map.get(target - nums[i]) != i)
                return [map.get(target - nums[i]), i];
        }
    }
};

//Using one loop
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
};