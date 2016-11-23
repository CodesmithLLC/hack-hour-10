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
  // Worry about floating point numbers?

  // Gather the integers into a string of number
  let node, int1 = '', int2 = '';

  node = l1;
  while (node) {
    int1 = node.value + int1;
    node = node.next;
  }

  node = l2;
  while (node) {
    int2 = node.value + int2;
    node = node.next;
  }

  // Convert the string of numbers into an actual integer
  const num1 = +int1 || 0, num2 = +int2 || 0;

  // Add the two numbers
  const sum = num1 + num2;

  // Change the number back to a string
  const str_sum = sum.toString();

  // Create a node representation of the number
  const origin = linkedNodes = new Node(str_sum[str_sum.length - 1]);

  console.log(origin);
  // for (let i = str_sum.length - 2; i >= 0; i--) {
  //   linedNodes = linkedNodes.next = new Node(str_sum[i]);
  // }

  // return origin;
}

const n = new Node(1);
n.next = new Node(2);
n.next.next = new Node(3);

const n2 = new Node(3);
n2.next = new Node(4);

console.log(addLinkedList(n, n2));

module.exports = { Node: Node, addLinkedList: addLinkedList };
