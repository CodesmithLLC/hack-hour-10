/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.arrayLikeObj = {};
  this.max = undefined;
  this.push = (thingToPush) => {
    for (var u = 0; this.arrayLikeObj[u] !== undefined; u++);
    this.arrayLikeObj[u] = thingToPush;
    this.max = this.max === undefined || thingToPush > this.max ? thingToPush : this.max;
    return u + 1;
  }
  this.pop = () => {
    for (var o = 0; this.arrayLikeObj[o] !== undefined; o++);
    if (o && this.max === this.arrayLikeObj[o - 1]) {
      this.max = undefined;
      for (let m = 0; m < o - 1; this.max = this.max === undefined || this.arrayLikeObj[m] > this.max ? this.arrayLikeObj[m] : this.max, m++);
    }
    if (o) {
      let toReturn = this.arrayLikeObj[o - 1];
      delete this.arrayLikeObj[o - 1];
      return toReturn;
    }
  }
  this.getMax = () => { return this.max }
}

module.exports = Stack;