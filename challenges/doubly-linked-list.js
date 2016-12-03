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
  let newNode = new Node(val);
  
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if(this.head.val === val) {
    this.head = this.head.next;
  } else {
    let current = this.head;
    let prev;
    let removed;
    while(current) {
      if(current.val === val) {
        removed = current;
        prev.next = current.next;
        current.next.prev = prev;
        return removed;
      }
      prev = current;
      current = current.next;
    }
    
    return false;
  }
  
};

module.exports = LinkedList;
