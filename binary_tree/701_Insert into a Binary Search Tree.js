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
//Recursive method
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

//Shorter recursive method
var insertIntoBST = function (root, val) {
    if (!root) {
        return new TreeNode(val);
    }

    if (root.val > val) root.left = insertIntoBST(root.left, val);
    if (root.val < val) root.right = insertIntoBST(root.right, val);

    return root;
};

//Iterative method
var insertIntoBST = function (root, val) {
    let cur = root;
    let pre = null;
    while (cur) {
        if (cur.val > val) {
            pre = cur;
            cur = cur.left;
        } else {
            pre = cur;
            cur = cur.right;
        }
    }
    let new_node = new TreeNode(val);
    if (!pre) return new_node;
    if (pre.val > val) pre.left = new_node;
    else pre.right = new_node;

    return root;
};