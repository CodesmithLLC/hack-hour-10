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

// INPUT:  k: to represent the kth value from the last node (index equiv: length - k)
//         head: the head of a singly linked list
// OUTPUT: the value at node k
function kthToLastNode(k, head) {
  // check for invalid input (k too small)
  if (k <= 0) return;

  // push all values of list into an array
  let values = [];
  while (head) {
    values.push(head.value);
    head = head.next;
  }

  // check for invalid input (k too large)
  if (k > values.length) return;
  return values[values.length - k];

  // recursive way
  // let values = [];
  //
  // let traverse = function(node) {
  //   if (!node) return;
  //   values.push(node.value);
  //   traverse(node.next);
  // }
  // traverse(head);
  //
  // return values[values.length - k];
}

// TESTING
var a = new Node('A');
var b = new Node('B');
var c = new Node('C');
var d = new Node('D');
var e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// normal cases
console.assert(kthToLastNode(2,a) === 'D');
console.assert(kthToLastNode(1,a) === 'E');
console.assert(kthToLastNode(5,a) === 'A');

// undefined behavior
console.assert(kthToLastNode(-1,a) === undefined);
console.assert(kthToLastNode(0,a) === undefined);
console.assert(kthToLastNode(6,a) === undefined);
console.assert(kthToLastNode(100,a) === undefined);

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
