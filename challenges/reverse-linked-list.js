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

  //check for valid head
  if (typeof head != 'object' || !(head.hasOwnProperty('value'))  || !(head.hasOwnProperty('next'))) return undefined;

  //get array of all values in the linked list
  let arr = [];
  let temp = head;

   while (temp) {
   arr.push(temp.value);
   temp = temp.next;
  }
  //reverse the array of values
  let valArrs = arr.reverse();

  //start the list
  let newHead = new Node(valArrs[0]);
  valArrs.shift();
  let tail = newHead;
  let newTemp;

  //add to the tail
  while (valArrs.length != 0) {
    newTemp = new Node(valArrs[0]);
    valArrs.shift();
    tail.next = newTemp;
    tail = tail.next;
  }

  //return the reversed linked list
  return newHead;
 }

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
