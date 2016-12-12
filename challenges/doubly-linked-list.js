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
    current = this.head,
    remove;

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
LinkedList.prototype.remove = function (val) {
  let current = this.head;
  let new_next;

  // if the first node is the target;
  if (this.head.val === val) {
    this.head = new_next = current.next;
    new_next.prev = current.next = null;
    return current;
  }

  while (current.next && current.next.val !== val) {
    current = current.next;
  } // traverse; arrive at one node prior to the target

  if (!current.next) return false; // if current.next is null, you've reached the end w/o encountering the target;

  remove = current.next;
  new_next = current.next.next;
  current.next = new_next;
  if (!new_next) { this.tail = current; }
  else { new_next.prev = current; }

  return remove;
};





module.exports = LinkedList;
