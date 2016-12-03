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
  let new_node = new Node(val),
    current = this.head;
  
  // if you're adding the very first node:
  if (!this.head && !this.tail) {
    this.tail = this.head = new_node;
  } else {

    // else, traverse
    while (current.next) {
      current = current.next;
    } // current is now the last node in the LL
    
    // set references
    this.tail = current.next = new_node;
    new_node.prev = current;
  }

  // best practice to return 'true' on LL add methods 
  return true;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let current = this.head,
    next,
    remove;

  // if the target happens to be on the first (head) node: 
  if (this.head.val === val) {
    next = current.next;
    if (next) next.prev = null;
    current.next = null;

    return current;
  }

  // else, traverse and stop at the node BEFORE the target node 
  while (current.next && current.next.val !== val) {
    current = current.next;
  } // current is now the node BEFORE the target node

  if (!current.next) return false; // if you're on the tail, you didn't encounter the target

  remove = current.next; // removed node to return  
  next = current.next.next; // reference to the new next
  current.next = next;
  if (next) next.prev = current;
  
  return remove;
};


module.exports = LinkedList;
