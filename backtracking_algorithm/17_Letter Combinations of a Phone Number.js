var letterCombinations = function (digits) {
    const res = [];
    const letter = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    const string = [];
    const digit = digits.split("").map(i => parseInt(i));
    const backtracking = (digit, index) => {
        if (index === digit.length) {
            if (digit.length)//In case of empty input
                res.push(string.join(""));
            return;
        }

        let alphabet = letter[digit[index]].split('');
        for (let i = 0; i < alphabet.length; i++) {
            string.push(alphabet[i]);
            backtracking(digit, index + 1);
            string.pop();
        }
    }
    backtracking(digit, 0);
    return res;
};