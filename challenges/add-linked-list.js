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

function addLinkedList(l1, l2) {
  var num1 = '';
  var num2 = '';
  while(l1) {
    num1 = l1.value + num1;
    l1 = l1.next;
  }
  while(l2) {
    num2 = l2.value + num2;
    l2 = l2.next;
  }
  function push(node, val) {
    let nn = node;
    while(nn.next) {
      nn = nn.next;
    }
    nn.next = new Node(val);
    return node;
  }

  var newNum = (Number(num1) + Number(num2)).toString().split('').reverse().join('');
  if(newNum.length < 1) return;
  var newList = new Node(newNum[0]);

  for( let i = 1; i < newNum.length; i++) {
    push(newList, newNum[i]);
  }
  return newList;
}

// var list1 = new Node(2);
// var list2 = new Node(9);

// list1.next = new Node(3);
// list1.next.next = new Node(8);

// console.log(addLinkedList(list1, list2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
