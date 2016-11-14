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
  let n1 = '', n2 = '',
    c1 = l1, c2 = l2,
    sumStr, sumHead;
  
  while (c1 && c2) {
    n1 = c1.value + n1; // coerces into string (hopefully)
    n2 = c2.value + n2; // coerces into string (hopefully)
    c1 = c1.next;
    c2 = c2.next;
  }

  // handles uneven finish
  if (!c1) {
    while (c2) {
      n2 = c2.value + n2;
      c2 = c2.next;
    }
  } else if (!c2) {
    while (c1) {
      n1 = c1.value + n1;
      c1 = c1.next;
    }
  }
  
  sumStr = Number(n1) + Number(n2) + ''; // sum, as a string though
  sumHead = new Node(Number(sumStr[0]));

  // tricky - had to loop left -> right, so had 2x placeholder variables  
  for (let i = 1; i < sumStr.length; i++) {
    let newNode = new Node(Number(sumStr[i]));
    newNode.next = sumHead;
    sumHead = newNode;
  }

  return sumHead;

}

module.exports = { Node: Node, addLinkedList: addLinkedList };
