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
 * @param {number} targetSum
 * @return {boolean}
 */
//Preorder traversal,  we want to traversal the whole tree and deal with the return val
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    const pathSum = (node, target) => {
        if (!node.left && !node.right) {
            if (target == 0) return true;
            else return false;
        }

        if (node.left) {
            target -= node.left.val;
            if (pathSum(node.left, target)) return true;
            target += node.left.val;
        }

        if (node.right) {
            target -= node.right.val;
            if (pathSum(node.right, target)) return true;
            target += node.right.val;
        }
        return false;
    }

    return pathSum(root, targetSum - root.val);
};

//Iterative method for pre order traversal
var hasPathSum = function (root, targetSum) {
    const st = [];
    if (root) st.push([root, root.val]);
    while (st.length) {
        let cur = st.pop();//Mid
        if (!cur[0].left && !cur[0].right && cur[1] == targetSum) {
            return true;
        }

        if (cur[0].right) {//Right
            st.push([cur[0].right, cur[1] + cur[0].right.val]);
        }

        if (cur[0].left) {//Left
            st.push([cur[0].left, cur[1] + cur[0].left.val]);
        }
    }
    return false;
};