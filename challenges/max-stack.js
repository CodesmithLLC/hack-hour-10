/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.index = 0;
  this.storage = {};
}

Stack.prototype.push = function (value) {
  this.storage[this.index] = value;
  this.index++;
}

Stack.prototype.pop = function() {
  let value = this.storage[this.index- 1]; 
  delete this.storage[this.index - 1];
  this.index--;
  return value;
}

Stack.prototype.getMax = function () {
  let max = -Infinity;
  for (let key in this.storage) {
    if (this.storage[key] >= max) {
      max = this.storage[key];
    }
  }
  return max;
}

// let test = new Stack();
// test.push(1);
// test.push(2);
// test.push(3);
// test.push(4);
// test.pop(4);
// let max = test.getMax();
// console.log(test, max);


module.exports = Stack;
















function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function() {
    let value = this.storage[this.index - 1]; 
    delete this.storage[this.index - 1];
    this.index--;
    return value;
};
