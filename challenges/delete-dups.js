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



function deleteDups(head) {
	let current = head;
	let obj = {};
	while(current){
		console.log(current);
		console.log(obj);
		if (!obj[current.value]) {
			obj[current.value] = 1;
		} else {
			current.next = current.next.next;
		}
		current = current.next;
	}
	// return current;
}

module.exports = deleteDups;

function Node(val) {
  this.value = val;
  this.next = null;
}

var a = new Node('A');
var b = new Node('B');
var c = new Node('C');
var d = new Node('C');
var e = new Node('D');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(deleteDups(a));
