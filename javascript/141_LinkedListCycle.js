/**
 * Date: 16/5/2.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var p = head,
        q = head;
    while(p !== null && q !== null){
        if(p.next === null || q.next === null){
            return false;
        }
        p = p.next;
        q = q.next.next;
        if(q === p){
            return true;
        }
    }
    return false;
};