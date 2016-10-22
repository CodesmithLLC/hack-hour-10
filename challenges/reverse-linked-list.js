/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value, last = null) {
    this.value = value;
    this.next = last;
}

function reverseLinkedList(head, last = null) {
    var look = head.next
    head.next = last;
    if (look) return reverseLinkedList(look, head);
    return head;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};