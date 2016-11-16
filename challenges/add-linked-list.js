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

// function addLinkedList(l1, l2) {
//   let carryover = 0;
//   let curr1 = l1;
//   let curr2 = l2;

//   let result = new Node(curr1.value + curr2.value);
//   if (result.value > 9) carryover = result.value % 10;

//   let resCurr = result;

//   curr1 = curr1.next;
//   curr2 = curr2.next;
//   // console.log(curr1, curr2);
//   while (curr1 || curr2) {
//     let newVal;
//     if (curr1 && curr2) newVal = curr1.value + curr2.value;
//     else if (curr1 && !curr2) newVal = curr1.value;
//     else newVal = curr2.value;
    
//     resCurr.next = new Node(newVal);
//     resCurr = resCurr.next;

//     curr1 = curr1.next;
//     curr2 = curr2.next;
//     // console.log(curr1, curr2);
//   }

//   return result;
// }

function addLinkedList(l1, l2) {
  const l1Str = reverseString(linkedListToString(l1));
  const l2Str = reverseString(linkedListToString(l2));
  const result = reverseString((Number(l1Str) + Number(l2Str)).toString());
  const ll = new Node(+result[0]);
  for (let i = 1, j = ll; i < result.length; i++, j = j.next) {
    j.next = new Node(+result[i]);
  }
  return ll;
  function linkedListToString(linkedList) {
    let str = '';
    for (let i = linkedList; i; i = i.next) {
      str += i.value.toString();
    }
    return str;
  }
  function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
}

// var a = new Node(1);
// var b = new Node(2);
// var c = new Node(3);
// var d = new Node(4);
// var e = new Node(5);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// var f = new Node(1);
// var g = new Node(2);
// var h = new Node(3);
// var i = new Node(4);
// var j = new Node(5);

// f.next = g;
// g.next = h;
// h.next = i;
// i.next = j;

// console.log(addLinkedList(a, f));
module.exports = { Node: Node, addLinkedList: addLinkedList };
