/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}


function addLinkedList(l1, l2) {
if (l1.constructor !== Node && l2.constructor !== Node) {
  return undefined;
}
else if (l1.constructor !== Node) {
  return l2;
}
else if (l2.constructor !== Node) {
  return l1;
}

let numArr1 = [];
let numArr2 = [];
let numArr3 = [];
let l1Node = l1;
let l2Node = l2;
let num;

while (l1Node !== null) {
  numArr1.unshift(l1Node.value);
  l1Node = l1Node.next;
}

while (l2Node !== null) {
  numArr2.unshift(l2Node.value);
  l2Node = l2Node.next;
}

num = Number(numArr1.join('')) + Number(numArr2.join(''));
numArr3 = String(num).split('').map(elem => Number(elem));

let outputNode = new Node(numArr3.pop());
let curNode = outputNode;

while (numArr3.length) {
  curNode.next = new Node(numArr3.pop());
  curNode = curNode.next;
}

return outputNode;
}

/*

APPROACH #2

function addLinkedList(l1, l2, carryover) {
  if (!l1 && !l2 && !carryover) {
    return null;
  }

  var sum = carryover || 0;
  if (l1) {
    sum += l1.value;
  }
  if (l2) {
    sum += l2.value;
  }
  var result = new Node(sum % 10);
  if (l1 || l2) {
    var test = addLinkedList(
      l1 ? l1.next : null,
      l2 ? l2.next : null,
      sum >= 10 ? 1 : 0
    );
    result.next = rest;
  }
  return result;
}

*/

module.exports = {Node: Node, addLinkedList: addLinkedList};
