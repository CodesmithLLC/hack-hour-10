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
  if(!this.head) {
    this.head = this.tail = new Node(val);
  } else {
    this.tail.next = new Node(val);
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;
  }
  return this;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if(this.head.val === val) {
    this.head = this.head.next;
    this.head.prev = null;
  } else {
    cur = this.head;
    while(cur) {
      if(cur === this.tail && cur.val === val) {
        cur.prev.next = cur.next;
        this.tail = cur.prev;
        return;
      } else if(cur.val === val) {
        cur.next.prev = cur.prev;
        cur.prev.next = cur.next;
        return;
      }
      cur = cur.next;
    }
    return;
  }
};

// var myList = new LinkedList();
// console.log(myList);
// myList.add(1).add(1).add(3).add(4);
// myList.remove(4);

// console.log(myList);

module.exports = LinkedList;
