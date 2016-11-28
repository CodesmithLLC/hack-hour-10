function Node(value) {
  this.value = value;
  this.next = null;
}

function hasCycle(head) {
  let turtle = head;
  let rabbit = head.next ? head.next : false;
  while (rabbit.next.next) {
    if (turtle === rabbit) return true;
    turtle = turtle.next;
    rabbit = rabbit.next.next;
  }
  return false;
}

module.exports = {Node: Node, hasCycle: hasCycle}
var node1 = new Node('1');
var node2 = node1.next = new Node('2');
var node3 = node2.next = new Node('3');
var node4 = node3.next = new Node('4');
var node5 = node4.next = new Node('5');
console.log(hasCycle(node1));
node5.next = node2;
console.log(hasCycle(node1));
