function Node(value) {
  this.value = value;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let s1 = '', s2 = ''
  do s1 = l1.value + s1
  while (l1 = l1.next)
  do s2 = l2.value + s2
  while (l2 = l2.next)
  const n = Array.from((+s1 + +s2).toString()).reverse()
  n.forEach((digit, idx) => n[idx] = new Node(+digit))
  n.forEach((node, idx) => node.next = n[idx + 1])
  return n[0]
}

module.exports = { Node: Node, addLinkedList: addLinkedList };
