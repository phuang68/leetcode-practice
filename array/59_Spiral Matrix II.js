/**
 * https://leetcode-cn.com/problems/spiral-matrix-ii/
 * @param {number} n
 * @return {number[][]}
 */

//Using while loop to iterate through
var generateMatrix = function (n) {
    const matrix = Array.from(Array(n)).map(() => (new Array(n)));
    let startx = starty = 0;
    let mid = n >> 1;
    let loop = n >> 1;
    let count = 1;
    while (loop) {
        let i = startx;
        let j = starty;

        while (j < n - 1 - starty) {
            matrix[i][j++] = count++;
        }

        while (i < n - 1 - startx) {
            matrix[i++][j] = count++;
        }

        while (j > starty) {
            matrix[i][j--] = count++;
        }

        while (i > startx) {
            matrix[i--][j] = count++;
        }

        startx++;
        starty++;
        loop--;
    }

    if (n % 2 == 1) {
        matrix[mid][mid] = count;
    }

    return matrix;
};

//Using for loop to iterate
var generateMatrix = function (n) {
    const matrix = Array.from(Array(n), () => Array(n).fill(0));
    let startx = starty = 0;
    let loop = n >> 1;
    let count = 1;
    let i, j;
    while (loop--) {
        i = startx;
        j = starty;

        for (; j < n - 1 - starty; j++) {
            matrix[i][j] = count++;
        }

        for (; i < n - 1 - startx; i++) {
            matrix[i][j] = count++;
        }

        for (; j > starty; j--) {
            matrix[i][j] = count++;
        }

        for (; i > starty; i--) {
            matrix[i][j] = count++;
        }

        startx++;
        starty++;
    }

    if (n % 2 == 1) {
        matrix[starty][startx] = count;
    }

    return matrix
};