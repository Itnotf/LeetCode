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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var l3 = null,
        p;
    if(l1 !== null || l2 !== null){
        l3 = new ListNode(null);
    }
    p = l3;

    while(l1 !== null || l2 !== null){

        if(l1 === null){
            p.val = l2.val;
            l2 = l2.next;
        }else if(l2 === null){
            p.val = l1.val;
            l1 = l1.next;
        }else {
            if(l1.val < l2.val){
                p.val = l1.val;
                l1 = l1.next;
            }else{
                p.val = l2.val;
                l2 = l2.next;
            }
        }
        if(l1 !== null || l2 !== null){
            p.next = new ListNode(null);
            p = p.next;
        }
    }
    return l3;
};