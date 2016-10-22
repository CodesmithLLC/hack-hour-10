'use strict'
/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
	let lastValue = null;
	let nextValue;
	let current = head;

	if(current === null){
		return null;
	}

	while(current && current.next !== null && current.next !== current){
		nextValue = current.next;
		current.next = lastValue;
		lastValue = current;
		current = next;
	}
	current.next = lastValue;
	return current;
}


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
/*

	let lastFirstValue;
	if(head.next !== null){
		reverseLinkedList(head.next, head);
	}
	head.next = lastFirstValue;
 */
