/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    const res = [];
    const path = [];
    nums.sort((a, b) => { return a - b });//Sort nums for removing duplicates
    const backtrack = (nums, startIndex) => {
        res.push([...path]);

        if (startIndex >= nums.length) {
            return;
        }

        for (let i = startIndex; i < nums.length; i++) {
            if (i > startIndex && nums[i] === nums[i - 1]) continue;//Remove duplicate on the same level
            path.push(nums[i]);
            backtrack(nums, i + 1);
            path.pop();
        }
    }
    backtrack(nums, 0);
    return res;
};