/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  l1Array = [];
  l2Array = [];
  l3Array = [];
  l1Current = l1;
  l2Current = l2;
  
  while (l1Current) {
    l1Array.push(l1Current.value);
    l1Current = l1Current.next;
  }
  
  while (l2Current) {
    l2Array.push(l2Current.value);
    l2Current = l2Current.next;
  }
  
  let length = l1Array.length > l2Array.length ? l1Array.length : l2Array.length;

  for(let i = 0; i < length; i++) {
    if(l1Array[i]) { l3Array.push(l1Array[i]); }
    
    if(l2Array[i]) { l3Array.push(l2Array[i]); }
  }
  
  if(!l1Array.length) {return l2; }
  
  l3 = new Node(l3Array.shift());
  l3Current = l3;
  
  for(let i = 0; i < l3Array.length; i++) {
    l3Current.next = new Node(l3Array[i]);
    l3Current = l3Current.next;
  }
  
  return l3;
}

module.exports = {Node: Node, zip: zip};
