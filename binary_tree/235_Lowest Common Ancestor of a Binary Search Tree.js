/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

//We need to find the node that falls between p and q and that's the LCA
//Iterative method
var lowestCommonAncestor = function (root, p, q) {
    while (root) {
        if (root.val > p.val && root.val > q.val) {
            root = root.left
            continue;
        }

        if (root.val < p.val && root.val < q.val) {
            root = root.right;
            continue;
        }

        return root;
    }
};

//Recursive method
var lowestCommonAncestor = function (root, p, q) {
    if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);
    if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q);
    return root;
};