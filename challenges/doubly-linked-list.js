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
  if(!this.head) {
    this.head = node;
    return;
  }
  let cur = this.head;
  while(cur.next){
    cur = cur.next;
  }
  node.prev = cur;
  cur.next = node;
  this.tail = node;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let cur = this.head;
  let prev = null;
  if(cur.val === val) {
    this.head = cur.next;
    cur.next ? cur.next.prev = null : this.tail = null;
  }
  while(cur) {
    if(cur.val === val) {
      if(cur.next) {
        cur.next.prev = prev;
        prev.next = cur.next;
      }
      else {
        prev.next = null;
        this.tail = prev;
      }
    }
    prev = cur;
    cur = cur.next;
  }
};

module.exports = LinkedList;
