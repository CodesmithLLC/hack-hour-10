function Node(value) {
  this.value = value;
  this.next = null;
}

function hasCycle(head) {
  if (!head || !head.next) return false;
  let turtle = head;
  let rabbit = turtle.next;
  while (rabbit.next.next) {
    if (turtle === rabbit) return true;
    turtle = turtle.next;
    rabbit = rabbit.next.next;
  }
  return false;
}

module.exports = { Node: Node, hasCycle: hasCycle }
