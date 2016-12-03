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
  var nuNode = new Node(val)
  if (!this.head && !this.tail) {
    this.head = nuNode;
    this.tail = nuNode;
    return true;
  }
  else { 
    this.tail.next = nuNode;
    nuNode.prev = this.tail;
    this.tail = nuNode;
    return true;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  var previous = this.head;
  if (previous.val === val) {
    this.head = previous.next
    this.head.prev = null;
    previous.next = null
    return previous
  }
  else { 
    for (var current = previous.next; current != null; current = current.next) { 
      if (current.val === val) { 
        if (current.next === null) {
          previous.next = null;
          current.prev = null;
          this.tail = previous
          return current
        }
        else { 
          var next = current.next;
          previous.next = next;
          next.prev = previous;
          current.next = null;
          current.prev = null;
          return current
        }
      }
      previous = current
    }
  }
};



module.exports = LinkedList;
