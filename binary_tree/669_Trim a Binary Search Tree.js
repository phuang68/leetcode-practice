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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
//Recursive method
var trimBST = function (root, low, high) {
    //Case 0: If the node is empty
    if (!root) return null;
    //Case 1: If the node is lower than low
    if (root.val < low) {
        //Trim the left tree because all the nodes in the left is smaller than that node
        return trimBST(root.right, low, high);
    }
    //Case 2: If the node is higher than high
    else if (root.val > high) {
        //Trim the right tree because all the nodes in the right is higher than that node
        return trimBST(root.left, low, high);
    }
    //Case 3: If the node falls between low and high
    else {
        root.left = trimBST(root.left, low, high);
        root.right = trimBST(root.right, low, high);
        return root;
    }
};

//Iterative method: we don't need to use a stack given the order features of BST
var trimBST = function (root, low, high) {
    //Step 1: If the node is empty
    if (!root) return null;
    //Step 2: Make the root fall between low and high
    while (root && (root.val < low || root.val > high)) {
        if (root.val < low) root = root.right;
        else root = root.left
    }
    let cur = root;
    //Step 3: Trim the nodes that falls out low
    while (cur) {
        //Trim the left tree because all the nodes in the left is smaller than that node
        while (cur.left && cur.left.val < low) {
            cur.left = cur.left.right;
        }
        cur = cur.left;
    }
    cur = root
    //Step 4: Trim the nodes that falls out high
    while (cur) {
        //Trim the right tree because all the nodes in the right is higher than that node
        while (cur.right && cur.right.val > high) {
            cur.right = cur.right.left;
        }
        cur = cur.right;
    }

    return root;
};