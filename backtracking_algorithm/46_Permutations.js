/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = [];
    const path = [];
    const used = new Array(nums.length).fill(0)
    const backtrack = (nums, used) => {//StartIndex isn't needed because iteration starts at 0 every time
        //Collect result when a permutation is found
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;//Skip any used nums

            used[i] = 1;
            path.push(nums[i]);
            backtrack(nums, used);
            used[i] = 0;
            path.pop();
        }
    }
    backtrack(nums, used);
    return res;
};