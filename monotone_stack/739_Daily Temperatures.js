/**
 * https://leetcode-cn.com/problems/daily-temperatures/
 * @param {number[]} temperatures
 * @return {number[]}
 */

//Method 1: Using monotone stack
var dailyTemperatures = function (temperatures) {
    const stack = [];//Monotone Stack: Only pops out the top element bigger/smaller than the current iterating one.
    const res = new Array(temperatures.length).fill(0);
    stack.push(0)
    for (let i = 1; i < temperatures.length; i++) {
        if (temperatures[stack[stack.length - 1]] > temperatures[i]) { //When temperature[i] is lower than or equal to the top, we push in
            stack.push(i);
        } else if (temperatures[stack[stack.length - 1]] == temperatures[i]) {
            stack.push(i);
        } else {
            while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {//Once temperature[i] is higher, we pops the top out until the top is higher
                let top = stack.pop();
                res[top] = i - top;
            }
            stack.push(i);
        }
    }

    return res;
};

//Method 2: Brutal solution
var dailyTemperatures = function (temperatures) {
    const res = []
    for (let i = 0; i < temperatures.length; i++) {
        for (let j = i; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                res[i] = j - i;
                break;
            }
            if (j == temperatures.length - 1) {
                res[i] = 0;
            }
        }
    }
    return res;
};