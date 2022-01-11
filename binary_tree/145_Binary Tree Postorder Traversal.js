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
var postorderTraversal = function(root) {
    const res = [];
    const postorder = (cur) => {
        if(!cur) return;
        postorder(cur.left);
        postorder(cur.right);
        res.push(cur.val);
    }
    postorder(root);
    return res;
};

//Loop method
var postorderTraversal = function(root) {
    const res = [];
    const st = [];
    if(root == null) return res;
    st.push(root);
    while(st.length){
        let cur = st.pop();
        res.push(cur.val); //mid
        if(cur.left) st.push(cur.left);//left
        if(cur.right) st.push(cur.right);//right
    }
    return res.reverse();
};

//Unified loop method
var postorderTraversal = function(root) {
    const res = [];
    const st = [];
    if(root == null) return res;
    st.push(root);
    while(st.length){
        let cur = st[st.length - 1];
        if(cur){
            st.pop();
            st.push(cur);
            st.push(null);

            if(cur.right) st.push(cur.right);
            if(cur.left) st.push(cur.left);
        }else{
            st.pop();
            cur = st.pop();
            res.push(cur.val);
        }
    }
    return res
};