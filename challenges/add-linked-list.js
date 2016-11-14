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
  let num1 = '';
  let num2 = '';
  let temp;

// iterate through l1 to get the numbers
  temp = l1;
  while (temp != null) {
    num1 = temp.value + num1;
    temp = temp.next;
  }

// iterate through l2 to get the numbers
  temp = l2;
  while (temp != null) {
    num2 = temp.value + num2;
    temp = temp.next;
  }

// add the numbers from l1 and l2
  const newNum = Number(num1) + Number(num2);
  const numArr = newNum.toString().split('');

// create the first node
  let tempNum = numArr.shift();
  let tail = new Node(tempNum);
  let head;

// iterate through the remainder of the number array to grab all of the values and generate the linked list
  while (numArr.length != 0) {
    tempNum = numArr.shift();
    head = new Node(tempNum);
    head.next = tail;
    tail = head;
  }
  return head;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
