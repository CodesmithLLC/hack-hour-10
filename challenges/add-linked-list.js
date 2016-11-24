/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

'use strict';

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  const l1values = [];
  const l2values = [];
  
  let results = null;
  let l1current = l1;
  let l2current = l2;
  
  while (l1current) {
    l1values.push(l1current.value);
    l1current = l1current.next;
  }
  
  while (l2current) {
    l2values.push(l2current.value);
    l2current = l2current.next;
  }

  const total = +l1values.reverse().join('') + +l2values.reverse().join('');
  const totalArray = String(total).split('').reverse();
  
  for (let i = totalArray.length - 1; i >= 0; i--) {
    results = {value: +totalArray[i], next: results};
  }
  
  return results;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};






