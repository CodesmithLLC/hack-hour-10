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

  if (!l1 && l2) return l2;
  if (!l2 && l1) return l1;
  let remainder = 0;
  let prevNode;
  let onHead = true;
  let head;

  while (l1 && l2) {
    const sum = l1.value + l2.value + remainder;
    let sumNode;
    if (sum < 10) {
      sumNode = new Node(l1.value + l2.value);
      remainder = 0;
    } else {
      sumNode = new Node((l1.value + l2.value) % 10);
      remainder = 1;
    }
    if (prevNode) prevNode.next = sumNode;
    if (onHead) {
      head = sumNode;
      onHead = false;
    }
    prevNode = sumNode;
    l1 = l1.next;
    l2 = l2.next;
  }
  if (remainder) prevNode.next = new Node(remainder);
  // console.log('list', head);
  // console.log(remainder);
  const leftover = l1 ? l1 : l2;
  // console.log('leftover', leftover);
  // console.log('head', head);
  if (leftover) prevNode.next = addLinkedList(leftover, new Node(remainder));
  return head;
}

module.exports = { Node: Node, addLinkedList: addLinkedList };
