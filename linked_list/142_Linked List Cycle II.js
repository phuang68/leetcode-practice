/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let fast = slow = head;
    while (fast && fast.next) {//Detecting if there's a cycle
        slow = slow.next;//where the slow node goes one node at a time
        fast = fast.next.next;//the fast node goes two nodes at a time
        if (fast == slow) {//If there was a cycle, fast and slow will come across each other one day
            /*So far, assume it takes x steps to find the intersection, y is the extra steps in the cyle
              slow has gone, so slow has gone x + y, and assume there's z steps until fast reaches the cycle
              entrance, so fast has gone x + n(y + z) + y where y + z is the parimeter of the cycle. Since
              fast goes twices as fast as slow, therfore (x + y) * 2 = x + y + n(y+z) => x = n(y+z) - y =>
             x = (n-1)(y + z) + z, that means no matter how many cycles fast goes, it's the same that the node
             set off from the start meets the node set off from the encounter point will be the intersection.
            */
            let index1 = head;//node set off from the starting point
            let index2 = fast;//node set off from the encounter point
            while (index1 != index2) {//Where they meet will be the intersection
                index1 = index1.next;
                index2 = index2.next;
            }
            return index1;
        }
    }
    return null
};