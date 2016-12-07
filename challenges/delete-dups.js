/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

var Node = function(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
	let currentNode = head;
	let currentNodelooked = head;
	let obj = {};
	while(currentNode && currentNodelooked){
		if(obj[currentNode.value] !== undefined){
			var therepeatValue = obj[currentNode.value];
			currentNodelooked.next = currentNodelooked.next.next;
			console.log("THIS IS currentNodelooked", currentNodelooked.value);
			// currentNode.next = currentNode.next.next;
			delete therepeatValue;
		} else {
			obj[currentNode.value] = currentNode.value;
		}
		currentNode = currentNode.next;
	}
	return head;
}

// module.exports = deleteDups;
//
var node1 = new Node(10);
var node2 = node1.next = new Node(10);
var node3 = node2.next = new Node(8);
// var node3 = node2.next = new Node(35);
// var node4 = node3.next = new Node(3);

console.log(deleteDups(node2));