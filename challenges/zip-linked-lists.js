"use strict"
function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let head = l1;
  let temp1;
  let temp2;
  while (!l1.next || l2.next){
    temp1 = l1.next;
    l1.next = l2;
    temp2 = l2.next;
    l2.next = temp1;
    l1 = temp1;
    l2 = temp2;
  }
  if (!l1.next && !l2.next){
  	l1.next = l2;
  }
  else if (!l1.next){
    temp2 = l2.next;
    l2.next = l1;
    l1.next = temp2;
  }
  else if (!l2.next){
    temp1 = l1.next;
    l1.next = l2;
    l2.next = temp1;
  }
  print(head);
  return head;
}
function print (l1) {
  let temp = l1;
  while (temp){
    temp = temp.next
  }
}
let newNode1 = new Node('a');
 newNode1.next = new Node('b');
 newNode1.next.next = new Node('c');
 newNode1.next.next.next = new Node('d');
let newNode2 = new Node('1');
 newNode2.next = new Node('2');
 newNode2.next.next = new Node('3');


 zip(newNode1,newNode2);
 module.exports = {Node: Node, zip: zip};
