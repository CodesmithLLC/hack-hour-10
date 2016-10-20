function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let currentA = l1;
  let nextA = l1.next;
  let currentB = l2;
  let nextB = l2.next;
  while (currentB.next) {
  	currentA.next = currentB;
  	currentB.next = nextA;
  	nextA.next = nextB;
  	
  	currentA = nextA;
  	nextA = currentA.next;
  	currentB = nextB;
  	nextB = currentB.next;
  }
  return currentA;
};

module.exports = { Node: Node, zip: zip };