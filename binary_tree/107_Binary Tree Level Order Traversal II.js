/**
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    const queue = [];
    const res = [];
    if(root) queue.push(root);
    while(queue.length){
        let size = queue.length;
        const level = [];
        for(let i = 0; i < size; i++){
            let cur = queue.shift();
            level.push(cur.val);
            if(cur.left) queue.push(cur.left);
            if(cur.right) queue.push(cur.right);
        }
        res.push(level);
    }
    return res.reverse();
};