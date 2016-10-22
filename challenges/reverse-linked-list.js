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
    if(!head) return undefined;
    if(!head.next) return head;
    let a = head;
    let track = {};
    for( let i = 0; a.next; i++) {
        track[i] = a;
        a = a.next;
    }
    let res = a;
    for( let j = i; j > 0; j--) {
        a.next = track[j - 1];
        a = a.next;
    }
    return res;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
