/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  // if (l1 === null) {
  //   return;
  // }
  if (l1 !== null && l2 !== null) {
    // Hold on to current next values
    l1_next = l1.next;
    l2_next = l2.next;

    // Assign adjustments
    if (l1.next !== null) {
      l2.next = l1.next;
    }
    l1.next = l2;

    // Pass saved next values to zip
    zip(l1_next, l2_next);
  }

};

module.exports = {
  Node: Node,
  zip: zip
};

// const a_1 = new Node(1);
// const a_2 = new Node(2);
// const a_3 = new Node(3);
// a_1.next = a_2;
// a_2.next = a_3;

// const b_1 = new Node(4);
// const b_2 = new Node(5);
// const b_3 = new Node(6);
// // const b_4 = new Node(7);
// b_1.next = b_2;
// b_2.next = b_3;
// // b_3.next = b_4;

// console.log(a_1);
// console.log(b_1);

// zip(a_1, b_1);
// console.log(a_1);