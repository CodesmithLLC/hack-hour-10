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
  if (!this.head) {
    this.head = new Node(val);
    this.tail = this.head;
  }
  else {
    this.tail.next = new Node(val);
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  let curr = this.head;
  while (curr) {
    if (curr.val === val) {
      switch (curr) {
        case this.head:
          this.head = curr.next;
          if (this.head) this.head.prev = null;
          if (curr !== this.tail) break;
        case this.tail:
          this.tail = curr.prev;
          if (this.tail) this.tail.next = null;
          break;
        default:
          curr.prev.next = curr.next;
          curr.next.prev = curr.prev;
          break;
      }
      return curr; 
    }
    curr = curr.next;
  }
};

module.exports = LinkedList;
