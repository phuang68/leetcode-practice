/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    const res = [];
    const hash = new Array(26).fill(0);
    const base = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {//Collect the last position of every character
        hash[s.charCodeAt(i) - base] = i;
    }
    var start = 0;
    var end = 0;
    for (let i = 0; i < s.length; i++) {
        end = Math.max(hash[s.charCodeAt(i) - base], end);//Update the current furthest position
        if (i == end) {//If the string has reached to the furthest position, we can partition the string
            res.push(end - start + 1);
            start = i + 1;//Update the next starting position
        }
    }
    return res;
};