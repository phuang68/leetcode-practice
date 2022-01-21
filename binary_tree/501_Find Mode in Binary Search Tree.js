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
 * @return {number[]}
 */

//Method 1: using map to count frequency
var findMode = function (root) {
    const map = new Map();
    var res = []; //initialize with var because of later reset of result
    var maxCount = 0;
    //Use map to count the frequency of each element
    const traverse = (node) => {
        if (!node) return;

        traverse(node.left);
        map.set(node.val, map.has(node.val) ? map.get(node.val) + 1 : 1);
        traverse(node.right);
    }

    traverse(root);
    //Iterate through the map
    for (let [key, val] of map) {
        //Collect result when val == maxCount
        if (val === maxCount) {
            res.push(key);
        }
        //If higher maxCount met, reset the result
        if (val > maxCount) {
            maxCount = val;
            res = [];   //之前的结果需要重置
            res.push(key);
        }
    }
    return res;
}
//Same method as before but no need to reset result, we count the max freq during traversal
var findMode = function (root) {
    const map = new Map();
    var most_freq = 1;
    const res = [];
    const traversal = (root) => {
        if (!root) return;
        traversal(root.left);
        if (!map.get(root.val)) {
            map.set(root.val, 1);
        }
        else {
            map.set(root.val, map.get(root.val) + 1);
            most_freq = Math.max(map.get(root.val), most_freq);
        }
        traversal(root.right);
    }
    traversal(root);
    for (const entry of map.entries()) {
        if (entry[1] == most_freq) res.push(entry[0]);
    }

    return res;
};

//Recursive method
var findMode = function (root) {
    var pre = null;
    var count = 1;
    var max_count = 1;
    var res = [];
    const find = (node) => {
        if (!node) return;
        //Left
        find(node.left);
        //Mid
        if (!pre) {
            count = 1;
        } else if (pre.val == node.val) {
            count++;
        } else {
            count = 1;
        }
        pre = node;

        if (max_count == count) res.push(node.val);

        if (count > max_count) {
            max_count = count;
            res = [];
            res.push(node.val);
        }

        find(node.right);
        return;
    }
    find(root);
    return res;
};

//Iterative method
var findMode = function (root) {
    var pre = null;
    var count = 1;
    var max_count = 1;
    var res = [];
    var cur = root;
    const st = [];
    while (cur || st.length) {
        if (cur) {
            st.push(cur);
            cur = cur.left; //Left
        } else {
            cur = st.pop();//Mid

            if (!pre) {
                count = 1;
            } else if (pre.val == cur.val) {
                count++;
            } else {
                count = 1;
            }
            pre = cur;

            if (count == max_count) res.push(cur.val);

            if (count > max_count) {
                res = [];
                max_count = count;
                res.push(cur.val);
            }

            cur = cur.right;//Right
        }
    }
    return res;
};
