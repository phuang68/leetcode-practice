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
 * @return {number}
 */
var minCameraCover = function (root) {
    let res = 0;
    const traversal = (cur) => {
        // case 0: the current node isn't monitored;
        // case 1: the current node has a camera;
        // case 2: the current node is monitored

        if (!cur) return 2;//If it's empty, make sure that its parent puts a camera so that its covered

        var left = traversal(cur.left);
        var right = traversal(cur.right);

        if (left == 2 && right == 2) return 0;//If both of the children node are monitored, aka a leaf node, that means the current node isn't monitored

        //If either one of the children nodes is not monitor, we need to put one camera
        if (left == 0 || right == 0) {
            res++;
            return 1;
        }

        //If either one of the children node has a camera, means that the current node is monitored
        if (left == 1 || right == 1) return 2;
    }
    if (traversal(root) == 0) res++;
    return res;
};