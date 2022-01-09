/**
 * https://leetcode-cn.com/problems/reverse-words-in-a-string/
 * @param {string} s
 * @return {string}
 */
function reverse(s, l, r) {
    while (l <= r) {
        [s[l], s[r]] = [s[r], s[l]];
        l++;
        r--;
    }
}
function removeBlanks(s) {
    let slow = fast = 0;
    //remove the blanks in the front
    while (s.length > 0 && fast < s.length && s[fast] == ' ') {
        fast++;
    }
    //remove the blanks in the middle
    for (; fast < s.length; fast++) {
        if (s[fast] == ' ' && s[fast] == s[fast - 1] && fast > 1) {
            continue;
        }
        s[slow++] = s[fast];
    }
    //remove the blanks in the back
    s.length = s[slow - 1] === ' ' ? slow - 1 : slow;
}

var reverseWords = function (s) {
    let arr = Array.from(s);
    removeBlanks(arr);
    reverse(arr, 0, arr.length - 1);
    let start = 0;

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === ' ' || i === arr.length) {
            reverse(arr, start, i - 1);
            start = i + 1;
        }
    }

    return arr.join('');
};

