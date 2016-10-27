-/**
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
	if (k < 1) return 'Not a valid input';
  
    let counter = 0;

	function nodeCount(node) {
		counter++;
		if (node.next === null) return;
		return nodeCount(node.next);
	}
	
	nodeCount(head);

    // If k > length of linked list, returns head
	function findKth(node) {
		counter--;
		if (counter < k) return node;
		return findKth(node.next);
	}
    
	return findKth(head);
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
