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
  if (!l1) return l2;
  if (!l2) return l1;
  
  const head = l1;
  let curr = l1;
  let next1 = l1.next
  let next2 = l2.next;
  if (l2) curr.next = l2;
  if (curr.next) curr = curr.next;

  while (curr) {
    if (next1) curr.next = next1;
    if (curr.next) curr = curr.next; else break;
    next1 = next1.next;
    if (next2) curr.next = next2;
    if (curr.next) curr = curr.next; else break;
    next2 = next2.next;
  }
  return head;
};

module.exports = {Node: Node, zip: zip};
