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
 * @return {boolean}
 */
//Post order to get the depth of the left node and the right node, make note of the depth difference more than 1 by returning -1;
var isBalanced = function (root) {
    const getDepth = (node) => {
        if (!node) return 0;

        let left = getDepth(node.left);//Left
        if (left === -1) return -1;
        let right = getDepth(node.right);//Right
        if (right === -1) return -1;
        //Mid
        if (Math.abs(left - right) > 1) {
            return -1;
        } else {
            return 1 + Math.max(left, right);
        }
    }
    return getDepth(root) === -1 ? false : true;
};