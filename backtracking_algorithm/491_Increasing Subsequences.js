/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    const res = [];
    const path = [];
    const backtrack = (nums, startIndex) => {
        if (path.length >= 2) {
            res.push([...path]);
        }

        if (startIndex >= nums.length) {
            return;
        }
        let set = new Array(201).fill(0);//Because of limited range [-100, 100], we use an array as a set
        for (let i = startIndex; i < nums.length; i++) {
            if ((path.length > 0 && nums[i] < path[path.length - 1]) || set[nums[i] + 100]) continue; //Remove any duplicates or non-ascending number

            set[nums[i] + 100] = 1;
            path.push(nums[i]);
            backtrack(nums, i + 1);
            path.pop();
        }
    }
    backtrack(nums, 0);
    return res;
};