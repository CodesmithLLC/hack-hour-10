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
  let nodeStore = [];
  let currentNode = head;
  // When this loop exits, we should be holding the 'tail', and have a store of every object, indexed.
  while (currentNode.next) {
    nodeStore.push(currentNode);
    currentNode = currentNode.next;
  }
  // Don't forget to push the tail!
  nodeStore.push(currentNode);
  if (k >= nodeStore.length) return nodeStore[0].value;
  else return nodeStore[nodeStore.length - k].value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};