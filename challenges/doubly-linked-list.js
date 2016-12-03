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
  this.tail.next = new Node(val);
  this.tail.next.prev = this.tail;
  this.tail = this.tail.next;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  let current = this.head;
  while (current) {
    if (current.value === val) {
      let prevTemp = current.prev;
      let nextTemp = current.next;
      if (nextTemp) nextTemp.prev = prevTemp;
      if (prevTemp) prevTemp.next = nextTemp;
      if (current === this.head && nextTemp) this.Head = nextTemp;
      if (current === this.tail && prevTemp) this.Tail = prevTemp;
      return current;
    }
    current = current.next;
  }
};

module.exports = LinkedList;
