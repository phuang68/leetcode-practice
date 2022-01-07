//https://leetcode-cn.com/problems/design-linked-list/
class LinkNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

var MyLinkedList = function () {
    this.size = 0;
    this.head = null;
    this.tail = null;
};

/** 
 * @param {number} index
 * @return {number}
 */

MyLinkedList.prototype.getNode = function (index) {
    if (index < 0 || index >= this.size) return null;
    let cur = new ListNode(0, this.head);
    while (index-- >= 0) {
        cur = cur.next;
    }
    return cur;
};

MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1;
    let cur = this.getNode(index);
    return cur.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let new_node = new LinkNode(val, this.head);
    this.size++;
    this.head = new_node;
    if (!this.tail) this.tail = new_node;
    return;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let new_node = new LinkNode(val, null);
    this.size++;
    if (this.tail) {
        this.tail.next = new_node;
        this.tail = new_node;
        return;
    }
    this.head = new_node;
    this.tail = new_node;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.size) return;
    if (index === 0) {
        this.addAtHead(val);
        return;
    } else if (index === this.size) {
        this.addAtTail(val);
        return;
    }
    let cur = this.getNode(index - 1);
    this.size++;
    let new_node = new LinkNode(val, cur.next);
    cur.next = new_node;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) return;
    if (index === 0) {
        this.head = this.head.next;
        this.size--;
        return;
    }
    const cur = this.getNode(index - 1);
    cur.next = cur.next.next;
    if (index === this.size - 1) {
        this.tail = cur;
    }
    this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */