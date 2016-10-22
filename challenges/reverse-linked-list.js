function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head, prev = null) {
    if (head === null || head === undefined) return null;
    if (head.next === null) {
        head.next = prev;
        return head;
    } else {
        let newHead = head.next;
        head.next = prev;
        return reverseLinkedList(newHead, head);
    }
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };

console.log(reverseLinkedList(null));