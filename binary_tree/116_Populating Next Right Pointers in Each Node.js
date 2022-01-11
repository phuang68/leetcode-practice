/**
 * https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    const queue = [];
    if(!root) return root;
    queue.push(root);
    while(queue.length){
        let len = queue.length;
        let pre, cur;
        for(let i = 0; i < len; i++){
            if(i === 0){
                pre = queue.shift();
                cur = pre;
            }else{
                cur = queue.shift();
                pre.next = cur;
                pre = cur;                
            }
            if(cur.left) queue.push(cur.left);
            if(cur.right) queue.push(cur.right);            
        }
        cur.next = null;
    }
    return root;
};