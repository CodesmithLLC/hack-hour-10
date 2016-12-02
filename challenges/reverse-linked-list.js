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

  let original = head;

  let arr = [];

  while(!head) {
    arr.push(head.value);
    head = head.next
  }

  let temp = original;

  let newHead = new Node(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    newHead = addfront(newHead, arr[i])
    ;
  }
  return newHead;
}

function addfront(head, value) {
  let temp = head;
  let front = new Node(value);
  head = front;
  head.next = temp;
  return head || front;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};



let a = new Node("A");
let b = new Node("B");
let c = new Node("C");

a.next = b;
b.next = c;


console.log(reverseLinkedList(a));
