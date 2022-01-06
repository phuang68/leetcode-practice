/**
 * https://leetcode-cn.com/problems/spiral-matrix/
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }

    const m = matrix.length, n = matrix[0].length;
    const order = [];
    let left = 0, right = n - 1, top = 0, bottom = m - 1;//Determine the boundaries on 4 directions
    while (left <= right && top <= bottom) {
        for (let j = left; j <= right; j++) {
            order.push(matrix[top][j])
        }

        for (let i = top + 1; i <= bottom; i++) {//Starting with the top + 1 row because the above action has been iterated through the top row
            order.push(matrix[i][right])
        }

        if (left < right && top < bottom) {//Once there's only one column left, we don't need to spiral backwards
            for (let j = right - 1; j >= left; j--) {//Need to go backwards from the right - 1 because the right column has been iterated 
                order.push(matrix[bottom][j])
            }
            for (let i = bottom - 1; i > top; i--) {//Going backwards from the bottom - 1 because bottom row has been iterated
                order.push(matrix[i][left])
            }
        }

        top++;
        left++;
        right--;
        bottom--;
    }

    return order;
};