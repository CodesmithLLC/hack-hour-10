// Node class
function Node(value) {
  this.value = value;
  this.next = null;
}

// Turns a linked list representation of a number into the number
function linkedListToNum(ll) {
  let s = '';
  do s = ll.value + s;
  while (ll = ll.next);
  return +s;
}

// Turns a number into a linked list with head as the one digit
function numToLinkedList(num) {
  const a = Array.from(num.toString()).reverse();
  a.forEach((digit, idx) => a[idx] = new Node(+digit));
  a.forEach((node, idx) => node.next = a[idx + 1] ? a[idx + 1] : null);
  return a[0];
}

function addLinkedList(l1, l2) {
  return numToLinkedList(linkedListToNum(l1) + linkedListToNum(l2));
}

module.exports = { Node: Node, addLinkedList: addLinkedList };

