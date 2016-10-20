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
	if(!l1 && !l2) return false;
	if(!l1) return l2;
	if(!l2) return l1;
	let newNodeList = new Node(l1.value);
  l1 = l1.next;
	let curr = newNodeList;
	let flag = true;
	let valu;
	while(l1 !== undefined || l2 !== undefined) {
		if(flag === true) valu = l2.value, l2 = l2.next, flag = false;
		else valu = l1.value, l1 = l1.next, flag = true;
		curr.next = new Node(valu);
		curr = curr.next;
	}
	if(l1 !== undefined) curr.next = l1;
	else if(l2 !== undefined) curr.next = l2;
	return newNodeList;
}

module.exports = {Node: Node, zip: zip};
