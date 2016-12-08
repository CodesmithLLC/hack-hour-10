/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	this.length = 0;
	this.body = [];
	this.pushh = (val) => {
		this.body[this.body.length] = val;
		this.length++;
	};
	this.popp = () => {
		const popped = this.body[this.length - 1];
		this.body.length--;
		this.length--;
		return popped;
	}
}


/**
* Queue Class
*/


function Queue() {
// 	let stack1 = new Stack();
// 	let stack2 = new Stack();
//
// 	this.enque = (val) => {
// 		stack1.push()
// 	}
//
}

module.exports = {Stack: Stack, Queue: Queue};

const stack = new Stack;
console.log(stack);
stack.pushh(1);
console.log(stack);
stack.pushh(2);
console.log(stack);
var po = stack.popp();
console.log(po, stack);
