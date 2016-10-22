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
    this.prev = null;
}

function reverseLinkedList(head) {
    if (typeof head !== 'object') return undefined;

    function generatePrevs(prev, current) {
        current.prev = prev;
        if (!current.next) return current;
        return generatePrevs(current, current.next);
    }

    function reverse(node, head) {
        let prev = node.prev;
        let next = node.next;
        node.next = prev;
        node.prev = next;
        if (prev === null) return head;
        return reverse(prev, head);
    }
    const tail = generatePrevs(null, head);
    return reverse(tail, tail);
}


// const link1 = new Node(1);
// const link2 = new Node(2);
// const link3 = new Node(3);
// const link4 = new Node(4);

// link1.next = link2;
// link2.next = link3;
// link3.next = link4;

// console.log(reverseLinkedList(link1));

module.exports = {
    Node: Node,
    reverseLinkedList: reverseLinkedList
};