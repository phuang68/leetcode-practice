/**
 * @param {string} s
 * @return {boolean}
 */
function isAlphanumeric(char) {
    return (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z') ||
        (char >= '0' && char <= '9');
}

function isPalindrome(s) {
    let start = 0, end = s.length - 1;
    while (start < end) {
        while (start < end && !isAlphanumeric(s[start])) {
            start++;
        }
        while (start < end && !isAlphanumeric(s[end])) {
            end--;
        }

        if (s[start].toLowerCase() !== s[end].toLowerCase()) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

console.log(isPalindrome("Was it a car or a cat I saw?"));