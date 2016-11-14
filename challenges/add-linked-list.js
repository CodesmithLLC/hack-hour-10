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
  let s1 = '', s2 = '';
  let curr1 = l1, curr2 = l2;
  while (curr1) {
    s1 += curr1.value.toString();
    curr1 = curr1.next;
  }
  while (curr2) {
    s2 += curr2.value.toString();
    curr2 = curr2.next;
  }
  let n1 = Number(Array.from(s1).reverse().join(''));
  let n2 = Number(Array.from(s2).reverse().join(''));
  let s = Array.from((n1 + n2).toString()).reverse();
  let nodes = [];
  for (let i = 0; i < s.length; i++) {
    let newNode = new Node(Number(s[i]));
    nodes.push(newNode);
  }
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].next = nodes[i + 1];
  }
  return nodes[0];
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
