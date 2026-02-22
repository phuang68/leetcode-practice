/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const res = [];
    const path = [];
    const string = s.split('');
    const backtrack = (string, startIndex) => {
        if (startIndex >= string.length) {
            res.push([...path]);
            return;
        }

        for (let i = startIndex; i < string.length; i++) {
            if (isPalindrome(string, startIndex, i)) {//判断当前位置是否是可切割的位置
                let sub = string.slice(startIndex, i + 1).join("");
                path.push(sub);
            } else {
                continue;
            }
            backtrack(string, i + 1);//切割过的位置，不能重复切割，所以，backtracking(s, i + 1); 传入下一层的起始位置为i + 1
            path.pop();
        }
    }
    backtrack(string, 0);
    return res;
};

function isPalindrome(string, start, end) {
    for (let i = start, j = end; i <= j; i++, j--) {
        if (string[i] !== string[j])
            return false;
    }
    return true;
}

// Revisit time: 2025-02-22