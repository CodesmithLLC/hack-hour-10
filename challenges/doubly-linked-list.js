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

  if (this.head === null) {
    this.head = this.tail = new Node(val)
  } else {
    let temp = this.tail;
    this.tail.next = new Node(val);
    this.tail = this.tail.next;
    this.tail.prev = temp;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {

  if (this.head.val === val) {
    this.head = this.head.next;
    this.head.prev = null;
  } else {
    let temp = this.head;
    while (temp.val != val) {
      temp = temp.next;
    }
    if (temp != null) {
      let prior = temp.prev;
      let latter = temp.next;
      prior.next = latter;
      latter.prev = prior;
    }
    if (latter === null) {
      this.tail = latter;
    }
  }
};

module.exports = LinkedList;
