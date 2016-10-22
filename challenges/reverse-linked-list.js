/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */





//OR 

// link n2 to n1 
// link n3 to n2
// link n4

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    if (!(head.next)) return head;

    // swap positions if linkedlist only has two nodes
    // otherwise find the tail and link the tail to the result of reversing the linked list up to the tail

    // swap if only 2 nodes
    if (!(head.next.next)) {
        let oldHead = head;
        let newHead = head.next;
        newHead.next = oldHead;
        oldHead.next = null;
        return newHead;
    }

    // move pointer to tail and save a pointer to the node before tail
    let tail = head, beforeTail;
    while (tail.next) {
        beforeTail = tail, tail = tail.next;
    }
    // chop the tail off of the linked list, then link it to the result of calling reverseLinkedList on the truncated list
    beforeTail.next = null, tail.next = reverseLinkedList(head);
    return tail;
}


/// ALTERNATE ITERATIVE SOLUTION
function reverseLinkedIterative(head) {
    if (!head.next) return head;
    let nodeToSwap = head.next;
    let nextNodeToSwap = nodeToSwap.next;
    let currentNode = head;
    currentNode.next = null;

    // if there are at least 3 nodes, link node2 to node1, then node3, to node2, etc.
    while (nextNodeToSwap) {

        // swap nodes
        nodeToSwap.next = currentNode;

        // update pointers
        currentNode = nodeToSwap;
        nodeToSwap = nextNodeToSwap;
        nextNodeToSwap = nodeToSwap.next;
    }

    // swap the final two nodes
    nodeToSwap.next = currentNode
    return nodeToSwap;
}


module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
