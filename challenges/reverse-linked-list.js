/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    let valueArr = [];
	
	if(!head.value) return undefined;
	
	function populateValueArr(node) {
		valueArr.push(node.value);
		if (node.next !== null) {
			populateValueArr(node.next);
		}
		
	}
	populateValueArr(head);
	
	function reverser(node) {
		if (valueArr.length > 0) {
			node.value = valueArr.pop();
			reverser(node.next);
		}
	}
	reverser(head);
	return head;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
