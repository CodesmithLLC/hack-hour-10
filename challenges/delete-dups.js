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
  const nonDups = {};
  let currNode = head;
  do if (!nonDups[currNode.value]) nonDups[currNode.value] = currNode
  while (currNode = currNode.next)
  Object.keys(nonDups).forEach((node, idx) => node.next = nonDups[idx + 1]);
  return head;
}

module.exports = deleteDups;
