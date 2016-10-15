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
if (k >= 0) {
    let count = 0;
    let store = {};
    let storeNode = {};
    for (current = head; current != null; current = current.next) {
      store[++count] = current.value;

    }
    let index = count - k + 1;
    let val = store[index];
    return val ? val : null;
}

}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

var a = new Node('A');
var b = new Node('B');
var c = new Node('C');
var d = new Node('D');
var e = new Node('E');
var f = new Node('F');
var g = new Node('G');
var h = new Node('H');
var i = new Node('I');
var j = new Node('J');
var k = new Node('K');

 
 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;
 console.log(kthToLastNode(2,a))