/**
 * https://leetcode-cn.com/problems/reverse-string-ii/
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    const reverse = (s, l, r) => {
        while (l <= r) {
            [s[l], s[r]] = [s[r], s[l]];
            l++;
            r--;
        }
        return;
    }
    str = s.split('');
    for (let l = 0; l < str.length; l += 2 * k) {
        if (l + k <= str.length) {//When there are less than 2k but greater than or equal to k characters
            reverse(str, l, l + k - 1);
            continue;
        }
        reverse(str, l, str.length - 1);//When there are fewer than k characters left
    }
    return str.join("");
};


/**
 * https://leetcode-cn.com/problems/reverse-string-ii/
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    const reverse = (s, l, r) => {
        while (l <= r) {
            [s[l], s[r]] = [s[r], s[l]];
            l++;
            r--;
        }
        return;
    }
    str = s.split('');
    for (let l = 0; l < str.length; l += 2 * k) {
        if (l + k <= str.length) {//When there are less than 2k but greater than or equal to k characters
            reverse(str, l, l + k - 1);
            continue;
        }
        reverse(str, l, str.length - 1);//When there are fewer than k characters left
    }
    return str.join("");
};