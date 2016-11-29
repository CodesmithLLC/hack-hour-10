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
var Node = function (value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
  const cache = {};
  let current = head;
  while (current) {
    if (cache[current.value] === current.value) {
      current = current.next.next;
    } else {
      cache[current.value] = current.value;
      current = current.next;
    }
  }
  return current;
}

// var a = new Node('A');
// var b = new Node('B');
// var c = new Node('B');
// var d = new Node('C');

// a.next = b;
// b.next = c;
// c.next = d;

// console.log(deleteDups(a));

module.exports = deleteDups;
