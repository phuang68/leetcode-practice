class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for (const str of strs) {
            res += str.length + '#' + str;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const res = [];
        while (i < str.length) {
           let j = i;
            while (str[j] !== '#') {
                j++;
            }
            // length of a str can be more than 1 digit
            const lengthOfStr = parseInt(str.substring(i, j));
            i = j + 1;
            j = j + lengthOfStr;
            res.push(str.substring(i, j));
            i = j;
        }
        return res;
    }
}
