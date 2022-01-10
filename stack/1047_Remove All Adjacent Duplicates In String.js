/**
 * https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    const str = s.split('');
    const st = [];
    for (let i = 0; i < str.length; i++) {
        if (st.length != 0 && str[i] == st[st.length - 1]) {
            st.pop();
            continue;
        }
        st.push(str[i]);
    }
    return st.join('');
};