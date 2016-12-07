/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 * L1: FIRST
 * L2: SECOND
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
	if(arguments.length < 2) return arguments[0];

	let currentNodeofL1 = head;
	let onlyValues = [];
	while(currentNode){
		onlyValues.push(currentNode.value);
		currentNode = currentNode.next;
	}

	let currentNodeofL2 = head;
	let onlyValues2 = [];
	while(currentNodeofL2){
		onlyValues2.push(currentNode.value);
		currentNode = currentNode.next;
	}

	let l3 = new Node();

	onlyValues.forEach(function(value){
		onlyValues2.forEach(function(value2){
			l3.value(value, value2)
		});
	});
	return l3;
};

module.exports = {Node: Node, zip: zip};
