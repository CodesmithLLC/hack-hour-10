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
  if (this.head === null) {
    this.head = newNode;
    this.tail = this.head;
  } else { 
    this.tail.next = newNode;
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let current = this.head;
  while (this.head !== null) { 
    if (current.val === val) {
      current.next.prev = current.prev;
      current.prev.next = current.next;
      return current;
    }
    current = current.next;
  }
};

// let LL = new LinkedList();
// LL.add(1)
// LL.add(2)
// LL.add(3)
// LL.add(4)
// LL.remove(3)
// console.log(LL);

module.exports = LinkedList;