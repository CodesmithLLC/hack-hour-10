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
LinkedList.prototype.add = function (val) {
  const newNode = new Node(val);
  if (!this.head) this.head = this.tail = newNode;
  else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  const removeNode = this.locate(val);
  if (!removeNode) return null;
  
};

LinkedList.prototype.find = function(val) {
  let curr = this.head;
  while (curr) {
    if (curr.val === val) return curr;
    curr = curr.next;
  }
  return null;
}

module.exports = LinkedList;
