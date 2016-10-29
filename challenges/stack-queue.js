/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	this.storage = [];
}

Stack.prototype.push = function(value) {
	this.storage.push(value);
};

Stack.prototype.pop = function() {
	this.storage.pop();
};


/**
* Queue Class
*/


function Queue() {
	this.storage = [new Stack(), new Stack()];
}

Queue.prototype.enqueue = function(value) {
	this.storage[0].storage.push(value);
};

Queue.prototype.dequeue = function() {
	if (this.storage[1].storage.length > 0) {
		this.storage[1].storage.pop();
	} else {
		for (let i = 0; i < this.storage[0].storage.length; i++) {
			this.storage[1].storage.push(this.storage[0].storage.pop());
		}
		this.storage[0].storage.pop();
	}
};

module.exports = {Stack: Stack, Queue: Queue};
