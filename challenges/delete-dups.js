/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */


function Node(val){
  this.value = val;
  this.next = null;
}

function deleteDups(head){
  let prevv = null;
  let curr = head;
  console.log('before');
  printList(head);
  while(curr !== null){
    let prev = prevv;
    let itr = curr.next;
    console.log(`curr ${curr.value} =============================================`);
    while(itr !== null){
      if(curr.value === itr.value){
        console.log('found dup ' + itr.value);
        prev.next = itr.next;
        itr = itr.next;
      }else{
        prev = itr;
        itr = itr.next;
      }
    }
    prevv = curr;
    curr = curr.next;
  }
  console.log('after');
  printList(head);
  return head;
}






function xdeleteDups(head) {
  let memo = [];
  let duplicates = [];
  let itr = head;
  while(itr !== null){
    // console.log(`checking dup: ${itr.value}`);
    if(memo.indexOf(itr.value) >= 0){
      // console.log(`dup found: ${itr.value}`);
      duplicates.push(itr.value);
    }
    memo.push(itr.value);
    itr = itr.next;
  }
  console.log(`memo ${memo}`);
  console.log(`dupes ${duplicates}`);
  let prev = head;
  let curr = head;
  let dupitr = 0;
  printList(head);
  while(curr !== null){
    console.log(`${curr.value} = current dup: ${duplicates[dupitr]}  ===============`)
    console.log(`prev ${prev.value}     curr ${curr.value}`);
    printList(curr);
    if(curr.value == duplicates[dupitr]){
      console.log(`found dup removing ${duplicates[dupitr]}`);
      prev.next = curr.next;
      dupitr += 1;
      curr = curr.next;
    }else{
      prev = curr;
      curr =  curr.next;
    }
  }
  console.log('=====');
  console.log(head.value);
  printList(head);
  return head;
}

let a = new Node('a');
let b = new Node('a');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let b2 = new Node('b');
let b3 = new Node('b');
let c2 = new Node('c');

a.next = b;
b.next = c;
c.next = b2;
b2.next = c2;
c2.next = d;
d.next = b3;
b3.next = e;

function printList(head){
  let itr = head;
  let str = "";
  while(itr !== null){
    str += itr.value + ' -> '
    itr = itr.next;
  }
  console.log(str);
}
printList(a);
deleteDups(a);


module.exports = deleteDups;
