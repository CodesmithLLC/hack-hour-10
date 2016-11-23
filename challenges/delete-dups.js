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
  if(!(head)) return;
  let cur = head;
  while(cur.next) {
    let forward = cur;
    while(forward.next) {
      if(forward.next.value === cur.value) {
        forward.next = forward.next.next;
      } else {
        forward = forward.next;
      }
    }
    cur = cur.next;
  }
  return head;
}

module.exports = deleteDups;
