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

function addLinkedList(l1, l2, carryover) {
  if (!l1 && !l2 && !carryover) {
    return null;
  }
  let sum = carryover || 0;
  if (l1) {
    sum += l1.value;
  }
  if (l2) {
    sum += l2.value;
  }
  const result = new Node(sum % 10);
  if (l1 || l2) {
    const rest = addLinkedList(
      l1 ? l1.next : null,
      l2 ? l2.next : null,
      sum >= 10 ? 1 : 0
    );
    result.next = rest;
  }
  return result;
}

// //  Ex. LINKED LIST1
// const one = { value: 3 };
// const two = { value: 1 };
// const three = { value: 5 };
// one.next = two;
// two.next = three;
// three.next = null;

// //  Ex. LINKED LIST2
// const oneone = { value: 5 };
// const twotwo = { value: 9 };
// const threethree = { value: 2 };
// const fourfour = {value: 4};
// oneone.next = twotwo;
// twotwo.next = threethree;
// threethree.next = fourfour;
// fourfour.next = null;

// // TEST
// console.log('l1 ', one);
// console.log('l2 ', oneone);
// console.log(addLinkedList(one, oneone));


module.exports = {Node: Node, addLinkedList: addLinkedList};
