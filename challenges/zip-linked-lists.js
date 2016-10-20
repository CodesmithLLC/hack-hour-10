/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */
"use strict";
function Node(val) {
  this.value = val;
  this.next = null;
}

function printList(head){
  let itr = head;
  let list = "";
  while(itr !== null){
   list += itr.value + " -> ";
   itr = itr.next;
  }
  console.log(list);
}

function zip(l1, l2) {
  if(!l1 && !l2){
    return;
  }else if(!l1){
    l1 = l2;
    return l1;
  }else if(!l2){
    return l1;
  }
/*  console.log('zip');
  printList(l1);
  printList(l2);
  console.log('=======');*/

  let itr1 = l1;
  let itr2 = l2;
  let tmp1 = itr1.next;
  let tmp2 = itr2.next;
  while( tmp1 !== null && tmp2 !== null ){
    console.log(`setting l1 ${itr1.value} next to ${itr2.value}`);
    console.log(`setting l2 ${itr2.value} next to ${tmp1.value}`);
    console.log(`...........`);
    itr1.next = itr2;
    itr2.next = tmp1;

    itr2 = tmp2;
    itr1 = tmp1;
    tmp1 = tmp1.next;
    tmp2 = tmp2.next;
  }
  if(tmp1 === null && tmp2 === null){
    itr1.next = itr2;
  } else if(tmp1 === null){
    itr1.next = itr2;
  }else if(tmp2 === null){
    let tmpitr1next = itr1.next;
    itr1.next = itr2;
    itr2.next = tmpitr1next;
  }
  //printList(l1);
  return l1;
};

/*
let a = new Node(1); 
let b = new Node(2); 
a.next = b;
let c = new Node(3); 
b.next = c;
let d = new Node(4); 
c.next = d;
let e = new Node(5); 
d.next = e;
let f = new Node(6);

let a1 = new Node(10);
let b1 = new Node(11); 
a1.next = b1;
let c1 = new Node(12); 
b1.next = c1;
let d1 = new Node(13);
c1.next = d1;
let e1 = new Node(14);
d1.next = e1;
let f1 = new Node(15);
e1.next = f1;

let a2 = new Node(20);
let b2 = new Node(21);
a2.next = b2;
let c2 = new Node(22);
b2.next = c2;
let d2 = new Node(23);
c2.next = d2;
let e2 = new Node(24);
d2.next = e2;
let f2 = new Node(25);
e2.next = f2;

zip(a1, a2);

let zz = new Node(1);
let gg = new Node(2);
zip(zz,null);

zip(a,a1);*/

module.exports = {Node: Node, zip: zip};
