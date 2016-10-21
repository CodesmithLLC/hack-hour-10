/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  const arrayLikeObj = {};
  this.max = undefined;
  this.push = (thingToPush) => {
    for (var i = 0; arrayLikeObj[i] !== undefined; i++);
    arrayLikeObj[i] = thingToPush;
    this.max = !this.max || thingToPush > this.max ? thingToPush : this.max;
    return i + 1;
  }
  this.pop = () => {
    for (var i = 0; arrayLikeObj[i] !== undefined; i++);
    if (i && this.max === arrayLikeObj[i - 1]) {
      this.max = undefined;
      for (var j = 0; j < i - 1; this.max = !this.max || arrayLikeObj[j] > this.max ? arrayLikeObj[j] : this.max, j++);
    }
    if (i) delete arrayLikeObj[i - 1];
  }
  this.getMax = () => {
    return this.max;
  }
}

module.exports = Stack;