/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const res = [];
    const path = [];
    const used = new Array(nums.length).fill(0)
    nums.sort((a, b) => { return a - b });//Sort array beforehand for removing duplicates
    const backtrack = (nums, used) => {
        //Collect path when having all the elements 
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            //used[i-1] == false means that the former one is used on the same level, used[i-1] == true means that the former one is used in the same path
            //We skip where nums[i-1] is the same as nums[i]
            if (!used[i - 1] && i > 0 && nums[i] === nums[i - 1]) continue;
            //used[i] can be selected
            if (!used[i]) {
                used[i] = 1;
                path.push(nums[i]);
                backtrack(nums, used);
                used[i] = 0;
                path.pop();
            }
        }
    }
    backtrack(nums, used);
    return res;
};