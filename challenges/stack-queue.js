/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.index = 0;
  this.push = (item) => {
    this.storage[this.index++] = item;
    return this.index;
  }
  this.pop = () => {
    let value = this.storage[--this.index];
    delete this.storage[this.index];
    this.index = this.index < 0 ? 0 : this.index;
    return value;
  }
}

/**
* Queue Class
*/

function Queue() {
  this.iniStorage = new Stack();
  this.finStorage = new Stack();
  this.enqueue = (item) => this.iniStorage.push(item);

  this.dequeue = () => {
    while(this.iniStorage.index > 0) {
      this.finStorage.push(this.iniStorage.pop());
    }
    let shifted = this.finStorage.pop();
    while(this.finStorage.index > 0) {
      this.iniStorage.push(this.finStorage.pop());
    }
    return shifted;
  }
}

// var myQueue = new Queue();
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);
// myQueue.enqueue(4);

// console.log(myQueue.dequeue(), myQueue);


module.exports = {Stack: Stack, Queue: Queue};
