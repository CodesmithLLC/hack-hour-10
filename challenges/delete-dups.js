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
  let cache = [];
  let previous;
  let current = head;
  
  while (current) {
    if (cache.indexOf(current.value) === -1) {
      cache.push(current.value);
      previous = current;
      current = current.next;
    }
    else {
      previous.next = current.next;
      current = current.next;
    }
  }
}

function Node(value) {
  this.value = value;
  this.next = null;
}

let head = new Node(3);
head.next = new Node(1);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
deleteDups(head);
console.log(head);

module.exports = deleteDups;
