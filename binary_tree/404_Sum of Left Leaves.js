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

//Recursive method
var sumOfLeftLeaves = function (root) {
    if (!root) return 0;

    let leftLeaves = sumOfLeftLeaves(root.left);
    let rightLeaves = sumOfLeftLeaves(root.right);

    let mid_val = 0
    //Determine the definition of a left leave
    if (root.left && !root.left.left && !root.left.right) {
        mid_val = root.left.val;
    }
    let sum = leftLeaves + mid_val + rightLeaves;
    return sum;
};

//Loop method
var sumOfLeftLeaves = function (root) {
    const st = [];
    let sum = 0;
    if (root) st.push(root);
    while (st.length) {
        let cur = st.pop();//Mid
        if (cur.left && !cur.left.left && !cur.left.right) {
            sum += cur.left.val;
        }
        if (cur.right) st.push(cur.right);//Right
        if (cur.left) st.push(cur.left);//Left
    }
    return sum;
};