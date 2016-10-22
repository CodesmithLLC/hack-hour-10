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
  this.max = undefined;
}

Stack.prototype.push = function(val) {
	if (val > this.max || !this.max) this.max = val;
	this.storage[this.length] = val;
	return ++this.length;
};

Stack.prototype.pop = function() {
	let result = this.storage.splice(this.length - 1, 1);
	if (this.max === result[0] && this.length > 1) {
		this.max = this.storage.reduce((a, b) => {
			if (b > a) a = b;
			return a;
		});
	} else if (this.length === 1) this.max = undefined;
	if (this.length > 0) this.length--;
	return result[0];
};

Stack.prototype.getMax = function() {
	return this.max;
};

module.exports = Stack;