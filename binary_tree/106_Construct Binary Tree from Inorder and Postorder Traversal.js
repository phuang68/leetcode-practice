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

//Without asking for more space
const buildTree = (inorder, postorder) => {
    const construct = (inS, inE, postS, postE) => {
        if (postS > postE || inS > inE) { // Pointers intersect return null
            return null;
        }
        const rootVal = postorder[postE];
        const root = new TreeNode(rootVal);

        let mid = inS;
        for (; mid <= inE; mid++) {
            if (inorder[mid] == rootVal) break;
        }
        //Number of nodes in the left tree
        const leftNodeNum = mid - inS;

        root.left = construct(inS, mid - 1, postS, postS + leftNodeNum - 1); //Left tree
        root.right = construct(mid + 1, inE, postS + leftNodeNum, postE - 1); // Right tree

        return root; // return constructed tree
    };

    return construct(0, inorder.length - 1, 0, postorder.length - 1);
};