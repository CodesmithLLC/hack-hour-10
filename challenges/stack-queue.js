/**
 * Create a stack.Then create a queue using two stacks.
 */


/* Stack is Last in, Last out

 */

function Stack(value) {
	this.storage = [];

	this.push = function(value){
		this.storage.push(value);

	}
	this.pop = function(value){
    if (this.storage.length === 0) return undefined;
		let savedValue = this.storage.pop();
		return savedValue;
	}
}


/**
* Queue Class
* STACK array === [3,2,5]
*/
//[]
function Queue(value) {
	this.storage = []; //

	this.enqueue = function(value){
		let newStack1 = new Stack();
		this.storage.unshift(value); // adds items to the front of the array
	};

	this.dequeue = function(){
		let secondStack = new Stack();
		let poppedValue = secondStack.pop();
		let returnedValue = this.storage.shift();
        if(this.storage.length === 0) return [];
		return returnedValue;
	}
}

module.exports = {Stack: Stack, Queue: Queue};


/*
Queue = first in, first out

 */