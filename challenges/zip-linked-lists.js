/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * Done in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  // if either list is ommitted, there is no work to do.
  if (!l1 && !l2) return 'I need at least one list...';
  if (!l1) return l2;
  if (!l2) return l1;
  // keep ahold of the OG head, just in case
  // (not needed as currently implemented)
  let bigListHead = null;
  if (l1) bigListHead = l1;
  else bigListHead = l2;
  // set up recursive call
  function traverse(l1, l2) {
    // only needed base case is where l1 has come to an end
    if (!l1.next) {
      l1.next = l2;
      return;
    }
    const tempNode = l1.next;
    l1.next = l2;
    traverse(l2, tempNode);
  }
  traverse(l1, l2);
  return bigListHead;
}

module.exports = {Node: Node, zip: zip};
