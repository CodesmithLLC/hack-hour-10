/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = [];
}

Stack.prototype.pop = function () {
  return this.stack.pop();
};

Stack.prototype.push = function (item) {
  return this.stack.push(item);
};

Stack.prototype.isEmpty = function () {
  return this.stack.length < 1;
};
/**
 * Queue Class
 * 
 * This special queue uses two stacks to perform enqueue and
 * dequeue operations. To do this, before each operation is
 * performed, we basically flip the stack. I'm skeptical about
 * performance gains because one can simply use unshift, which
 * itself is O(n) in time complexity. Not too sure of its space
 * complexity, but who knows, it could be implementing something
 * similar, where it is keep storage of the flip.
 * 
 * What we're doing is also O(n) in time complexity and O(n)
 * in space complexity. 
 * 
 * So using unshift, a built-in method, is more readable and less verbose,
 * and already optimized for the V8 engine.
 */


function Queue() {
  this.s1 = new Stack();
  this.s2 = new Stack();
}

// When item is entering the queue, then we take what is in the reversed
// and push it into s1 starting from its ends
Queue.prototype.enqueue = function (item) {
  while (!this.s2.isEmpty()) this.s1.push(this.s2.pop());
  this.s1.push(item);
};

// When item is leaving the queue, we need to take what is in 
// s1 and flip it into s2 and pop the result from s2
Queue.prototype.dequeue = function () {
  while (!this.s1.isEmpty()) this.s2.push(this.s1.pop());
  return this.s2.pop();
};

module.exports = { Stack: Stack, Queue: Queue };
