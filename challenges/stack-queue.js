/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.index = 0;
    this.pop = function() {
      return (this.index > 0) ? this.storage[--this.index] : undefined;
    }
    this.push = function(val) {
      this.storage[this.index++] = val;
    }
}


/**
* Queue Class
*/


function Queue() {
  this.storageOne = new Stack();
  this.storageTwo = new Stack();
  this.enqueue = function(val) {
      this.storageOne.push(val);
  }
  this.dequeue = function() {
    const temp = this.storageOne.pop();
    if (this.storageTwo.index === 0) {
      this.storageTwo.push(temp);
      while (this.storageOne.index !== 0) {
        this.storageTwo.push(this.storageOne.pop());
      }
    }
    return this.storageTwo.pop();
  }
}

module.exports = {Stack: Stack, Queue: Queue};
