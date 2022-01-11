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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const que = [];
    const res = [];
    if(root) que.push(root);
    while(que.length){
        let len = que.length;
        let sum = 0;
        for(let i = 0; i < len; i++){
            let cur = que.shift();
            sum += cur.val;
            if(cur.left) que.push(cur.left);
            if(cur.right) que.push(cur.right);
        }
        res.push(sum / len);
    }
    return res;
};