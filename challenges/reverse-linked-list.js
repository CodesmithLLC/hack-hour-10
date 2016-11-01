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
  if(!head.next) { return new Node(head.value); }
  
  let newHead = reverseLinkedList(head.next);
  let current = newHead;
  while(current.next) { current = current.next; }
  current.next = new Node(head.value);
  return newHead;
}


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
