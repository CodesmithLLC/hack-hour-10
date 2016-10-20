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

  //set the two next vars
  l1next = l1.next;
  l2next = l2.next;
  //set zippedLL to the first val of first L1
  let zippedLL = new Node(l1.val);
  let zippedLLHead = zippedLL;
  //set second node in zipped to first val in L2
  zippedLL.next = l2.val;
  //set zipped to next
  zippedLL = zippedLL.next;
  // while there's still vals in either LL argument'
  while (l1next || l2next) {
    //if l1 next is a value, set zipped.next to it, then reassign l1next and zipped
    if (l1next) {
      zippedLL.next = l1next;
      zippedLL = zippedLL.next;
      l1next = l1next.next;
    }
    //if l2 next is a value, set zipped.next to it, then reassign l2next and zipped
    if (l2next) {
      zippedLL.next = l2next;
      zippedLL = zippedLL.next;
      l2next = l2next.next;
    }
  }
  return zippedLLHead;
};

module.exports = {Node: Node, zip: zip};
