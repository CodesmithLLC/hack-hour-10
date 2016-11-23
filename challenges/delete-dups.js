
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