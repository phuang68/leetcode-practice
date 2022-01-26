/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    const res = [];
    const path = [];
    const backtrack = (k, startIndex, remain) => {
        //Cutting extra edges, if remain < 0, no need to continue;
        if (remain < 0) return;

        if (k === path.length) {
            if (remain === 0) res.push([...path]);
            return;
        }

        for (let i = startIndex; i <= 9; i++) {
            path.push(i);
            backtrack(k, n, i + 1, remain - i);
            path.pop();
        }
    }
    backtrack(k, 1, n);
    return res;
};