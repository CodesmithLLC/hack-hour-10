function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head, prev = null) {
    if (!head) return null;
    const next = head.next;
    head.next = prev;
    return next ? reverseLinkedList(next, head) : head;
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };

console.log(reverseLinkedList(null));