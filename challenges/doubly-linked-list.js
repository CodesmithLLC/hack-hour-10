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
  if (!head) this.head = this.tail = newNode;
  else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let currNode = this.head;
  let prevNode;
  if (currNode.val === val) {
    this.head = currNode.next;
    return currNode;
  }
  while (currNode) {
    prevNode = currNode;
    currNode = currNode.next;
    if (currNode.val === val) {
      prevNode.next = currNode.next;
      currNode.next = prevNode;
      return currNode;
    }
  }
};

module.exports = LinkedList;
