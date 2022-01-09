function getNext(next, str) {
    let j = -1;
    next[0] = j;
    for (let i = 1; i < str.length; i++) {
        while (str[i] != str[j + 1] && j >= 0) {
            j = next[j];
        }
        if (str[i] == str[j + 1]) {
            j++;
        }
        next[i] = j;
    }
}

var strStr = function (haystack, needle) {
    if (needle.length == 0) return 0;
    const str = needle.split('');
    const next = new Array(needle.length);
    getNext(next, str);
    let j = -1;
    for (let i = 0; i < haystack.length; i++) {
        while (haystack[i] != needle[j + 1] && j >= 0) {
            j = next[j];
        }
        if (haystack[i] == needle[j + 1]) {
            j++;
        }
        if (j == needle.length - 1) {
            return (i - needle.length + 1);
        }
    }
    return -1;
};