/**
 * https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const st = [];
    for (let i of tokens) {
        if (i == '*' || i == '/' || i == '+' || i == '-') {
            let b = st.pop();
            let a = st.pop();
            if (i == '*') {
                st.push(a * b);
            } else if (i == '/') {
                st.push(a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b));
            } else if (i == '+') {
                st.push(a + b);
            } else if (i == '-') {
                st.push(a - b);
            }
        }
        else {
            st.push(parseInt(i));
        }
    }
    return st.pop();
}