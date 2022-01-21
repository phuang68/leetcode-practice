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
//Recursive method using max val to keep count the order
var isValidBST = function (root) {
    let max = Number.MIN_SAFE_INTEGER;
    const inorder = (node) => {
        if (!node) return true;

        let left = inorder(node.left);

        if (max < node.val) max = node.val;
        else return false;

        let right = inorder(node.right);

        return left && right;
    }
    return inorder(root);
};
//Recursive method using pre node to compare with the current and make sure it's in an ascending order
var isValidBST = function (root) {
    var pre = null;
    const inorder = (node) => {
        if (!node) return true;

        let left = inorder(node.left);

        if (pre && pre.val >= node.val) return false;;
        pre = node;

        let right = inorder(node.right);

        return left && right;
    }
    return inorder(root);
};

//Iterative method:
var isValidBST = function (root) {
    const st = [];
    let pre = null;
    let cur = root
    while (cur || st.length) {
        if (cur) {
            st.push(cur);
            cur = cur.left; //left
        } else {
            cur = st.pop();//mid
            if (pre && cur.val <= pre.val) return false;
            pre = cur;
            cur = cur.right;//right
        }
    }
    return true;
};