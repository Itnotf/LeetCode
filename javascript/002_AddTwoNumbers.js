/**
 * Date: 16/4/30.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var head = new ListNode(null),
        tail = head,
        curry = 0;

    while (l1 !== null || l2 !== null) {
        if (l2 === null) {
            sum = l1.val + curry;
            l1 = l1.next;
        } else if (l1 === null) {
            sum = l2.val + curry;
            l2 = l2.next;
        } else {
            sum = l1.val + l2.val + curry;
            l1 = l1.next;
            l2 = l2.next;
        }

        tail.val = sum % 10;
        curry = sum > 9 ? 1 : 0;

        if (null !== l1 || null !== l2 || curry) {
            tail.next = new ListNode(curry);
            tail = tail.next;
        }
    }
    return head;
};
