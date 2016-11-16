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
  let nextNode = head.next;
  let counter = 2;
  while(nextNode.next) {
    nextNode = nextNode.next;
    counter++;
  }
  console.log(counter + 1 - k);
  if (counter + 1 - k < 1) return undefined;
  if (counter + 1 - k === 1) return head.value;
  if (counter + 1 - k === 2) return head.next.value;
  counter = counter - k;
  let traverse = head.next;
  let curr = 2;
  while(curr < counter) {
    traverse = traverse.next;
    curr++;
  }
  return traverse.next.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
