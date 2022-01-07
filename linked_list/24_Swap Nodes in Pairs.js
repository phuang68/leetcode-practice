/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let dummy = new ListNode(0, head);
    let cur = dummy;
    while (cur.next && cur.next.next) {
        let temp1 = cur.next;//This will be next cur
        let temp2 = cur.next.next.next;//This will be the next cur's next

        cur.next = cur.next.next;//Making the second node the first node
        cur.next.next = temp1;//Making the original first node the second node
        cur = cur.next.next;//Update our new cur to the original first node
        cur.next = temp2;//Let it points to the third node
    }
    return dummy.next;
};