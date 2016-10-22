/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
  this.value = value;
  this.next = null;
}

function reverseLinkedList(head) {
  // turn the linked list into an array;
  const values = [];
  let currNode = head;
  while (currNode) {
    values.push(currNode.value);
    currNode = currNode.next;
  }
  // Pop values from array to assemble new LL
  let headWiseNode = new Node(values.pop());
  // store a ref to the head for returning later
  const newHead = headWiseNode;
  while (values.length) {
    const newNode = new Node(values.pop());
    // point headWiseNode at our new Node
    headWiseNode.next = newNode;
    // reset the reference to headWiseNode for the next iteration
    headWiseNode = newNode;
  }
  return newHead;
}
module.exports = {
  Node,
  reverseLinkedList,
};

let head = 0;
// let thisNode = head;
// for (let i = 1; i < 5; i++) {
//   const newNode = new Node(i);
//   thisNode.next = newNode;
//   thisNode = newNode;
// }

printLL(head);
console.log('----------');
printLL(reverseLinkedList(head));

function printLL(head) {
  let currNode = head;
  while (currNode) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}
