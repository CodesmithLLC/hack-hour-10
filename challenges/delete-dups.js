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
  let place = head;
  const store = {};
  while (place) {
    if (!store[place.value]) {
      store[place.value] = place.value;
      place = place.next;
    } else place = place.next.next;
  }
  return head;
}

module.exports = deleteDups;
