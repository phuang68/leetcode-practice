/**
 * https://leetcode-cn.com/problems/sqrtx/
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x == 1) return 1;
    let l = 0, r = x;
    let res = 0;
    while (l <= r) {
        let mid = (l + r) >> 1;
        if (mid * mid <= x) {//The decimal part needs to be truncated
            res = mid;
            l = mid + 1;
        } else if (mid * mid > x) {
            r = mid - 1;
        }
    }
    return res;
};