/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true is the linked list has a cylical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

// **Rewrite with tortoise and hare solution**

var Node = function(value) {
  this.value = value;
  this.next = null;
}

function hasCycle(head) {
  if (head.constructor !== Node || head === null || head.next === null || head.next.next === null) {
    return false;
  }

  let firstNode = head.next;
  let curNode = head.next.next;

  while (curNode.next !== null) {
    if (firstNode === curNode) {
      return true;
    }
    else { curNode = curNode.next; }
  }
  return false;
}

module.exports = {Node: Node, hasCycle: hasCycle}

/*

Solution #1: O(n) time, O(n) space; no mutation of original nodes

function hasCycle(head) {
let nodesArr = [];
let curNode = head;

while (curNode.next !== null) {
  if (nodesArr.includes(curNode)) {
    return true;
  }
  else {
    nodesArr.push(curNode);
    curNode = curNode.next;
  }
}
return false;
}

*/

/* Solution #2: O(n) time, O(1) space; no mutation of original nodes

function hasCycle(head) {
  if (head.constructor !== Node || head.next === null || head.next.next === null) {
    return false;
  }

  let firstNode = head.next;
  let curNode = head.next.next;

  while (curNode.next !== null) {
    if (firstNode === curNode) {
      return true;
    }
    else { curNode = curNode.next; }
  }
  return false;
}

*/