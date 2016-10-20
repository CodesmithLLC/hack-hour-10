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
  let zipList = {};
  zipList.length = 0;
  // let currentl1 = l1.head;
  // let currentl2 = l2.head;
  // console.log(l1);
  // console.log(l1.head);
  // console.log(l1.head.next);


  let current = l1.head;
  if (l1.head === null) {
    zipList.head = new Node(current);
  } else {
    while (current.next) {
      zipList.next = current.next;
      current.next = new Node(current.next.next);
      zipList.length++;
    }
  }

  return zipList;

}


var bird = { name: 'DoDo' };
var cat = { name: 'felix' };
var dog = { name: 'Scooby Doo' };
var duck = { name: 'Howard' };
var animals = {
  head: bird,
  length: 4
};
bird.next = cat;
cat.next = dog;
dog.next = duck;


var red = { name: 'angry' };
var blue = { name: 'sad' };
var black = { name: 'negative' };
var white = { name: 'blank' };
var colors = {
  head: red,
  length: 4
};
red.next = blue;
blue.next = black;
black.next = white;

console.log(zip(animals, colors));

module.exports = { Node: Node, zip: zip };
