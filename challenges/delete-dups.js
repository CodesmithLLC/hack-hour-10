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

function Node(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {

  // Store values to check dupes while traversing  
  const values = {};
  
  // Helper function that deletes nodes by redirecting pointers
  const removeNextNode = node => node.next = node.next.next ? node.next.next : null;

  // Checks if next node's value is a dupe and either deletes or stores value
  function traverse(LL) {
    if (!LL.next) return;
    values[LL.next.value] ? removeNextNode(LL) : values[LL.next.value] = 1;
    traverse(LL.next);
  }

  traverse(head);
  return head;
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(2);
const d = new Node(3);
const e = new Node(4);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(deleteDups(a));

module.exports = deleteDups;
