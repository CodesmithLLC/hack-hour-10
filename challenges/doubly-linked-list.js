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
   if(this.head === null && this.tail === null) {
   	this.head = newNode;
     this.tail = newNode;
   }
   	else {
      let curr = this.head;
      while(curr){
       if(curr.next === null){
       	curr.next = newNode;
         curr.next.prev = curr;
         this.tail = newNode;
         return curr;
       }
      	else curr = curr.next;
      }
    }
 };

 /*
 Removes the first node with the inputted value
  */
 LinkedList.prototype.remove = function(val) {

 };
 let newList = new LinkedList();
 newList.add(1);
 newList.add(2);
 newList.add(3);
 console.log(newList);

module.exports = LinkedList;
