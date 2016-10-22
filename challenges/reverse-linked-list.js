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
  if (head.constructor !== Node) {
  	return undefined;
  }
  
  let prevNode = head;
  let currNode = head.next;
  let nextNode = currNode.next;
  prevNode.next = null;
  
  while (nextNode !== null) {
  	currNode.next = prevNode;
  	prevNode = currNode;
  	currNode = nextNode;
  	nextNode = nextNode.next;
  }
  
  currNode.next = prevNode;
  return currNode;  
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
