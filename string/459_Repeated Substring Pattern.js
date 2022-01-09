/**
 * https://leetcode-cn.com/problems/repeated-substring-pattern/
 * @param {string} s
 * @return {boolean}
 */
function getNext(next, s) {
    let j = -1;
    next[0] = j;
    for (let i = 1; i < s.length; i++) {
        while (j >= 0 && s[i] != s[j + 1]) {
            j = next[j];
        }
        if (s[i] == s[j + 1]) j++;
        next[i] = j;
    }
}
var repeatedSubstringPattern = function (s) {
    if (s.length === 0) return false;
    let len = s.length;
    const next = new Array(len);
    getNext(next, s);
    //For example, if s = abab, next = [-1, -1, 0 , 1], next[len - 1] + 1 would be the longest length of common prefix and postfix,
    //(len - pattern length) would be the pattern length, so that string length % (len - pattern length) == 0    if (next[len - 1] !== -1 && len % (len - (next[len - 1] + 1)) === 0) return true;
    return false;
};