/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let curA = headA;
    let curB = headB;
    let lenA = lenB = 0;
    while (curA) {
        curA = curA.next;
        lenA++;
    }
    while (curB) {
        curB = curB.next;
        lenB++;
    }
    if (lenB > lenA) {//Let head A be the longer linked list
        [lenA, lenB] = [lenB, lenA];
        [headA, headB] = [headB, headA];
    }
    gap = lenA - lenB;
    curA = headA;
    curB = headB;
    while (gap--) {//Move node A to the same length as node B's starting point
        curA = curA.next;
    }
    while (curA && curB) {
        if (curA == curB) return curA;//if both nodes are the same, that's the intersection node
        curA = curA.next;
        curB = curB.next;
    }
    return null;
};