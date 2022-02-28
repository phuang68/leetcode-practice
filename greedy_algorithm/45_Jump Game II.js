/**
 * @param {number[]} nums
 * @return {number}
 */

//Method 1: Constant updating next steps and checking if current steps reached, every reach guarantees a new step
var jump = function (nums) {
    let currentSteps = 0;
    let nextSteps = 0;
    let count = 0;
    if (nums.length <= 1) return 0;
    for (let i = 0; i < nums.length; i++) {
        nextSteps = Math.max(i + nums[i], nextSteps);
        if (i == currentSteps) {
            if (currentSteps < nums.length - 1) {
                count++;
                currentSteps = nextSteps;
                if (currentSteps >= nums.length - 1) break;
            } else {
                break;
            }
        }
    }
    return count;
};

//Method 2
var jump = function (nums) {
    var curcover = 0;
    var nextcover = 0;
    var step = 0;
    for (let i = 0; i < nums.length - 1; i++) {//Because we can always reach the last index, once we reached the last second index, one more step is the last index
        nextcover = Math.max(nums[i] + i, nextcover);//Record the furthest index next step can cover
        if (i === curcover) {//when we reach the current furthest index
            curcover = nextcover;//we take one more step to update the furthest index it can cover
            step++;
        }
    }
    return step;
};