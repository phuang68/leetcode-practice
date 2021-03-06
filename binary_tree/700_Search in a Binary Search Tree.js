/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

//Iterative method, Time Complexity = O(logn)
var searchBST = function (root, val) {
    while (root) {
        if (root.val > val) root = root.left;
        else if (root.val < val) root = root.right;
        else return root;
    }
    return null;
};

//Recursive method
var searchBST = function (root, val) {
    //Terminating condition: when node is empty or the node with same val is found
    if (!root || root.val === val) return root;

    if (root.val > val) {
        return searchBST(root.left, val);
    } else if (root.val < val) {
        return searchBST(root.right, val);
    }
};