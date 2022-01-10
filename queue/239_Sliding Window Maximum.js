/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class MyQueue {//Monotone Queue
    constructor() {
        this.deque = [];
    }

    push(x) {//Making sure that the deque is in an order small to big
        while (this.deque.length && this.deque[this.deque.length - 1] < x) {
            this.deque.pop();
        }
        this.deque.push(x);
    }

    pop(x) {//Only pop out when it's the same as the highest num
        if (this.deque.length && this.deque[0] == x) {
            this.deque.shift();
        }
    }

    front() {
        return this.deque[0];
    }
}
var maxSlidingWindow = function (nums, k) {
    const que = new MyQueue();
    const res = [];
    for (let i = 0; i < k; i++) {
        que.push(nums[i]);
    }
    res.push(que.front());
    for (let i = k; i < nums.length; i++) {
        que.pop(nums[i - k]);
        que.push(nums[i]);
        res.push(que.front());
    }
    return res;
};