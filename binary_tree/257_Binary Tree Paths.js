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
 * @return {string[]}
 */

//Printing all the paths use pre order traversal
var binaryTreePaths = function(root) {
    const res = [];
    const preOrder = (node, path) => {
        path.push(node.val);//Mid
        //Terminating condition should be finding the leaf node, leaf node is a valid node with no left and right nodes
        if(!node.right && !node.left){
            res.push(path.join('->'));//Joining the nodes with ->
            return;
        }
        //Left
        if(node.left){
            preOrder(node.left, path);
            path.pop();
        }
        //Right
        if(node.right){
            preOrder(node.right, path);
            path.pop();
        }
        return;
    }
    if(!root) return res;
    preOrder(root, []);
    return res;
};

//Post order traversal
var binaryTreePaths = function (root) {
    const res = [];
    const path = [];//Stores all the strings of path of the current node
    const st = [];
    if (root) {
        st.push(root);
        path.push(root.val);
    }
    while (st.length) {
        let cur = st.pop();
        let p = path.pop();

        if (!cur.left && !cur.right) {//Mid
            res.push(p);
        }

        if (cur.right) {//Right
            st.push(cur.right);
            path.push(p + '->' + String(cur.right.val));
        }

        if (cur.left) {//Left
            st.push(cur.left);
            path.push(p + '->' + String(cur.left.val));
        }
    }
    return res;
};