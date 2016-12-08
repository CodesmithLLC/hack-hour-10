/**
 * Merge two linked lists so that their nodes alternate.
 * Let the head of the first linked list be the head of the
 * resulting zipped linked list if it exists.
 *
 * O(n) time and O(1) space
 *
 * @param {Node} l1
 * @param {Node} l2
 * @return {Node}
 */
function zip(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  l1.next = zip(l2, l1.next);
  return l1;
};

function Node(val) {
  this.value = val;
  this.next = null;
}

module.exports = { Node: Node, zip: zip };
