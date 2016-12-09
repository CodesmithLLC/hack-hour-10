/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2){
  if(l1 === null && l2 === null){
    return null;
  }
  // console.log(`${l1 !== null ? l1.value : 'null'} and ${l2 !== null ? l2.value : 'null'}   results   ${l1 !== null & l2 !== null ? l1.value + l2.value : (l1 !== null ? l1.value : l2.value)}`);
  let n = new Node(l1 !== null & l2 !== null ? l1.value + l2.value : (l1 !== null ? l1.value : l2.value));
  if(l1 !== null) l1 = l1.next;
  if(l2 !== null) l2 = l2.next;
  n.next = addLinkedList(l1, l2);
  return n;
}

function xaddLinkedList(l1, l2) {
  let head;
  let ll = null;
  let h1 = l1; 
  let h2 = l2;
  while(h1 || h2){
    if(h1 !== null && h2 !== null){
      if(ll === null){
        ll = new Node(h1.value + h2.value);
        head = ll;
      }else{
        ll.next = new Node(h1.value + h2.value);
        ll = ll.next;
      }
      h1 = h1.next;
      h2 = h2.next;
    }else if(h1 === null){
      if(ll === null){
        ll = new Node(h2.value);
        head = ll;
      }else{
        ll.next = new Node(h2.value);
        ll = ll.next;
      }
      h2 = h2.next;
    }else if(h2 === null){
      if(ll === null){
        ll = new Node(h1.value);
        head = ll;
      }else{
        ll.next = new Node(h1.value);
        ll = ll.next;
      }
      h1 = h1.next;
    }
  }
  return head;
}

function print(l){
  let temp = l;
  let str = '';
  while(temp){
    str += temp.value + ' -> ';
    temp = temp.next;
  }
  console.log(str);
}
// let a = new Node(5);
// let a1 = new Node(1);
// a.next = a1;
// let a2 = new Node(2);
// a1.next = a2;

// let b = new Node(1);
// let b1 = new Node(2);
// b.next = b1;
// let b2 = new Node(3);
// b1.next = b2;
// let b3 = new Node(5);
// b2.next = b3;
// let b4 = new Node(8);
// b3.next = b4;

// let g = addLinkedList(b,a);
// print(g);

module.exports = {Node: Node, addLinkedList: addLinkedList};
