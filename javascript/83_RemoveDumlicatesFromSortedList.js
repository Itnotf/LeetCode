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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var p = head;
    while(p !== null && p.next !== null){
        if(p.val === p.next.val){
            p.next = p.next.next;
        }else{
            p = p.next;
        }
    }
    return head;
};