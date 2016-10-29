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
    return value;
  }
}

/**
* Queue Class
*/

function Queue() {
  this.iniStorage = new Stack();
  this.finStorage = new Stack();
  this.push = (item) => this.iniStorage.push(item);

  this.shift = () => {
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



module.exports = {Stack: Stack, Queue: Queue};
