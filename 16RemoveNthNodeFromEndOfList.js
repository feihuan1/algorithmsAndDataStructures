// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0); 
    dummy.next = head; // Set the dummy's next to the head

    let fast = dummy; 
    let slow = dummy; 

    // Move fast pointer n+1 steps ahead
    for(let i = 0; i <= n; i++) {
        if (fast === null) {
            // Handle the case where n is greater than the length of the linked list
            return head;
        }
        fast = fast.next;
    }

    // Move both pointers until fast reaches the end
    while(fast !== null) {
        slow = slow.next;
        fast = fast.next;
    } 

    // Remove the nth node from the end
    slow.next = slow.next.next; 

    return dummy.next;
};