// 23. Merge k Sorted Lists
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.


// Time Complexity: O(N log K)
// Space Complexity: O(K)


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 0) {
        return null;
    } 

    while(lists.length > 1) {
        const l1 = lists.pop();
        const l2 = lists.pop(); 

        lists.unshift(mergeList(l1, l2))
    } 
    return lists[0]
};


// merge two list solved before in problem 21
function mergeList(l1, l2) {
    let dummy = new ListNode();
    let head = dummy; 

    while(l1 && l2) {
        if(l1.val < l2.val) {
            dummy.next = l1; 
            l1 = l1.next
        } else {
            dummy.next = l2;
            l2 = l2.next;
        }
        dummy = dummy.next;
    }

    dummy.next = l1 || l2; 

    return head.next;
}