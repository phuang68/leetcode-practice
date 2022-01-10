var MyStack = function () {
    this.first = [];
    this.sec = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.first.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    while (this.first.length > 1) {
        this.sec.unshift(this.first.shift());
    }
    let top = this.first.shift();
    while (this.sec.length > 0) {
        this.first.unshift(this.sec.shift());
    }
    return top;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    let top = this.pop();
    this.push(top);
    return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return !this.first.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */