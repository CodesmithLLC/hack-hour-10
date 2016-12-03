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
    this.head = new Node(val);
    this.tail = this.head;
  } else {
    this.tail.next = new Node(val);
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;
  }
  return true;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  // find node to remove
  let curr = this.head;
  while (curr) {
    if (curr.val === val) break;
    curr = curr.next;
  }
  if (curr === null) return;

  if (curr === this.head) {
    this.head = this.head.next;
    // special case if list only has one node
    this.head ? this.head.prev = null : this.tail = null;
  } else if (curr === this.tail) {
    this.tail = this.tail.prev;
    this.tail.next = null;
  } else { // remove a middle node
    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;
  }
};

// const list = new LinkedList();
// list.add('a');
// list.add('b');
// list.add('c');
// list.add('d');
// console.log(list);
// list.remove('a');
// list.remove('b');
// list.remove('c');
// list.remove('d');
// console.log(list.remove('e'));

module.exports = LinkedList;
