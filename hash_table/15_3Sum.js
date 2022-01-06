/**
 * https://leetcode-cn.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
//Double pointer, more efficient, Time complexity = O(n^2)
var threeSum = function (nums) {
    if (nums.length < 3) return [];
    const res = [];
    nums = nums.sort((a, b) => { return a - b });
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0)
            break;

        if (i > 0 && nums[i] == nums[i - 1])//Skipping the duplicates
            continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            if (nums[left] + nums[right] + nums[i] < 0) {
                left++;
            } else if (nums[left] + nums[right] + nums[i] > 0) {
                right--;
            }
            else {
                res.push([nums[left], nums[i], nums[right]]);
                //Removing the duplicates
                while (left < right && nums[left] == nums[left + 1]) left++;
                while (left < right && nums[right] == nums[right - 1]) right--;

                left++;
                right--;
            }
        }
    }
    return res;
};

//Using set, less efficient, Time Complexity = O(n^2)
var threeSum = function (nums) {
    if (nums.length < 3) return [];
    const res = [];
    nums.sort((a, b) => { return a - b });
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0)//If the first element is higher than 0, there's no way there are 3 elements can add up to 0
            break;

        if (i > 0 && nums[i] == nums[i - 1])//Skip the duplicate
            continue;

        const set = new Set();
        for (let j = i + 1; j < nums.length; j++) {
            if (j > i + 2 && nums[j] == nums[j - 1] && nums[j - 2] == nums[j - 1]) {//Skip the duplicate
                continue;
            }

            let c = 0 - (nums[i] + nums[j]);
            if (set.has(c)) {
                res.push([c, nums[i], nums[j]]);
                set.delete(c);
            } else {
                set.add(nums[j])
            }
        }
    }
    return res;
};