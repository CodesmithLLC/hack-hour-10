/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    // Check head type
    if (!(head instanceof Node)) throw new Error('Bad Input');

    const stack = [];

    // Populate our stack with references to our nodes
    let current = head;
    while (current) {
        stack.push(current);
        current = current.next;
    }

    // Reverse our list from stack
    const newHead = stack.pop();
    current = newHead;
    while (stack.length > 0) {
        const temp = stack.pop();

        // Last item next should be null
        if (stack.length < 1) temp.next = null;

        current.next = temp;
        current = temp;
    }

    return newHead;
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
