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
  if( !(l1 instanceof Node) || !(l2 instanceof Node)) {
    if(l1 instanceof Node) {
      return l1;
    }
    else if (l2 instanceof Node) {
      return l2;
    }
    else {
      return;
    }
  }
  let next1 = l1;
  let next2 = l2;
  let curZip;
  let zipped = new Node(next1.value);
  zipped.next = new Node(next2.value);
  curZip = zipped.next;
  while(next1.next && next2.next) {
    next1 = next1.next;
    next2 = next2.next;
    curZip.next = new Node(next1.value);
    curZip = curZip.next;
    curZip.next = new Node(next2.value);
    curZip = curZip.next;
  }
  while(next1.next) {
    next1 = next1.next;
    curZip.next = new Node(next1.value);
    curZip = curZip.next;
  }
  while(next2.next) {
    next2 = next2.next;
    curZip.next = new Node(next2.value);
    curZip = curZip.next;
  }
  return zipped;
};


module.exports = {Node: Node, zip: zip};
