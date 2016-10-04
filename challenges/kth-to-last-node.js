/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}


function kthToLastNode(k, head) {
	let currentNode = head;
	let onlyValues = [];

	while(currentNode) {
		onlyValues.push(currentNode.value);
		currentNode = currentNode.next;
	}
	return onlyValues[onlyValues.length - k]; // will return the VALUE of the node @ that place.
}


// if node.next === null, you've reached the last value, use while loop to search thru the nodes until hitting null.
			// to traverse linked list, set currentNode = currentNode.next(accessing the next)
// push values into onlyValues array.
// @ end return onlyValues[onlValues.length - k] ==== the value from the last point minus k items.
module.exports = {Node: Node, kthToLastNode: kthToLastNode};
