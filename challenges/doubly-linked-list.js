/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
  // this.length = 0;
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
  let node = new Node(val)    //  create a new Node with the input value

  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    current = this.tail;        //  set a variable for the 'old tail'
    current.next = node;        //  set the old tail's 'next' to the new value
    node.prev = current;        //  set the new tail's 'prev' to the old tail
    this.tail = node;           //  set the new tail to the new value
  }

  return true;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let current = this.head;
  let previous;

  while (current.val !== val) {
    previous = current;
    current = current.next;
  }

  previous.next = current.next;
  current.next.prev = previous;
  
  return current;
};

// // TESTS:
// let ll = new LinkedList();
// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
// let node4 = new Node(4);
// let node5 = new Node(5);
// ll.head = node1;
// ll.tail = node5;
// node1.next = node2;
// node2.prev = node1;
// node2.next = node3;
// node3.prev = node2;
// node3.next = node4;
// node4.prev = node3;
// node4.next = node5;
// node5.prev = node4;

// ll.remove(2);
// console.log(ll);

// // TESTS v2:
// let ll = new LinkedList();
// ll.add(1);
// ll.add(2);
// ll.add(3);
// ll.add(4);
// ll.add(5);
// console.log(ll);

// ll.remove(4);
// console.log(ll);

module.exports = LinkedList;
