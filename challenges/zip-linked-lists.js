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
  if (!l1) return l2;
  if (!l2) return l1;

  let head = l1;
  let temp = l1;
  l1 = l1.next;

  while (l2 && l1) {
    temp.next = l2;
    l2 = l2.next;
    temp = temp.next;

    temp.next = l1;
    l1 = l1.next;
    temp = temp.next;
  }

  //  return the rest of the tail if necessary
  temp.next = l2 ? l2 : l1;

  return head;
}

//  Ex. LINKED LIST1
var bird = { value: 'DoDo' };
var cat = { value: 'felix' };
var dog = { value: 'Scooby Doo' };
var duck = { value: 'Howard' };
bird.next = cat;
cat.next = dog;
dog.next = duck;

//  Ex. LINKED LIST2
var red = { value: 'angry' };
var blue = { value: 'sad' };
var green = { value: 'relaxed' };
var white = { value: 'refreshed' };
red.next = blue;
blue.next = green;
green.next = white;

// TEST
console.log(zip(bird, red));

module.exports = { Node: Node, zip: zip };
