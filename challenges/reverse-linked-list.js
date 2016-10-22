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
    head.OGhead = true;
    let currNode = head;
    let counter = 0;
    let newHead;
    let nextNode;
    while (currNode) {
        if (currNode.OGhead && currNode.next === null) currNode = null;
        else if (currNode.next.next === null) {
            nextNode = currNode.next
            currNode.next = null;
            nextNode.next = head;
            if (counter === 0) {
                newHead = nextNode;
                counter++;
            }
            currNode = head;
        }
        else currNode = currNode.next;
    }
    return newHead;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
