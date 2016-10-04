/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  var kValue = 0;
  var currNode = head;
  var kthNode = head;
  var listLength = 0;
  // move currNode over k times
  // A - B - C - D - E -
  //     /\
  while(kValue < k && currNode !== null){
    listLength++;
    //console.log("k is: " + k);
    //console.log("currNode val is: " + currNode.value);
    currNode = currNode.next;
    kValue++;
  }

  //now iterate k until u is null to find kth from the end
  // A - B - C - D - E -
  //                 /\ <- k     |  last iteration before k is null
  //             /\              |
  while(currNode !== null){
    kthNode = kthNode.next;
    currNode = currNode.next;
    listLength++;
  }
  //console.log("k: " + k);
  //console.log("listlength: " + listLength);
  if(k === 0 || k > listeLength){
      return undefined;
  }

  return kthNode;
}



module.exports = {Node: Node, kthToLastNode: kthToLastNode};
