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
  if (!this.head) {
    this.head = newNode
    this.tail = newNode
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode
  }
  return true;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  if (this.head.val === val) {
    if (this.tail === this.head) {
      this.tail = null
    }
    const nodeToReturn = this.head;
    if (this.head.next) this.head.next.prev = null;
    this.head = this.head.next;
    return nodeToReturn
  }

  if (!this.head.next) {
    return -1;
  }

  for (var node = this.head.next; node.next !== null; node = node.next) {
    if (node.val === val) {
      const nodeToReturn = node;
      node.prev.next = node.next;
      node.next.prev = node.prev;
      return nodeToReturn;
    }
  }

  if (node.val === val) {
    const nodeToReturn = node;
    node.prev.next = null;
    this.tail = node.prev;
    return nodeToReturn;
  }

  return -1;
};

module.exports = LinkedList;
