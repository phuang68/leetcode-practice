/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    const contruct = (nums, left, right) => {
        if (left >= right) return null; //Pointers intersect return null

        let maxIndex = left;
        for (let i = left + 1; i < right; i++) {
            if (nums[i] > nums[maxIndex]) {
                maxIndex = i;
            }
        }

        let root = new TreeNode(nums[maxIndex]);
        //[left, maxIndex)
        root.left = contruct(nums, left, maxIndex);
        //[maxIndex + 1, right)
        root.right = contruct(nums, maxIndex + 1, right);

        return root;
    }
    return contruct(nums, 0, nums.length);
};