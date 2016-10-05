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
	let counter = 0;
	let countTo = 0;
	let temp = countDown(head);
	
	function countDown(node) {
		if (node.next !== null) {
			counter ++;
			countDown(node.next);
		} else {
			counter++;
			countTo = counter - k;
		}
		return countTo;
	}

	function countUpTo(num, node) {
		if (num > 0 && node.next !== null) {
			return countUpTo(num - 1, node.next)
		} else if (num < 0) {
			return undefined;
		} else {
			return node.value;
		}
	}
	
	return countUpTo(temp, head);
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
