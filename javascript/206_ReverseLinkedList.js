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
//1.新建数组反转
//2.原地反转
//3.递归反转
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var new_list = null,head2;
    while(head !== null){
        head2 = new ListNode(head.val);
        head2.next = new_list;
        new_list = head2;
        head = head.next
    }
    return new_list;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var tmp = head,new_head;
    while(tmp !== null && tmp.next !== null){
        new_head = new ListNode(tmp.next.val);
        new_head.next = head;
        tmp.next = tmp.next.next;
        head = new_head;
    }
    return head;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null || head.next === null){
        return head;
    }
    var new_head;
    new_head = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return new_head;
};