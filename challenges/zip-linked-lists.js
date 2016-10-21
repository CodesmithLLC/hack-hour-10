"use strict"
function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  l1.next = zip(l1.next,l2);
  return l1;
}
 module.exports = {Node: Node, zip: zip};
