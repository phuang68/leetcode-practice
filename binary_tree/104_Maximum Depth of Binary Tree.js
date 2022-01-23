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

//Pre-order traversal
var maxDepth = function (root) {
    let res = 0;
    if (!root) return res;//Edge case: when root is null
    const preOrderDepth = (cur, dep) => {
        res = dep > res ? dep : res;

        if (!cur.left && !cur.right) return;//Edge case: when the node doesn't have children that aren't leaf node

        if (cur.left) {//We probe the left node if it's not leaf node
            dep++;
            preOrderDepth(cur.left, dep);
            dep--;
        }

        if (cur.right) {//We probe the right node if it's not leaf node
            dep++;
            preOrderDepth(cur.right, dep);
            dep--;
        }

        return;
    }

    preOrderDepth(root, 1);

    return res;
};

//Post order solution
var maxDepth = function (root) {
    const postOrderDepth = (node) => {
        if (!node) return 0;
        let left = postOrderDepth = (node.left); //Left
        let right = postOrderDepth = (node.right);//Right
        let max = left > right ? left : right;
        let dep = 1 + max;//Mid
        return dep;
    }
    return postOrderDepth = (root); 
};