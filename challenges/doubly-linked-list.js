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
  let node = new Node(val);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let current = this.head;
  if (current.val === val) {
    current.next.prev = null;
    this.head = current.next;
    return;
  }
  let prevNode;
  while(current){
    if(current.val === val) {
      if (current.next === null) {
        prevNode.next = null;
        this.tail = prevNode;
        return;
      }
      prevNode.next = current.next;
      current.next.prev = prevNode;
    }
    prevNode = current;
    current = current.next;
  }
};

module.exports = LinkedList;

// let list = new LinkedList();
// console.log(list);
// list.add(1);
// list.add(2);
// list.add(3);
// list.remove(3);
// console.log(list);
//

//
// function stairs(n) {
//   if (n < 0) {
//     return 0;
//   } else if (n === 0) {
//     return 1;
//   } else {
//     return stairs(n - 3) + stairs(n - 2) + stairs(n - 1);
//   }
// }
//
// console.log(stairs(4));
