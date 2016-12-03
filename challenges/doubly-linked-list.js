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
  console.log(this.head.val,'this should be the head', val);
  while (current.next && current.val !== val) {
    console.log(current,'current');
    current = current.next;
  }
  console.log(current.val, 'this is the value to remove')
  if (current.val === val) {
    console.log('here man', current.val, val);
    (!current.prev) ? this.head = current.next : current = current.prev;
    (!current.next) ? this.tail = current.prev : current.next = current.next.next;

  }
  console.log(current);
};

let ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
console.log(ll);
ll.remove(3);
console.log(ll);
module.exports = LinkedList;
