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
var findBottomLeftValue = function (root) {
    let maxDep = Number.MIN_SAFE_INTEGER;
    let maxLeftVal;
    const preOrder = (node, dep) => {
        if (!node.left && !node.right) {
            if (dep > maxDep) {
                maxDep = dep;
                maxLeftVal = node.val;
            }
            return;
        }

        if (node.left) {
            dep++;
            preOrder(node.left, dep);
            dep--;
        }

        if (node.right) {
            dep++;
            preOrder(node.right, dep);
            dep--;
        }
        return;
    }
    preOrder(root, 1);//Assume the first node has a dep of 1;
    return maxLeftVal;
};

//Level order traversal, when we reach to the very last level, the first element is the bottom left node.
var findBottomLeftValue = function (root) {
    const queue = [];
    if(root) queue.push(root);
    let maxVal;
    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let cur = queue.shift();
            if (i === 0) maxVal = cur.val;
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
    }
    return maxVal;
};