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
 * @return {TreeNode}
 */

//Iterative method:
var convertBST = function (root) {
    const st = [];
    if (!root) return root;
    let cur = root;
    let pre = 0;
    while (cur || st.length) {
        if (cur) {
            st.push(cur);
            cur = cur.right; //右
        } else {
            cur = st.pop(); //中
            cur.val += pre;
            pre = cur.val;
            cur = cur.left; //左
        }
    }
    return root;
};

//Recursive method: using a pre node to add with the current node, reverse inorder
var convertBST = function (root) {
    let pre = null;
    const convert = (cur) => {
        if (!cur) return;

        convert(cur.right);

        if (pre) cur.val += pre.val;
        pre = cur;

        convert(cur.left);
    }
    convert(root);
    return root;
};