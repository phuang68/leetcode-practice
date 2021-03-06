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

//Recursive method
var preorderTraversal = function(root) {
    const res = [];
    const preorder = (cur) => {
        if(!cur) return;
        res.push(cur.val);
        preorder(cur.left);
        preorder(cur.right);
    }
    preorder(root);
    return res;
};

//Loop method
var preorderTraversal = function(root) {
    const st = []
    const res = [];
    if(root) st.push(root);
    while(st.length){
        let cur = st.pop();
        res.push(cur.val);//Mid
        if(cur.right) st.push(cur.right);//right
        //Pushing left node in the end because that's what will be popped out soon to make it preorder
        if(cur.left) st.push(cur.left);//left
    }
    return res;
};

//Unified loop method
var preorderTraversal = function(root) {
    const st = []
    const res = [];
    if(root) st.push(root);
    while(st.length){
        let cur = st[st.length - 1];
        if(cur){
            st.pop();
            if(cur.right) st.push(cur.right);   //right
            if(cur.left) st.push(cur.left);     //left
            st.push(cur);                       //mid
            st.push(null);
        }else{
            st.pop();
            cur = st.pop();
            res.push(cur.val);
        }
    }
    return res;
};