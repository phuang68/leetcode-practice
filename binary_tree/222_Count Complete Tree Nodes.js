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

//Post order counting
var countNodes = function (root) {
    const postOrder = (node) => {
        if (!node) return 0;

        let left = postOrder(node.left);
        let right = postOrder(node.right);
        let sum = left + right + 1;

        return sum;
    }
    return postOrder(root);
};

//Level order 
var countNodes = function (root) {
    const queue = [];
    var count = 0
    if (root) queue.push(root);
    while (queue.length) {
        let len = queue.length;
        count += len;
        for (let i = 0; i < len; i++) {
            let cur = queue.shift();
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
    }
    return count;
};