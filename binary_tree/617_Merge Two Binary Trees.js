/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

//Iterative method
var mergeTrees = function (root1, root2) {
    if (!root2) return root1;
    if (!root1) return root2;
    const queue = [];
    queue.push(root1);
    queue.push(root2);
    while (queue.length) {
        let cur1 = queue.shift();
        let cur2 = queue.shift();
        cur1.val += cur2.val;

        if (cur1.left && cur2.left) {
            queue.push(cur1.left);
            queue.push(cur2.left);
        }

        if (cur1.right && cur2.right) {
            queue.push(cur1.right);
            queue.push(cur2.right);
        }

        if (!cur1.left && cur2.left) {
            cur1.left = cur2.left
        }

        if (!cur1.right && cur2.right) {
            cur1.right = cur2.right;
        }
    }
    return root1;
};

//Recursive method: preorder traversal
var mergeTrees = function (root1, root2) {
    // Returns the nodes that aren't null, if both of them are null, we return null
    if (!root1 && !root2) return null;
    else if (root1 && !root2) return root1;
    else if (!root1 && root2) return root2;

    root1.val += root2.val;//Mid, add up the vals of node1 and node2

    root1.left = mergeTrees(root1.left, root2.left);//Left
    root1.right = mergeTrees(root1.right, root2.right);//Right

    return root1;
};  