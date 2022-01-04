/**
 * @param {number[]} height
 * @return {number}
 */

//Method 1: Monotone Stack
var trap = function (height) {
    var res = 0;
    const mstk = [];
    mstk.push(0);
    for (let i = 1; i < height.length; i++) {
        if (height[mstk[mstk.length - 1]] > height[i]) {
            mstk.push(i);
        } else if (height[mstk[mstk.length - 1]] == height[i]) {
            mstk.pop();
            mstk.push(i);
        } else {
            while (mstk.length > 0 && height[mstk[mstk.length - 1]] < height[i]) {
                let mid = mstk.pop();
                if (mstk.length > 0) {
                    let h = Math.min(height[mstk[mstk.length - 1]], height[i]) - height[mid];
                    let w = i - mstk[mstk.length - 1] - 1;
                    res += h * w;
                }
            }
            mstk.push(i);
        }
    }
    return res;
};

//Method 2: Dynamic Programming
var trap = function (height) {
    var sum = 0;
    const dpLeft = new Array(height.length).fill(0);
    const dpRight = new Array(height.length).fill(0);

    dpRight[0] = height[0];
    for (let i = 1; i < height.length; i++) {
        dpRight[i] = Math.max(height[i], dpRight[i - 1]);
    }

    dpLeft[height.length - 1] = height[height.length - 1];
    for (let i = height.length - 2; i >= 0; i--) {
        dpLeft[i] = Math.max(height[i], dpLeft[i + 1]);
    }

    for (let i = 0; i < height.length; i++) {
        if (i == 0 || i == height.length - 1) continue;
        let h = Math.min(dpLeft[i], dpRight[i]) - height[i];
        sum += h;
    }

    return sum;
};

//Method 3: Double pointers
var trap = function (height) {
    var sum = 0;
    for (let i = 0; i < height.length; i++) {
        if (i == 0 || i == height.length - 1) continue;

        let leftHeighest = height[i];
        let rightHeighest = height[i];

        for (let right = i + 1; right < height.length; right++) {
            rightHeighest = rightHeighest < height[right] ? height[right] : rightHeighest;
        }
        for (let left = i - 1; left >= 0; left--) {
            leftHeighest = leftHeighest < height[left] ? height[left] : leftHeighest;
        }

        let h = Math.min(rightHeighest, leftHeighest) - height[i];
        sum += h;
    }
    return sum;
};