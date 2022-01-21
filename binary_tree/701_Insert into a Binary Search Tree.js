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
var insertIntoBST = function (root, val) {
    let parent = new TreeNode(0);
    if (!root) return new TreeNode(val);
    const traversal = (cur, val) => {
        if (!cur) {
            if (val > parent.val) parent.right = new TreeNode(val);
            else parent.left = new TreeNode(val);
            return;
        }

        parent = cur;
        if (cur.val > val) traversal(cur.left, val);
        if (cur.val < val) traversal(cur.right, val);
        return;
    }
    traversal(root, val);
    return root;
};