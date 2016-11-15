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
  let head;
  let tail;

  function helper(a, b, carryOver) {
    if (a === null || b === null) {
      return head;
    }
    let newValue = a.value + b.value + carryOver;
    newValueCarryOver = 0;
    if (newValue > 9) {
      newValueCarryOver = newValue - 9;
      newValue = 0;
    }
    const newNode = new Node(newValue);
    if (head === undefined) {
      head = newNode;
      tail = newNode
    } else {
      tail.next = newNode;
      tail = newNode;
    }
    return helper(a.next, b.next, newValueCarryOver);
  }
  return helper(l1, l2, 0);
}

// const l1_a = new Node(3);
// const l1_b = new Node(1);
// const l1_c = new Node(5);

// const l2_a = new Node(5);
// const l2_b = new Node(9);
// const l2_c = new Node(2);

// l1_a.next = l1_b;
// l1_b.next = l1_c;

// l2_a.next = l2_b;
// l2_b.next = l2_c;

// console.log(addLinkedList(l1_a, l2_a));

module.exports = {
  Node: Node,
  addLinkedList: addLinkedList
};