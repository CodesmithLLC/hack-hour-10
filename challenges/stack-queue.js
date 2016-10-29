/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.body = {};
  this.length = 0;
}

Stack.prototype.push = function (val) {
  this.body[this.length++] = val;
  return this.length;
}

Stack.prototype.pop = function () {
  let toPop = this.body[this.length];
  delete this.body[this.length--];
  return toPop;
}



/**
* Queue Class
*/


function Queue() {
  this.body = {};
  this.frontIndex = 0;
  this.backIndex = 0;
}

Queue.prototype.enqueue = function (val) {
  this.body[this.backIndex++] = val;
}

Queue.prototype.dequeue = function () {
  if (this.frontIndex === this.backIndex) return undefined;
  let front = this.body[this.frontIndex];
  delete this.body[this.frontIndex];
  if (this.frontIndex < this.backIndex) this.frontIndex++;
  return front;
}

module.exports = { Stack: Stack, Queue: Queue };


// let stack = new Stack();
// stack.push('a');
// stack.push('b');
// stack.push('c');
// console.log(stack.body);
// stack.pop();
// console.log(stack.body);
// stack.pop();
// console.log(stack.body);
// stack.pop();
// console.log(stack.body);
