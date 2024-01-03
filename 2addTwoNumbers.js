// problems: You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Constraints:
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.


// Define a class representing a node in the linked list
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Define a function to add two numbers represented by linked lists
function addTwoNumbers(l1, l2) {
    // Create a dummy node to simplify the code for handling the result linked list
    const dummy = new ListNode();
    // Initialize a pointer 'current' to keep track of the current position in the result linked list
    let current = dummy;
    // Initialize a variable 'carry' to store the carry during addition
    let carry = 0;

    // Iterate through the linked lists until both are exhausted
    while (l1 || l2) {
        // Extract the values of the current nodes in the linked lists, or use 0 if the node is null
        const x = l1 ? l1.val : 0;
        const y = l2 ? l2.val : 0;

        // Calculate the sum of the current digits and the carry from the previous step
        const sum = x + y + carry;
        // Update the carry for the next iteration
        carry = Math.floor(sum / 10);

        // Create a new node with the digit in the one's place of the sum
        current.next = new ListNode(sum % 10);
        // Move the 'current' pointer to the newly created node
        current = current.next;

        // Move to the next nodes in the linked lists, if they exist
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    // If there is a carry remaining after the loop, create a new node for it
    if (carry) {
        current.next = new ListNode(carry);
    }

    // Return the result linked list (excluding the dummy node)
    return dummy.next;
}