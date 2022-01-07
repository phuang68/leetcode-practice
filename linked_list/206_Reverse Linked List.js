/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let pre = null;
    let cur = head;
    let next = null;
    while (cur) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
};