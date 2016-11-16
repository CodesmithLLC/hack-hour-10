/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 * LINKED LIST CAN HAVE different lengths.
 *
 */
function LinkedList(){
	this.head = null;
	this.tail = null;
	this.length = 0;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

LinkedList.prototype.push = function(val){
	var newNode = new Node(val);

	if (this.head === null){
		this.head = newNode;
	} else {
		let currentnodebeinglookedat = this.head;
		while(currentnodebeinglookedat.next){
			currentnodebeinglookedat = currentnodebeinglookedat.next;
		}
		currentnodebeinglookedat.next = newNode;
		this.tail = newNode;
	}
	this.length++;
}

function addLinkedList(l1, l2) {
	var aggregateof1values = [];
	var aggregateof2values = [];

//going thru first linked list
	var currentof1 = l1.head;
	while(currentof1.next){
		aggregateof1values.push(currentof1.value);
		currentof1 = currentof1.next;
	}
	aggregateof1values.push(currentof1.value);

	// go thru 2nd linked list
	var currentof2 = l2.head;
	while(currentof2.next){
		aggregateof2values.push(currentof2.value);
		currentof2 = currentof2.next;
	}
	aggregateof2values.push(currentof2.value);

	//reverse the arrays;
	var reversed1 = aggregateof1values.reverse().join("");
	var reversed2 = aggregateof2values.reverse().join("");

	//the new number
  var newNum =  Number(reversed1) + Number(reversed2);
 //convert back to string && separate the numbers
 	var stringNum = String(newNum)
 var splitupnum = stringNum.split("");
 //go thru array, change into numbers && create new linked list based off it
 var newLinked = new LinkedList();
 for(var i = 0; i < splitupnum.length; i++){
 	newLinked.push(Number(splitupnum[i]));
 }
return newLinked;
}


// var newList = new LinkedList();
// newList.push(3);
// newList.push(1);
// newList.push(5);
// // console.log(addLinkedList(newList));



// var newList2 = new LinkedList();
// newList2.push(5);
// newList2.push(9);
// newList2.push(2);
// console.log(addLinkedList(newList, newList2));
module.exports = {Node: Node, addLinkedList: addLinkedList};


