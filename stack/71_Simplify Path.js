/**
 * https://leetcode-cn.com/problems/simplify-path/
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const st = [];
    const str = path.split('/');
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '' || str[i] == '.') continue;
        if (str[i] == '..') {
            if (st.length > 0) st.pop();
            continue;
        }
        else st.push(str[i]);
    }

    return '/' + st.join('/');
};