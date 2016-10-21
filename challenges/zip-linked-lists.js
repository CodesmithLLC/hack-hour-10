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
  if
  let head = l1;
  let temp1;
  let temp2;
  while (!l1.next || !l2.next){
    temp = l1.next;
    l1.next = l2;
    temp2 = l2.next;
    l2.next = temp1;
    l1 = temp1;
    l2 = temp2;
  }
  if (!l1.next && !l2.next) l1.next = l2;
  if (!l1.next){
    l1.next = l2;
    l2.next = temp1;
  }
  if (!l2.next){
    l2.next = l1;
    l1.next = temp2;
  }
  return head;
}

module.exports = {Node: Node, zip: zip};
