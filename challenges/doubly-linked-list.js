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
  if (this.tail) {
    this.tail.next = new Node(val);
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;
  } else this.head = this.tail = new Node(val);
  return true;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let currNode = this.head;
  while (currNode) {
    console.log(currNode.val);
    if (currNode.val === val) {
      // first, handle special cases where we want to remove the head or tail
      if (currNode === this.head) {
        currNode.next.prev = null;
        this.head = currNode.next;
      } else if (currNode === this.tail) {
        currNode.prev.next = null;
        this.tail = currNode.prev;
      // else case represents a node somewhere in the middle of the list
      } else {
        currNode.prev.next = currNode.next;
        currNode.next.prev = currNode.prev;
      }
      return currNode;
    }
    currNode = currNode.next;
  }
  return false;
};

module.exports = LinkedList;

// testing
// let ourList = new LinkedList();
// ourList.add(1);
// ourList.add(2);
// ourList.add(3);
// ourList.add(4);
// console.log(ourList);
// console.log('removed: ', ourList.remove(4));
// console.log(ourList);
