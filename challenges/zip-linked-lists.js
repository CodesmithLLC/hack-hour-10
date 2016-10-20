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
  
  let l1Node = l1
    , l2Node = l2
    , zipHead = new Node(l1Node.value)
    , zipTail = new Node(l2Node.value)

  zipHead.next = zipTail;

  while (l1Node.next && l2Node.next) {
    l1Node = l1Node.next;
    l2Node = l2Node.next;
    zipTail = zipTail.next = new Node(l1Node.value);
    zipTail = zipTail.next = new Node(l2Node.value);
  }

  if (l1Node.next) {
    while (l1Node.next) {
      l1Node = l1Node.next;
      zipTail = zipTail.next = new Node(l1Node.value);
    }
  } else {
    while (l2Node.next) {
      l2Node = l2Node.next;
      zipTail = zipTail.next = new Node(l2Node.value);
    }
  }
  return zipHead;
  
};

module.exports = { Node: Node, zip: zip };
