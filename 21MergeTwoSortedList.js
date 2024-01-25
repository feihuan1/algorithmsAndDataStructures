// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// time: O(n), space: O(1)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;

    while (list1 && list2 ) {
        if(list1.val > list2.val) {
            current.next = list2;  
            list2 = list2.next;
        } else {
            current.next = list1;
            list1 = list1.next;
        }
            current = current.next;
    }

    if(list1 !==null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummy.next;

};