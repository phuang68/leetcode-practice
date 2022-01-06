/**
 * https://leetcode-cn.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//Method 1: make sure their lengths are the same
var isAnagram = function (s, t) {
    if (s.length != t.length) return false;
    const set = new Array(26).fill(0);
    const base = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        set[s.charCodeAt(i) - base] += 1;
    }

    for (let i = 0; i < t.length; i++) {
        if (set[t.charCodeAt(i) - base] == 0) return false;
        else set[t.charCodeAt(i) - base] -= 1;
    }

    return true;
};

//Method 2: make sure all of the numbers are 0 in the alphabetic set
var isAnagram = function (s, t) {
    const set = new Array(26).fill(0);
    const base = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        set[s.charCodeAt(i) - base] += 1;
    }

    for (let i = 0; i < t.length; i++) {
        set[t.charCodeAt(i) - base] -= 1;
    }

    for (let i = 0; i < 26; i++) {
        if (set[i] != 0) return false;
    }

    return true;
};