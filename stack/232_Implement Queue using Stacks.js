var MyQueue = function () {
    this.first = [];
    this.sec = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.first.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.sec.length === 0) {
        while (this.first.length != 0) {
            this.sec.push(this.first.pop());
        }
    }
    let front = this.sec.pop();
    return front;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    let res = this.pop();
    this.sec.push(res);
    return res;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return !this.first.length && !this.sec.length;
};

/**
 * https://leetcode-cn.com/problems/implement-queue-using-stacks/
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */