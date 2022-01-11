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

//Reursive method
var isSymmetric = function(root) {
    const checkSym = (left, right) => {
        if(!left && right) return false;
        else if(left && !right) return false;
        else if(!left && !right) return true;
        else if(left.val !== right.val) return false;

        return checkSym(left.left, right.right) && checkSym(left.right, right.left);
    }
    return checkSym(root.left, root.right);
};