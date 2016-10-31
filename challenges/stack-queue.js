/**
 * Create a stack.Then create a queue using two stacks.
 */
//
function Stack() {
  this.storage = {};
  this.index = 0;
}
Stack.prototype.push = function (value) {
  this.storage[this.index] = value;
  this.index++;
}
Stack.prototype.pop = function () {
  let value = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index--;
  return value;
};
//pop and unshift or shift and push 
function Queue() {
  this.in = new Stack();
  this.out = new Stack();
}

Queue.prototype.enqueue = function (value) {
  this.in.push(value);
}

Queue.prototype.dequeue = function () {
  if (!this.out.storage.length) {
    if (!this.in.storage.length) return undefined;
    while (this.in.storage.length) {
      this.out.push(this.in.pop());
    }
  }
  return this.out.pop();
}

module.exports = { Stack: Stack, Queue: Queue };
