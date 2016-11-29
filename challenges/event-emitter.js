'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
  this.storage = {};
}

EventEmitter.prototype.on = function (event, func) {
  if (this.storage[event]) this.storage[event].push(func);
  else this.storage[event] = [func];
  return this.storage;
};

EventEmitter.prototype.trigger = function(event, ...args) {
  if (!this.storage[event]) return false;
  if (this.storage.length <= 1) return this.storage[event](args);
  this.storage[event].forEach(f => f(...args));
};

// var instance = new EventEmitter();
// var counter = 0;
// instance.on('increment', function() {
//   counter++;
//   console.log(counter);
// }); // counter should be 0
// instance.trigger('increment'); // counter should be 1
// instance.trigger('increment'); // counter should be 2

module.exports = EventEmitter;
