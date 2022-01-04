/**
 * @param {number[]} heights
 * @return {number}
 */
//Method 1: Monotone Stack
var largestRectangleArea = function (heights) {
    var largest = 0;
    heights.unshift(0);
    heights.push(0)
    const mstk = [];
    mstk.push(0);
    for (let i = 1; i < heights.length; i++) {
        if (heights[mstk[mstk.length - 1]] < heights[i]) {
            mstk.push(i);
        } else if (heights[mstk[mstk.length - 1]] == heights[i]) {
            mstk.pop();
            mstk.push(i);
        } else {
            while (mstk.length > 0 && heights[mstk[mstk.length - 1]] > heights[i]) {// Current height is lower than top of the stack's
                let mid = mstk.pop();
                let left = mstk[mstk.length - 1];//The first lower height on the left
                let right = i;//The first lower heigh on the right
                let w = right - left - 1;
                let h = heights[mid];
                largest = Math.max(largest, w * h);
            }
            mstk.push(i);// The current height is higher than the top of the stack's therefore push it in
        }
    }
    return largest;
};

//Mehtod 2: Dynamic Programming
var largestRectangleArea = function (heights) {
    var largest = 0;
    let len = heights.length;
    const dpLeft = new Array(len).fill(0);//Find the first height lower from the left
    const dpRight = new Array(len).fill(0);//Find the first height lower from the right
    //Record every position' first height lower from the left
    dpLeft[0] = -1;//To be able to escape the while loop
    for (let i = 1; i < len; i++) {
        let t = i - 1;
        while (t >= 0 && heights[t] >= heights[i]) t = dpLeft[t];//We keep looking from the left
        dpLeft[i] = t;
    }
    //Record every position' first height lower from the right
    dpRight[len - 1] = len;
    for (let i = len - 2; i >= 0; i--) {
        let t = i + 1;
        while (t < len && heights[t] >= heights[i]) t = dpRight[t];//Keep looking from the right 
        dpRight[i] = t;
    }
    //We sum them up
    for (let i = 0; i < len; i++) {
        let w = dpRight[i] - dpLeft[i] - 1
        let h = heights[i];
        largest = Math.max(largest, w * h);
    }

    return largest;
};