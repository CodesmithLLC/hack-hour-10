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
    const stack = [];
    let current = head;
    while (current) {
        stack.push(current);
        current = current.next;
    }

    current = stack.pop();
    const newHead = current;

    while (stack.length) {
        const temp = stack.pop();
        if (!stack.length)
            temp.next = null;
        current.next = temp;
        current = temp;
    }
    return newHead;
}
//   var a = new Node('A');
//   var b = new Node('B');
//   var c = new Node('C');
//   a.next = b;
//   b.next = c;
 
//   console.log(reverseLinkedList(a));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
