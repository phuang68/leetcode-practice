/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const set = new Set();
    let right = -1, res = 0;
    for (let left = 0; left < s.length; left++) {
        while (right + 1 < s.length && !set.has(s[right + 1])) {//We check if right has reached the end of s or repeating characters
            set.add(s[right + 1]);
            right++;
        }
        res = Math.max(res, right - left + 1);
        set.delete(s[left]);//Before moving the left boundary, we delete the current character
    }
    return res;
};

