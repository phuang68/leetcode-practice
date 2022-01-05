/**
 * https://leetcode-cn.com/problems/valid-perfect-square/
 * @param {number} num
 * @return {boolean}
 */

//左闭右闭
var isPerfectSquare = function (num) {
    let l = 0, r = num;
    let res = false;
    while (l <= r) {
        let mid = (l + r) >> 1;
        if (mid * mid < num) {
            l = mid + 1;
        } else if (mid * mid > num) {
            r = mid - 1;
        } else {
            res = true;
            return res;
        }
    }
    return res;
};

//除法
var isPerfectSquare = function (num) {
    var l = 0, r = num;
    while (l <= r) {
        let mid = (l + r) >> 1;
        if (num / mid < mid) r = mid - 1;
        else if (num / mid > mid) l = mid + 1;
        else return true;
    }
    return false;
};