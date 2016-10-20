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
  if (!l1 && l2) return l2;
  if (!l2 && l1) return l1;
  if (!l2 && !l1) return undefined;

  // loop through l1 and l2
  // save next of each in temp variable
  // overwrite l1 next with temp1 and next.next with temp 2
  // have counter and alternate temp depending on parity?
  // let counter = 1;
  // let temp;

  // function zipper(l1, l2) {
  //   if (l1.next === null) return;
  //   if (l2.next === null) return;
  //   if (counter % 2) temp = l1.next;
  //   else temp = l2.next;
    
  //   l1.next = l2;
  //   l1.next.next = temp;

  //   counter++;
  //   zipper(l1, l2);
  // }

  // return zipper(l1, l2);
  let temp = l1.next;
  l1.next = l2;
  temp2 = l2.next;
  l1.next.next = temp;
  l1.next.next.next = temp2;
  return l1;
};

// const l1 = {
//   value: 1,
//   next: {
//     value: 3,
//     next: null
//   }
// };

// const l2 = {
//   value: 2,
//   next: {
//     value: 4,
//     next: null
//   }
// };

// console.log(zip(l1, l2));
module.exports = {Node: Node, zip: zip};