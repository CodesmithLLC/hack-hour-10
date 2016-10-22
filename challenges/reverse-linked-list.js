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
    if(!head) {
        return null;
    }
    let current = head;
    const values = [];
    while (current){
      values.push(current.value);
      current = current.next;
    }
    console.log(values);
    let newHead = new Node(values.pop());
    let temp = newHead;
    while (values.length){
      temp.next = new Node(values.pop());
      temp = temp.next;
    }
    return newHead;
}

// function reverseLinkedList(head) {
//     if( !head.next ) {
//         console.log('at the end');
//         return head;
//     }
//     var reversed = reverseLinkedList(head.next);
//     console.log(reversed);
//     reversed.next = new Node(head.value);
//     var current = reversed.next;
//     return reversed;
// }

// var myHead = new Node(1);
// myHead.next = new Node(2);
// myHead.next.next = new Node(3);
// myHead.next.next.next = new Node(4);

// var reverseHead = reverseLinkedList(myHead);

// console.log('normal ', myHead);
// console.log('reversed ', reverseHead);

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
