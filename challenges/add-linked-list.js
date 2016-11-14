/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  function numberMaker(list) {
		let counter = 0;
		let result = 0;
		while (list) {
			result += (list.value * Math.pow(10, counter));
			counter++;
			list = list.next;
		}
		return result;
	}
  
	let total = numberMaker(l1) + numberMaker(l2);
	return total.toString().split('').reverse().map(num => {
		return parseInt(num);
	}).reduce((acc, curr) => {
			acc = new Node(acc);
			acc.next = new Node(curr);
			return acc;
	});
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
