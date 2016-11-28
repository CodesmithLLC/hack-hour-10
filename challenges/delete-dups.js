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
  const storage = [];
  let temp = head;
  let temp2 = head;
  let tail;

  while (temp != null) {
    if (storage.includes(temp.value)) {
      tail = temp.next;
      temp2.next = tail;
    } else {
      storage.push(temp.value);
    }
    temp2 = temp;
    temp = temp.next;
  }
  return head;
}

module.exports = deleteDups;
