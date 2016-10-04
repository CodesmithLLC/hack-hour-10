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
  let length = 0;
  let current = head;
  while (current !== null) {
    length++;
    current = current.next;
  }
  current = head;
  let count = 0;
  let position = length - k;
  while (count < position) {
    current = current.next;
    count++;
  }
  return current.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};


// let a = new Node('A');
// let b = new Node('B');
// let c = new Node('C');
// let d = new Node('D');
// let e = new Node('E');
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// console.log(a);
// console.log(kthToLastNode(2, a));
