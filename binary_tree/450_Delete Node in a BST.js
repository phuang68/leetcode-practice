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
 * @param {number} key
 * @return {TreeNode}
 */

//Recursive method
var deleteNode = function (root, key) {
    //Case 0: the delete node doesn't exist
    if (!root) return null;
    if (root.val === key) {
        //Case 1: the delete node doesn't have any children
        if (!root.left && !root.right) return null;
        //Case 2: the delete node doesn't have a right tree
        else if (root.left && !root.right) return root.left;
        //Case 3: the delete node doesn't have a left tree
        else if (!root.left && root.right) return root.right;
        //Case 4: the delete node has a left tree and a right tree
        else {
            let cur = root.right;
            while (cur.left) cur = cur.left;
            cur.left = root.left;
            root = root.right;
            return root;
        }
    }
    if (root.val > key) root.left = deleteNode(root.left, key);
    if (root.val < key) root.right = deleteNode(root.right, key);
    return root;
};