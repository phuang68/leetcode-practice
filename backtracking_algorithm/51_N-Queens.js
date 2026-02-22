/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const res = [];
    const chessboard = new Array(n).fill([]).map(() => new Array(n).fill('.'));//Initialize the 2-D chessboard filling with '.'
    const backtrack = (chessboard, row, n) => {
        if (row === n) {
            res.push(transformBoard(chessboard));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(chessboard, row, col, n)) {//Only proceed when Q can be placed
                chessboard[row][col] = 'Q';
                backtrack(chessboard, row + 1, n);
                chessboard[row][col] = '.';
            }
        }
    }
    backtrack(chessboard, 0, n);
    return res;
};

function transformBoard(chessboard) {//Transforming chessboard as a 1-D Array with stringified rows
    const board = []
    for (const row of chessboard) {
        board.push(row.join(''));
    }
    return board;
}

function isValid(chessboard, row, col, n) {
    //Vertical check
    for (let i = 0; i < row; i++) {
        if (chessboard[i][col] === 'Q')
            return false;
    }
    //Up left vertical check
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (chessboard[i][j] === 'Q')
            return false;
    }
    //Up right vertical check
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (chessboard[i][j] === 'Q')
            return false;
    }

    return true;
}

// Revisit time: 2025-02-22