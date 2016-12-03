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
  const newNode = new Node(val);
  if (!this.head) this.head = this.tail = newNode;
  else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
  return true;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let currNode = this.head;
  let prevNode;
  if (currNode.val === val) {
    this.head = currNode.next;
    if (this.head) this.head.prev = null;
    if (!this.head) this.tail = null;
    return currNode;
  }
  while (currNode) {
    prevNode = currNode;
    currNode = currNode.next;
    if (currNode.val === val) {
      if (currNode === this.tail) {
        this.tail = prevNode;
        prevNode.next = null;
        return currNode;
      }
      prevNode.next = currNode.next;
      currNode.next.prev = prevNode;
      return currNode;
    }
  }
};

module.exports = LinkedList;
