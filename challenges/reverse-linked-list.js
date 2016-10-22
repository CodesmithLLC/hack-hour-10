function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head, prev = null) {
    if (!head) return 0;
    if (head.next === null) {
        head.next = prev;
        return head;
    } else {
        let newHead = head.next;
        head.next = prev;
        return reverseLinkedList(newHead, head);
    }
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};