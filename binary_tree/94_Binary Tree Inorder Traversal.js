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
var inorderTraversal = function(root) {
    const res = [];
    const inorder = (cur) => {
        if(!cur) return;
        inorder(cur.left);
        res.push(cur.val);
        inorder(cur.right);
    }
    inorder(root);
    return res;
};

//Pointer + loop
var inorderTraversal = function(root) {
    const st = []
    const res = [];
    if(!root) return res;;
    let cur = root;
    while(cur || st.length){
        if(cur){
            st.push(cur);
            cur = cur.left;
        }else{
            cur = st.pop();
            res.push(cur.val);
            cur = cur.right;
        }
    }
    return res;
};

//Unified loop method
var inorderTraversal = function(root) {
    const st = []
    const res = [];
    if(!root) return res;;
    st.push(root)
    while(st.length){
        let cur = st[st.length - 1];
        if(cur){
            st.pop();
            if(cur.right) st.push(cur.right);//right

            st.push(cur);//mid
            st.push(null);

            if(cur.left) st.push(cur.left);//left
        }else{
            st.pop();
            cur = st.pop();
            res.push(cur.val);
        }
    }
    return res;
};