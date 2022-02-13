/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    const backtrack = (board) => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] != '.') continue;
                for (let k = 1; k <= 9; k++) {
                    if (isValid(board, i, j, String(k))) {
                        board[i][j] = String(k);
                        if (backtrack(board)) return true;
                        board[i][j] = '.';
                    }
                }
                return false;
            }
        }
        return true;
    }
    backtrack(board);
    return board;
};

function isValid(board, row, col, k) {

    //同列无重复
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === k)
            return false;
    }

    //同行无重复
    for (let j = 0; j < 9; j++) {
        if (board[row][j] === k)
            return false;
    }

    //九宫格内无重复
    let startR = Math.floor(row / 3) * 3;
    let startC = Math.floor(col / 3) * 3;

    for (let i = startR; i < startR + 3; i++) {
        for (let j = startC; j < startC + 3; j++) {
            if (board[i][j] === k)
                return false;
        }
    }

    return true;
}