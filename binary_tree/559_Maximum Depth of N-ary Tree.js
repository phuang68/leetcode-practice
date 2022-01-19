/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */

//Pre order solution
var maxDepth = function (root) {
    let res = 0;
    if (!root) return res;
    const preOrderDepth = (node, dep) => {
        res = res > dep ? res : dep;

        if (!node.children) return;

        for (const child of node.children) {
            dep++;
            preOrderDepth(child, dep);
            dep--;
        }
        return;
    }
    preOrderDepth(root, 1);
    return res;
};

//PostOrder
var maxDepth = function (root) {
    if (!root) return 0;
    const postOrderDepth = (node) => {
        if (!node) return 0;
        let dep = 0;
        for (const child of node.children) {
            dep = Math.max(dep, postOrderDepth(child));
        }
        return dep + 1;
    }
    return postOrderDepth(root);
};

//Level order traversal solution
var maxDepth = function (root) {
    const queue = [];
    let max = 0;
    if (!root) return max;
    queue.push(root);
    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let cur = queue.shift();
            if (cur.children) {
                for (const child of cur.children) {
                    queue.push(child);
                }
            }
        }
        max++;
    }
    return max;
};