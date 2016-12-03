/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  // 1. Consider that adding first node
  // //   prev and next is null
  // 2. Consider when adding to end of list
  // // tail's next is the new node and the new node prev is the tail
  // // reset the new tail
  if (!this.head) this.head = this.tail = new Node(val);
  else {
    const newNode = new Node(val);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  // 1. Consider when the val is located at head
  // // set head.next as the new head and its prev as null
  // 2. Consider when the val is located at the tail
  // // set the prev val at tail to null
  // // reset the tail
  // 3. Consider when it is anywhere else
  // // set the node next as the node prev next and the node next prev as the node prev
  const nodeToRemove = this.locate(val);
  if (!nodeToRemove) return null;
  
  if (nodeToRemove === this.head) {
    this.head = this.head.next;
    this.head.prev = null;
  }
  else if (nodeToRemove === this.tail) {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
  else {
    const { prev: prevNode, next: nextNode } = nodeToRemove;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }
  
  return nodeToRemove;
};

LinkedList.prototype.locate = function(val) {
  let current = this.head;
  while (current) {
    if (current.val === val) return current;
    current = current.next;
  }
  return null;
};

module.exports = LinkedList;
