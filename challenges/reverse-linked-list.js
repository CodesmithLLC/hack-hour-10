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

function printList(head){
    let itr = head;
    let str = "";
    while(itr){
        str += itr.value + " -> ";
        itr = itr.next;
    }
    console.log(str);
    return str;
}

function reverseLinkedList(head) {
    if(!head || !head.next) return head;
    let newHead = null;
    reverseLinkedListRec(head.next, head);
    function reverseLinkedListRec(head, last){
        if(head.next !== null) reverseLinkedListRec(head.next, head);
        else newHead = head;
        head.next = last;
    }
    head.next = null;
    return newHead;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
