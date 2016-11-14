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
  let current1 = l1;
  let current2 = l2;
  let carry = 0;

  while (current1) {
    console.log(current1.value);
    console.log(current2.value);
    current1.value = current1.value + current2.value + carry;
    if (current1.value < 10) {
      carry = 0;
    }
    if (current1.value >= 10) {
      carry = 1;
      current1.value = current1.value - 10;
    }
    current1 = current1.next;
    current2 = current2.next;
  }

  while (current2) {
    current1 = new Node(current2.value);
    current1 = current1.next;
    current2 = current2.next;
  }
  
  return l1;
}

//  Ex. LINKED LIST1
const one = { value: 3 };
const two = { value: 1 };
const three = { value: 5 };
one.next = two;
two.next = three;
three.next = null;

//  Ex. LINKED LIST2
const oneone = { value: 5 };
const twotwo = { value: 9 };
const threethree = { value: 2 };
const fourfour = {value: 4};
oneone.next = twotwo;
twotwo.next = threethree;
threethree.next = fourfour;
fourfour.next = null;

// TEST
// console.log('l1 ', one);
// console.log('l2 ', oneone);
console.log(addLinkedList(one, oneone));


module.exports = {Node: Node, addLinkedList: addLinkedList};
