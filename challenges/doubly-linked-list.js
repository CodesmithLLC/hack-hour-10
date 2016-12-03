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
  if (this.head) {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
  else {
    this.head = this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  let current = this.head;
  while (current.next && current.value !== val) {
    current = current.next;
  }
  if (current.value === val) {
    current.next = current.next.next;
  }
};

let ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
console.log(ll);
ll.remove(1);
console.log(ll);
module.exports = LinkedList;
