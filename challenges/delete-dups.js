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
  const seenVals = [];
  // if there is only one item, it must not have any dupes
  if (!head.next) return head;
  seenVals.push(head.value);
  let currNode = head.next;
  let lastNode = head;
  while (currNode) {
    // if the value at the current Node has already been seen, delete it from
    // the linked list
    console.log('Seenvals: ', seenVals, 'Current Value: ', currNode.value);
    if (seenVals.includes(currNode.value)) {
      if (!currNode.next) {
        console.log('Deleting last node! ', lastNode);
        lastNode.next = null;
        return head;
      }
      lastNode.next = currNode.next;
      currNode = currNode.next;
    } else {
      seenVals.push(currNode.value);
      lastNode = lastNode.next;
      currNode = currNode.next;
    }
  }
  return head;
}

function Node(value) {
  this.value = value;
  this.next = null;
}
const ourHead = new Node(0);
ourHead.next = new Node(1);
ourHead.next.next = new Node(1);
ourHead.next.next.next = new Node(2);
ourHead.next.next.next.next = new Node(2);
ourHead.next.next.next.next = new Node(2);

console.log(deleteDups(ourHead));

module.exports = deleteDups;
