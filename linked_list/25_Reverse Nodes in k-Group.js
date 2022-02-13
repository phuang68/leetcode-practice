/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    const reverse = (head, tail) => {
        let pre = tail.next;
        let next = null;
        let cur = head;
        while (pre !== tail) {
            next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        return [tail, head]
    }
    let dummy = new ListNode(0, head);
    let cur = head;
    let pre = dummy;
    while (cur) {
        let tail = pre;
        // Move tail to the next k spot and also check if there's enough k nodes
        for (let i = 0; i < k; ++i) {
            tail = tail.next;
            if (!tail) {//When there's no enough k nodes, we reached the end and return
                return dummy.next;
            }
        }
        const next = tail.next;//We obtain the next head of the k-group chain
        [cur, tail] = reverse(cur, tail);//After the reverse, the cur will move to the tail and tail moves to the head
        // We link the sub k-group linked list to the original linked list
        pre.next = cur;//The previous node points to the new head
        tail.next = next;//The new tail points to the head of next k-group
        pre = tail;//The previous nodes sets to the new tail
        cur = tail.next;//The new head is the head of the next k-group
    }
    return dummy.next;
};