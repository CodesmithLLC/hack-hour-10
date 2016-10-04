/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  const length = getLength(head);
  if (k < 1 || k > length) return undefined;
  for (let i = 0; i < length - k; i++) {
    head = head.next;
  }
  return head.value;
}

function getLength(head) {
  let length = 1;
  while (head.next !== null) {
    head = head.next;
    length += 1;
  }
  return length;

}
 
module.exports = {Node: Node, kthToLastNode: kthToLastNode};
