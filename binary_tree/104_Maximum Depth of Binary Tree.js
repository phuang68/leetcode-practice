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
var maxDepth = function(root) {
    const queue = [];
    var dep = 0;
    if(root) queue.push(root);
    while(queue.length){
        let len = queue.length;
        dep++;
        while(len){
            let cur = queue.shift();
            if(cur.left) queue.push(cur.left);
            if(cur.right) queue.push(cur.right);
            len--;
        }
    }
    return dep;
};