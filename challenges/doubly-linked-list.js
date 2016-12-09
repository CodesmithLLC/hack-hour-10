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
  if(this.head === null){
    this.head = this.tail = new Node(val);
    return;
  }
  let prev;
  let curr = this.head;
  while(curr){
    prev = curr;
    curr = curr.next;
  }
  prev.next = new Node(val);
  prev.next.prev = prev;
  this.tail = prev;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if(this.head.next === null){
    this.head = this.tail = null;
    return;
  }
  let prev;
  let curr = this.head;
  while(curr){
    if(curr.val === val){
      if(curr === this.head){
        this.head = curr.next;
        if(curr.next){
          curr.next.prev = null;
        }
        break;
      }
      prev.next = curr.next;
      if(curr.next){
        curr.next.prev = prev;
      }else{// tail
        this.tail = prev;
        prev.next = null;
      }
      break;
    }
    prev = curr;
    curr = curr.next;
  }

};

LinkedList.prototype.print = function(){
  let curr = this.head;
  let printStr = "";
  while(curr){
    printStr += curr.val + (curr.next === null ? "" : " <-> ");
    curr = curr.next;
  }
  console.log(printStr);
  console.log('------------');
}


// let ll = new LinkedList();
// ll.add(1);
// console.log('add just 1');
// ll.print();
// ll.remove(1);
// console.log('remove  1');
// ll.print();
// ll.add(1);
// ll.add(2);
// ll.add(3);
// ll.add(4);
// ll.add(5);
// ll.add(6);
// console.log('list 1 -> 6');
// ll.print();
// ll.remove(6);
// console.log('remove 6');
// ll.print();
// ll.remove(1);
// console.log('remove 1');
// ll.print();
// ll.remove(4);
// console.log('remove 4');
// ll.print();



module.exports = LinkedList;
