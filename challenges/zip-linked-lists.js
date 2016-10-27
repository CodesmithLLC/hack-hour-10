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
  let result;
	if (l1.value !== null) result = new Node(l1.value);
	if (l2.value !== null) result.next = new Node(l2.value);
	function zipper(l1, l2, result) {
		if (l1.next === null && l2.next === null) {
			result.next.next = new Node(l1.value);
			result.next.next.next = new Node(l2.value);
			return;
		}
		if (l1.next !== null) {
			result.next.next = new Node(l1.value);
		}
		if(l2.next !== null) {
			result.next.next.next = new Node(l2.value);
		}
		return zipper(l1.next, l2.next, result.next.next);
	}
	zipper(l1.next, l2.next, result);
	return result;
};

module.exports = {Node: Node, zip: zip};
