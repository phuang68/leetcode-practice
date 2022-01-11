/**
 * https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    const queue = [];
    const res = [];
    if(root) queue.push(root);
    while(queue.length){
       let len = queue.length;
       let max = Number.MIN_VALUE;
       for(let i = 0; i < len; i++){
           let cur = queue.shift();
           max = Math.max(max, cur.val);
           if(cur.left) queue.push(cur.left);
           if(cur.right) queue.push(cur.right);
       }
       res.push(max);
    }
    return res;
};