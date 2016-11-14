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
  let l1num = 0;
  let l2num = 0;
  let magnitude = 0;
  // turn linked lists into integers and let JS do the rest
  while (l1) {
    l1num += (l1.value * Math.pow(10, magnitude++));
    console.log('Accumulated l1:', l1num);
    l1 = l1.next;
  }
  magnitude = 0;
  while (l2) {
    l2num += (l2.value * Math.pow(10, magnitude++));
    console.log('Accumulated l2:', l2num);
    l2 = l2.next;
  }
  console.log('final l2:', l2num);
  const resultArr = (l1num + l2num).toString().split('');
  let firstNode = new Node(resultArr.pop());
  let currNode = firstNode;
  while (resultArr.length) {
    currNode.next = new Node(resultArr.pop());
    currNode = currNode.next;
  }
  console.log('All done:', l1num + l2num, firstNode);
}

const myl1 = new Node(1);
myl1.next = new Node(2);
const myl2 = new Node(2);
myl2.next = new Node(2);
myl2.next.next = new Node(2);
addLinkedList(myl1, myl2);
module.exports = {Node: Node, addLinkedList: addLinkedList};
