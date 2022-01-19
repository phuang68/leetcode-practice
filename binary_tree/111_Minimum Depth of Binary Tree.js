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

//Level order traversal
var minDepth = function(root) {
    const queue = [];
    var dep = 0;
    var min = Number.MAX_VALUE;
    if(root) queue.push(root);
    while(queue.length){
        let len = queue.length;
        dep++;
        while(len){
            let cur = queue.shift();
            if(cur.left) queue.push(cur.left);
            if(cur.right) queue.push(cur.right);
            len--;
            if(!cur.left && !cur.right) min = Math.min(min, dep);
        }
    }
    return min == Number.MAX_VALUE ? 0 : min;
};

//Post order traversal
var minDepth = function (root) {
    const postOrder = (node) => {
        if (!node) return 0;

        let left = postOrder(node.left);//Left
        let right = postOrder(node.right);//Right
        //Mid
        if (!node.left && node.right) {//If there's no left node, the minimum is the right node's depth + 1
            return 1 + right;
        }

        if (!node.right && node.left) {//If there's no right node, the minimum is the left node's depth + 1
            return 1 + left;
        }

        let min = 1 + Math.min(left, right);//If both 
        return min;
    }
    if (!root) return 0;
    return postOrder(root);
};