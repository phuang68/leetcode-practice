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

//Level order, Time Complexity = O(n) because of the while loop, Space Complexity = O(n) because of the queue;
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

//Recursive method based on complete tree's trait that it's either a full tree or the last level isn't full
var countNodes = function (root) {
    if (!root) return 0;
    //Determine the height of the left node and the height of the right node
    let left = root.left;
    let right = root.right;
    let leftHeight = 0;
    let rightHeight = 0;
    while (left) {
        left = left.left;
        leftHeight++;
    }
    while (right) {
        right = right.right;
        rightHeight++;
    }
    //If both of the heights of left node and right node are the same, it is a full tree
    if (rightHeight == leftHeight) {
        return (2 << leftHeight) - 1;
    }

    return countNodes(root.left) + countNodes(root.right) + 1;
};