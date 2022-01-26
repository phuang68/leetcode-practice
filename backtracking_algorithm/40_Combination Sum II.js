/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const res = [];
    const path = [];
    candidates.sort((a, b) => a - b);//Optimization 0: Sort the candidates
    const backtracking = (candidates, remain, startIndex) => {
        if (remain <= 0) {
            if (remain == 0) res.push([...path]);//Optimization 1: Filter extra paths where remain < 0
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) {
            //Eliminating used number on the same level
            if (i > startIndex && candidates[i] === candidates[i - 1]) continue;
            path.push(candidates[i]);
            backtracking(candidates, remain - candidates[i], i + 1);
            path.pop();
        }
        return;
    }
    backtracking(candidates, target, 0);
    return res;
};