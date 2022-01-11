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
 * @return {TreeNode}
 */
//Preorder traversal - recursion
var invertTree = function(root) {
    const invert = (cur) => {
        if(!cur) return;
        [cur.left, cur.right] = [cur.right, cur.left];
        invert(cur.left);
        invert(cur.right);
        return;
    }
    invert(root);
    return root;
};

//Postorder traversal - recursion
var invertTree = function(root) {
    const invert = (cur) => {
        if(!cur) return;
        invert(cur.left);
        invert(cur.right);
        [cur.left, cur.right] = [cur.right, cur.left];
        return;
    }
    invert(root);
    return root;
};

//Preorder traversal - loop with stack
var invertTree = function(root) {
    const st = [];
    if(root) st.push(root)
    while(st.length){
        let cur = st.pop();
        [cur.left, cur.right] = [cur.right, cur.left];
        if(cur.left) st.push(cur.left);
        if(cur.right) st.push(cur.right);
    }
    return root;
};


//Preorder traversal - unified loop with stack
var invertTree = function(root) {
    const st = [];
    if(root) st.push(root)
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
            [cur.left, cur.right] = [cur.right, cur.left];
        }
    }
    return root;
};
//Postorder traversal - unified loop with stack
var invertTree = function(root) {
    const st = [];
    if(!root) return root;
    st.push(root);
    while(st.length){
        let cur = st.pop();
        if(!cur){
            cur = st.pop();
            [cur.left, cur.right] = [cur.right, cur.left];
        }else{
            st.push(cur);                   //mid
            st.push(null);
            if(cur.right) st.push(cur.right); // right
            if(cur.left) st.push(cur.left); // left
        }
    }
    return root;
};