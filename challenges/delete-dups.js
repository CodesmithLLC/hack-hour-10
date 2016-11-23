//write a function deleteDups that removes duplicates from an unsorted linked list
// 1->2->3->3
//delete dups (head) -> 1 -2 -3

// extra how would you solve this problem if temporary buffer not allowed

function Node(val) {
  this.value = val;
  this.next = null;
}

function deleteDups(head) {
  if (!head) return head;
  const seen = { 
    [head.value]: true,
  };

  let prev = head;
  const originalHead = head;
  head = head.next;

  while (head) {
    if (seen[head.value]) {
      prev.next = head.next;
    }
    else {
      seen[head.value] = true;
      prev = head;
    }
    head = head.next;
  }
  return originalHead;

}

module.exports = deleteDups;