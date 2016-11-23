'use strict';
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
  let store = [];
  let node = head;
  let prev;
  let value;

  while (node) {
    if (store.indexOf(node.value) !== -1) {
      prev.next = node.next;
    }
    store.push(node.value);
    prev = node;
    node = node.next;
  }

  return head;
}

let a = {value: 1};
// let b = {value: 2};
// let c = {value: 3};
// let d = {value: 3};
// let e = {value: 4};
let f = {value: 1};

a.next = f;
// // b.next = c;
// c.next = d;
// // d.next = null;
// d.next = e;
// e.next = f;
f.next = null;

console.log(deleteDups(a));

module.exports = deleteDups;
