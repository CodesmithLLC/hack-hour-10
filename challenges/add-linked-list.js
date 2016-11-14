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
  if (!l1 && !l2) return undefined;  
  if (!l1) return l2;
  if (!l2) return l1;

  const n1 = [];
  const n2 = [];

  function collectL1(node) {
    n1.push(node.value);
    if (!node.next) return;
    collectL1(node.next);
  }

  collectL1(l1);

  function collectL2(node) {
    n2.push(node.value);
    if (!node.next) return;
    collectL2(node.next);
  }

  collectL2(l2);
  
  const num1 = Number(n1.reverse().join(''));
  const num2 = Number(n2.reverse().join(''));

  const answer = (num1 + num2).toString().split('');
  let linkedListAnswer = new Node(answer.pop());

  function push(node, value) {
    if (!node.next) return node.next = new Node(value);
    push(node.next, value);
  }

  function LL(numArr) {
    if (!numArr.length) return;
    push(linkedListAnswer, answer.pop());
    LL(numArr);
  }

  LL(answer);
  return linkedListAnswer;
}

// const a = new Node(1);
// const b = new Node(2);
// const c = new Node(3);
// a.next = b;
// b.next = c;

// const d = new Node(4);
// const e = new Node(5);
// const f = new Node(6);
// const g = new Node(7);
// d.next = e;
// e.next = f;
// f.next = g;

// console.log(addLinkedList(a, d));

module.exports = {Node: Node, addLinkedList: addLinkedList};
