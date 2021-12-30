/**
 * https://leetcode-cn.com/problems/house-robber-iii/
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
var rob = function(root) {
    if(!root) return 0;
    const robTree = (cur) => {
        if(!cur) return [0,0];

        let robLeft = robTree(cur.left);
        let robRight = robTree(cur.right);
        
        let robCur = robLeft[0] + robRight[0] + cur.val;
        let robNotCur = Math.max(robRight[0], robRight[1]) + Math.max(robLeft[0],robLeft[1])

        return [robNotCur, robCur];
    }
    let result = robTree(root);
    return Math.max(result[0], result[1]);
};