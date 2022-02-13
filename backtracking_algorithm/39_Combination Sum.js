/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const res = [];
    const path = [];
    candidates.sort((a, b) => a - b);//Optimization 0, sorting the numbers so that 
    const backtracking = (candidates, remain, startIndex) => {
        if (remain < 0) return;//Optimization 1, cutting the edges where remain < 0

        if (remain == 0) {
            res.push([...path]);
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) {
            path.push(candidates[i]);
            backtracking(candidates, remain - candidates[i], i);//Can keep taking the same element, so no need to increment i here
            path.pop();
        }
    }
    backtracking(candidates, target, 0);
    return res;
};