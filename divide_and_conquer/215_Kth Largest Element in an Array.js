/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const partition = (nums, l, r) => {//We can move an element to its position after sort
        let pivot = nums[r]; //Make nums[r] the pivot element
        let i = l;
        for (let j = l; j < r; j++) {
            if (nums[j] < pivot) {//put any element smaller than pivot to the left
                [nums[i], nums[j]] = [nums[j], nums[i]];
                i++;
            }
        }
        [nums[r], nums[i]] = [nums[i], nums[r]];//We swap the pivot with the new position
        return i;
    }
    let left = 0, right = nums.length - 1;
    let target = nums.length - k;//With partition's feature nums.length - k would be the kth largest element should be at
    while (left <= right) {
        let pivot = partition(nums, left, right);//we keep partitioning until we reach to the position
        if (pivot > target) right = pivot - 1;
        else if (pivot < target) left = pivot + 1;
        else return nums[pivot];
    }
};