/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];
    const path = [];
    const backtrack = (start, n, k) =>{
        const len = path.length;
        if(len === k){
            res.push([...path]);
            return;
        }
        //优化, k-len为还需要的元素个数, +1是包括起始位置, n-(k-len) +1为集合至多的起始位置
        for(let i = start; i <= n - (k - len) + 1; i++){
            path.push(i);
            backtrack(i+1, n, k);
            path.pop();
        }
    }
    backtrack(1,n,k);
    return res;
};