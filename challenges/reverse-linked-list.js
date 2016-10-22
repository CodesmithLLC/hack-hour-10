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
  if (!head) return null;
  let current = head;
  const values = [];
  while (current) {
    values.push(current.value);
    current = current.next;
  }
  const newHead = new Node(values.pop());
  let temp = newHead;
  while (values.length) {
    temp.next = new Node(values.pop());
    temp = temp.next;
  }
  return newHead;
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
