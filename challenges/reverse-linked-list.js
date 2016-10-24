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
  if (!head) return null;
  if (!head.next) return head;
  
  let newHead;

  function recurse(previousNode, currentNode) {
    if (!currentNode.next) {
      currentNode.next = previousNode;
      newHead = currentNode;
      return previousNode;
    }
    recurse(currentNode, currentNode.next).next = previousNode;
    return previousNode;
  }
  recurse(head, head.next);
  head.next = null;

  return newHead;
}

// let A = new Node('a');
// let B = new Node('b');
// let C = new Node('c');
// let D = new Node('d');
// let E = new Node('e');

// A.next = B;
// B.next = C;
// C.next = D;
// D.next = E;

// console.log(reverseLinkedList(A));

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };