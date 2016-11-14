
/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.push = function (value) {
  let newNode = new Node(value);
  if (this.head === null) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    this.tail.next = newNode;
    this.tail = this.tail.next;
  }
};

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  //convert each linked list into an array
  let array1 = [];
  let array2 = [];
  let answer = [];


  let currVal1 = l1;
  let currVal2 = l2;

  while (currVal1) {
    array1.push(currVal1.value);
    currVal1 = currVal1.next;
  }

  while (currVal2) {
    array1.push(currVal2.value);
    currVal2 = currVal2.next;
  }

  //let the answer array be a sum of each node
  if (array1.length > array2.length) {
    for (let i = 0; i < array1.length; i++) {
      answer.push(array1[i] + array2[i]);
    }
  } else {
    for (let i = 0; i < array2.length; i++) {
      answer.push(array1[i] + array2[i]);
    }
  }
  //create a new linked list with the sums from the answer array
  let result = new LinkedList();
  answer.forEach((element) => result.push(element));
  return result;
}

module.exports = { Node: Node, addLinkedList: addLinkedList };