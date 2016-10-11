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
   const len = findLength(head);
   let counter = Number(len - k);

   if (k === 0 || k > len) return 'k must be a positive number that is less than the length';
   if (head.constructor !== Node) return 'head must be a node';
   if (len === 1) return head.value;

 function find(node) {
   if (counter === 0) return node.value;
   if (node.next === null) return -1;

   counter--;
   return find (node.next);
 }

   return find (head);
 }

 function findLength(head) {
   let length = 1;

 function locateLen(node) {
   if (node.next === null) return length;

   length++;
   return locateLen (node.next);
   }

   return locateLen(head);
 }

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
