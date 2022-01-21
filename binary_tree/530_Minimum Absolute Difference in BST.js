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
 * @return {number}
 */

//Recursive method: Inorder traversal fro BST
var getMinimumDifference = function (root) {
    let min = Number.MAX_VALUE;
    pre = null;
    const inorder = (node) => {
        if (!node) return;

        inorder(node.left);

        if (pre && node.val - pre.val < min) {
            min = node.val - pre.val;
        }
        pre = node;

        inorder(node.right);

        return;
    }
    inorder(root);
    return min;
};

//Iterative method
var getMinimumDifference = function (root) {
    const st = [];
    let min = Number.MAX_VALUE;
    let pre = null;
    let cur = root;
    while (cur || st.length) {
        if (cur) {
            st.push(cur);
            cur = cur.left;
        } else {
            cur = st.pop();

            if (pre) {
                min = Math.min(min, cur.val - pre.val);
            }

            pre = cur;
            cur = cur.right;
        }
    }

    return min;
};