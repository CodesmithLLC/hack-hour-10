/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.counter = 0;
  this.max = undefined;

  // Seems like we may need to keep a cache of our values and its counter
  // so we can get max value at O(1) time
  this.values = {};
}

Stack.prototype.push = function (item) {
  // Update our values in cache
  if (!this.values[item]) this.values[item] = 0;
  this.values[item]++;

  // Update the max value currently in the stack
  if (this.max === undefined) this.max = item;
  else if (this.max < item) this.max = item;

  this.storage[this.counter++] = item;
  return this.counter;
}

Stack.prototype.pop = function () {
  // Need to account if user runs pop on empty storage
  if (this.counter < 1) return;

  // The element of the removed item
  const removedItem = this.storage[--this.counter];

  // Remove the item from our storage
  delete this.storage[this.counter];

  // Update the max value
  // We cannot assume that our storage contains only unique values
  // so we need to see if there are any double occurences of the value
  // that we are removing just in case the item we are removing is the
  // max value

  // We need to update our values cache
  this.values[removedItem]--;

  // Check if we removed the max value
  // If so, we need to get the new max
  if (removedItem === this.max && this.values[removedItem] < 1) {
    this.max = this.storage[0];
    for (let key in this.storage) {
      if (key === 0) continue;
      if (this.max < this.storage[key]) this.max = this.storage[key];
    }
  }

  return removedItem;
}

Stack.prototype.getMax = function () {
  return this.max;
}

module.exports = Stack;