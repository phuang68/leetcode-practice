/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    //When preorder is empty
    if (preorder.length == 0 || inorder.length == 0) return null;
    //Create root node with the first element in preorder
    let root_val = preorder[0];
    let root = new TreeNode(root_val);
    //When preorder only has one element, root node is the only thing to process
    if (preorder.length == 1 || inorder.length == 1) return root;
    //Find the position where the same value as the root_val in inorder
    let pivot = 0;
    for (; pivot < inorder.length; pivot++) {
        if (inorder[pivot] == root_val) break;
    }
    //Partition inorder and preorder for the left tree and the right tree
    let inorder_left = inorder.slice(0, pivot);
    let inorder_right = inorder.slice(pivot + 1);
    let preorder_left = preorder.slice(1, inorder_left.length + 1);
    let preorder_right = preorder.slice(inorder_left.length + 1);
    //Build the children's tree with the newly partitioned inorder and preorder
    root.left = buildTree(preorder_left, inorder_left);
    root.right = buildTree(preorder_right, inorder_right);

    return root;
}