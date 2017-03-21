/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val, n = null) {
  this.value = val;
  this.next = n;
}

function zip(l1, l2) {
  // Setting pointer variables.
  let curr1 = look1 = l1;
  let curr2 = look2 = l2;

  // Zip until we reach the end of one/both of the lists.
  while (curr1 && curr2) {

    // Moving look pointers.
    if (look1) look1 = look1.next;
    if (look2) look2 = look2.next;

    // Zipping.
    curr1.next = curr2;
    if (look1) curr2.next = look1;

    // Moving curr pointers.
    [curr1, curr2] = [look1, look2];

  }

  // Return first list if it exists. Or second. Or null.
  return l1 ? l1 : l2;
}

module.exports = {Node: Node, zip: zip};