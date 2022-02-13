/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combine = function (n, k) {
    const res = [];
    const path = [];//Keep tracks of the path
    const backtracking = (n, s, k) => {
        if (path.length == k) {//Collect path when condition's met
            res.push([...path]);
            return;
        }
        //Try every possible path from the startIndex, so that anything previously chosen won't get collected;
        for (let i = s; i <= n; i++) {
            path.push(i);
            backtracking(n, i + 1, k);
            path.pop();
        }
        return;
    }
    backtracking(n, 1, k);
    return res;
};

//Optimization: 
var combine = function(n, k) {
    const res = [];
    const path = [];
    const backtrack = (start, n, k) =>{
        const len = path.length;
        if(len === k){
            res.push([...path]);
            return;
        }
        // k - len is the elements we need, + 1 means the next starting point, 
        // n -(k - len) + 1 would be the ending position with most elements available to collect
        for(let i = start; i <= n - (k - len) + 1; i++){
            path.push(i);
            backtrack(i+1, n, k);
            path.pop();
        }

        return;
    }
    backtrack(1,n,k);
    return res;
};