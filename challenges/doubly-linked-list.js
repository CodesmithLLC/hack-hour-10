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
  while (current.next && current.val !== val) {
    current = current.next;
  }
  if (current.val === val) {
    (!current.prev) ? this.head = current.next : current = current.prev;
    if (!current.next){
       this.tail = current.prev
       this.tail.next = null;
     }else {
       if (current.next.next) {
         current.next = current.next.next;
       }else {
         current.next = null;
       }
     }

  }
  console.log(current);
};

let ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
console.log(ll);
ll.remove(3);
console.log(ll);
module.exports = LinkedList;
