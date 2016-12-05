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
  let newNode = Node(val);
  if(this.tail === null) {
    this.tail = newNode;
    return this;
  }
  // else {
  //   let curr = this.head;
  //   let this.head = curr;
  //   while(curr){
  //     if(curr.next === null)
  //   }
  // }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {

};

module.exports = LinkedList;
