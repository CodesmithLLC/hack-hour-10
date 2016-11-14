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

function addLinkedList(l1, l2, carry = 0) {
  if (!l1 & !l2 & !carry) return null;
  if (!l1 & !carry) return l2;
  if (!l2 & !carry) return l1;
  const total = 0;
  if (l1.value) total += l1.value;
  if (l2.value) total += l2.value
  if (carry) total += carry;
  const ones = total > 9 ? total - 10 : total;
  const newCarry = total > 9 ? 1 : 0;
  const node = new Node(ones);
  node.next = addLinkedList(l1 ? l1.next : null, l2 ? l2.next : null, newCarry);
  return node;
}

module.exports = { Node: Node, addLinkedList: addLinkedList };
