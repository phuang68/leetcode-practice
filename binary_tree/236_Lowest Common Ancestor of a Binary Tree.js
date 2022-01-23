/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root || root.val === p.val || root.val === q.val) return root;

    let left = lowestCommonAncestor(root.left, p, q);//Left
    let right = lowestCommonAncestor(root.right, p, q);//Right
    if (left && right) return root;//Mid

    if (!left && right) { //If left is empty, right has the result
        return right;
    }
    else if (!right && left) {//If right is empty, left has the result
        return left;
    }
    else if (!right && !left) {//If both of them are empty ,there's no lowest common ancestor.
        return null;
    }
};