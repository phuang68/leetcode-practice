/**
 * https://leetcode-cn.com/problems/happy-number/
 * @param {number} n
 * @return {boolean}
 */
function getSum(n) {
    let sum = 0;
    while (n) {
        sum += (n % 10) * (n % 10);
        n = parseInt(n / 10);
    }
    return sum;
}
var isHappy = function (n) {
    const set = new Set();
    while (1) {
        let res = getSum(n);

        if (res === 1) return true;

        if (set.has(res)) return false;
        else set.add(res);

        n = res;
    }
};