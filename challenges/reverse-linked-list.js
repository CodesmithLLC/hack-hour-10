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
  if (!head || !head.next) return head;

  let previous = null;
  let current = head;
  let next;

  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  head = previous;
  return head;
}

var bird = { value: 'DoDo' };
var cat = { value: 'felix' };
var dog = { value: 'Scooby Doo' };
var duck = { value: 'Howard' };
bird.next = cat;
cat.next = dog;
dog.next = duck;

console.log(reverseLinkedList(bird));


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
