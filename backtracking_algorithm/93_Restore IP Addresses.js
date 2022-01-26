/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const res = [];
    const path = [];
    const string = s.split("");
    const backtrack = (string, startIndex) => {
        if (startIndex < string.length && path.length > 4)
            return;

        if (startIndex == string.length && path.length === 4) {
            res.push(path.join("."));
            return;
        }

        for (let i = startIndex; i < string.length; i++) {
            let sub = string.slice(startIndex, i + 1).join("")
            if (isValid(sub)) {
                path.push(sub);
                backtrack(string, i + 1);
                path.pop();
            } else {
                continue;
            }
        }
    }
    backtrack(string, 0);
    return res;
};

function isValid(string) {
    if (string.length > 3)
        return false;
    if (string.length > 1) {
        if (string[0] === '0')
            return false;

        let num = parseInt(string);

        if (num > 255 && num > 0) return false;
    }
    return true;
}