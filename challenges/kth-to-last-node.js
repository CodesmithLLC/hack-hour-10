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
  node = head;
  while(node) {
    length++;
    node = node.next;
  }
  node = head;
  let target = length - k;
  let curLength = 0;
  while(node) {
    if(curLength === target){
      return node.value;
    }
    curLength++;
    node = node.next;
  }
  return 'could not find that node, did you enter correct information?';
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
