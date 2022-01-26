/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = [];
    const path = [];

    const backtrack = (nums, startIndex) => {
        res.push([...path]); //Collecting results before the terminating condition, or else gonna miss the empty set       
        if (startIndex == nums.length) {
            return;
        }

        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(nums, i + 1);
            path.pop();
        }
    }
    backtrack(nums, 0);
    return res;
};