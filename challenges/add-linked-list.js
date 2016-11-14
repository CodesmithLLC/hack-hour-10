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
  let arrayl1 = [];
  let arrayl2 = [];
  let ansArr = [];

  let currl1 = l1;
  let currl2 = l2;

  let ansNode;

  while (currl1) {
    arrayl1.push(currl1.value);
    currl1 = currl1.next;
  }

  while (currl2) {
    arrayl2.push(currl2.value);
    currl2 = currl2.next;
  }

  if (arrayl1.length > arrayl2.length) {
    for (let i = 0; i < arrayl1.length; i++) {
      if (arrayl2[i] === undefined) ansArr.push(arrayl1[i]);
      ansArr.push(arrayl1[i] + arrayl2[i]);
    }
  } else if (arrayl2.length > arrayl1.length) {
    for (let i = 0; i < arrayl2.length; i++) {
      if (arrayl1[i] === undefined) ansArr.push(arrayl2[i]);
      ansArr.push(arrayl12[i] + arrayl1[i]);
    }
  } else {
    for (let i = 0; i < arrayl1.length; i++) {
      ansArr.push(arrayl1[i] + arrayl2[i]);
    }
  }

  for (let i = 0; i < ansArr.length; i++) {
    if (ansNode === undefined) ansNode = new Node(ansArr[i]);
    else ansNode.next = new Node(ansArr[i]);
  }
  return ansNode;
}

module.exports = {
  Node: Node,
  addLinkedList: addLinkedList
};
