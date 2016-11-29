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
  let valuesSeen = {}
  let prev = curr = head;

  valuesSeen[curr.value] = true;

  while (curr.next) {
    if (valuesSeen[curr.next.value]) prev.next = curr.next.next;
    else if()
  }

}

let curr = head;
let prev;

while (current && current.next) {
  prev = curr
  while (prev.next) {
    if (curr.value === prev.next.value) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
}

module.exports = deleteDups;
