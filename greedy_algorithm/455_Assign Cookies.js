/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    //Sort both of the children's appetite value and the size of cookies
    g.sort((a, b) => { return a - b; });
    s.sort((a, b) => { return a - b; });
    let count = 0;//Count the position of the child
    for (let i = 0; i < s.length; i++) {//we give the cookies to children with smallest appetite
        if (s[i] >= g[count] && count <= g.length) {//If the child' appetite is lower than the size of the current cookie, we give them.
            count++;//we can give to next child
        }
    }
    return count;
};