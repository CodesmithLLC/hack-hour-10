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

function zip(n1, n2) {
  // case where first argument does not exist
  // We can simply set n1 to n2;
  if (!n1) return (n1 = n2);

  // Case where there is no more nodes on list 1 to zip
  // so we will simply return
  if (!n2) return;

  const t1 = n1.next;
  const t2 = n2.next;

  // Case where there is no more nodes on list 2 to zip
  // so we will simply just take whatever we have and attach it
  // to the remaining nodes on list 1
  if (!t1) return (n1.next = n2);

  const t3 = t1.next;
  n1.next = n2;
  n2.next = t1;
  t1.next = t2;

  if (t1 && !t2) zip(t1, t3);
  else zip(t2, t3);
};

module.exports = { Node: Node, zip: zip };
