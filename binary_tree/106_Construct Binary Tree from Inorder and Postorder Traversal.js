var buildTree = function (inorder, postorder) {
    //When the inorder arr is empty
    if (inorder.length == 0 || postorder.length == 0) return null;
    //Construct the root node
    let root_val = postorder[postorder.length - 1];
    let root = new TreeNode(root_val);
    //When there's only one node in inorder arr
    if (inorder.length == 1 || postorder.length == 1) return root;
    //We find the root_val in the inorder array
    let pivot = 0;
    for (; pivot < inorder.length; pivot++) {
        if (inorder[pivot] === root_val) break;
    }
    //Reconstruct the inorder arr and the postorder arr for left tree and right tree
    let inorder_left = inorder.slice(0, pivot);
    let inorder_right = inorder.slice(pivot + 1);
    let postorder_left = postorder.slice(0, inorder_left.length);
    let postorder_right = postorder.slice(inorder_left.length, postorder.length - 1);
    
    root.left = buildTree(inorder_left, postorder_left);
    root.right = buildTree(inorder_right, postorder_right);

    return root;
};