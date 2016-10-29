/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function (element) {
  this.storage[this.length++] = element;
};

Stack.prototype.pop = function (element) {
  const elementToPop = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length -= 1;
  return elementToPop;
};

/**
* Queue Class
*/
function Queue() {
  this.entryStack = new Stack();
  this.exitStack = new Stack();
}

Queue.prototype.enqueue = function (element) {
  this.entryStack.push(element);
};

Queue.prototype.dequeue = function () {
  if (this.entryStack.length === 0) return undefined;

  // pop everything from entry stack onto exit stack
  while (this.entryStack.length > 0) {
    this.exitStack.push(this.entryStack.pop());
  }

  // pop one element off of exit stack (this will be the first element we queued)
  const elementToReturn = this.exitStack.pop();

  // pop everything from exit stack back onto entry stack to maintain original order
  while (this.exitStack.length > 0) {
    this.entryStack.push(this.exitStack.pop());
  }
  return elementToReturn;
};

module.exports = { Stack: Stack, Queue: Queue };
