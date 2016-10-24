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

  let val = l1.value;
  let head = new Node(val)
  let tail = head;
  l1 = l1.next;
  let cur = l2;

  while (cur) {

    if (cur === l2) {
      val = cur.value;
      tail.next = new Node(val);
      tail = tail.next;
      l2 = l2.next;
      cur === l1;
    }

    if (cur === l1) {
      val = cur.value;
      tail.next = new Node(val);
      tail = tail.next;
      l1 = l1.next;
      cur === l2;
    }

  }
  return head;

 }

module.exports = {Node: Node, zip: zip};
