/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
	this.storage = [];
	this.length = 0;
}

Stack.prototype.push = function(val){
	this.storage.push(val);
  this.length++;
	return this.length;
}

Stack.prototype.pop = function(){
	let valuePopped = this.storage.pop();
    this.length--;
	return valuePopped;
}

Stack.prototype.getMax = function(){
	return Math.max(...this.storage);
}





module.exports = Stack;