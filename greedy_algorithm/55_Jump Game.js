/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    var cover = 0;
    if (nums.length === 1) return true;
    for (let i = 0; i <= cover; i++) {//Only able to move before the coverage
        cover = Math.max(cover, nums[i] + i)//If the current position + the length of the jump is bigger than the coverage, we update the coverage
        if (cover >= nums.length - 1) return true;//If the coverage is bigger than the total steps, we can jump to it and return true;
    }
    return false;
};