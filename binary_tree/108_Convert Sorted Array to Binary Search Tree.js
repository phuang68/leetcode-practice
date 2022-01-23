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

//Recursive method: [left, right]
var sortedArrayToBST = function (nums) {
    const toBST = (nums, left, right) => {
        if (left > right) return null;

        let mid = (left + right) >> 1;
        const root = new TreeNode(nums[mid]);

        root.left = toBST(nums, left, mid - 1);
        root.right = toBST(nums, mid + 1, right);

        return root;
    }
    return toBST(nums, 0, nums.length - 1);
};