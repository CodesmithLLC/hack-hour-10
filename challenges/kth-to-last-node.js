
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

  if (k > length) return undefined;
  current = head;
  for (let i = 0; i < length - k; i++) {
    current = current.next;
  }
  
  return current.value;
}

// var a = new Node('A');
// var b = new Node('B');
// var c = new Node('C');
// var d = new Node('D');
// var e = new Node('E');
// var f = new Node('F');
// var g = new Node('G');
// var h = new Node('H');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// f.next = g;
// g.next = h;


// console.log(kthToLastNode(5, a));


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
