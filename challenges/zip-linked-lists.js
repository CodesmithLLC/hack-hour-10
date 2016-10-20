/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

// n - n - n
// a - a - a
// n - a - n - a - n - a


function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {

  if (!(l1 && l2)) {
    return l1? l1 : l2;
  }
  let counter = 0;
  let currentL1Node = l1;
  let currentL2Node = l2;
  let nodeToZip = l2;
  let currentNode = currentL1Node;
  let startNode = l1;
  while (currentL1Node && currentL2Node) {
    // alternate between ll1 and ll2
    let nodeToZip = (counter % 2 === 1) ? currentL1Node : currentL2Node;

    // zip the next node from the other list and increment counter
    nextCurrentNode = currentNode.next;
    currentNode.next = nodeToZip;

    // move pointer to the zipped node
    currentNode = nodeToZip;

    // update head pointers
    if (counter % 2 === 0) {
      currentL1Node = nextCurrentNode;
    }
    else {
      currentL2Node = nextCurrentNode;
    }
    counter += 1;

  }
  // add whatever is leftover
  let leftover = currentL1Node? currentL1Node : currentL2Node;
  currentNode.next = leftover.next;
  return l1

};



module.exports = { Node: Node, zip: zip };
