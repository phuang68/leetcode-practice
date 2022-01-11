/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const queue = [];
    const res = [];
    if(root) queue.push(root);
    while(queue.length){
        let len = queue.length;
        let lev = [];
        for(let i = 0; i < len; i++){
            let cur = queue.shift();
            lev.push(cur.val);
            for(const child of cur.children){
                queue.push(child);
            }
        }
        res.push(lev);
    }
    return res;
};