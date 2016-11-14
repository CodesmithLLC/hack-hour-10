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
	total = total.toString().split('').reverse().map(num => {
		return parseInt(num);
	});
	let head = new Node(total[0]);
	let node = head;
	for (let i = 1; i < total.length; i++) {
		node.next = new Node(total[i]);
		node = node.next;
	}
	return head;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
