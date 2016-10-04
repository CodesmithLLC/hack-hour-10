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
  // We can do a full traversion to see what the last node is, then we need to
  // move backwards k - 1 times
  //
  // While doing the first traversion, we can store it's position in a cache.
  const positions = [];

  let currentNode = head;
  while (currentNode) {
    positions.push(currentNode);
    currentNode = currentNode.next;
  }

  // We need to make some checks to see if k is beyond the length of array
  if (k > positions.length) throw new Error('cannot search beyond the head');
  // We also know know that k has to be greater than 0 for it to return anything
  if (k < 1) throw new Error('k must be greater than 0');

  // Now we have all the positions in order in the array. We simply need to return
  // the length of the cache - k value
  return positions[positions.length - k].value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
