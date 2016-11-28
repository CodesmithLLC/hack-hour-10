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
  this.events = {};
  // this.on = (event, callback) => { 
  //   if (!this.events[event]) this.events[event] = [callback];
  //   else this.events[event].push(callback);
  // }
  // this.trigger = (event, ...args) => { 
  //   var callbacks = this.events[event];
  //   callbacks.forEach((fn) => {
  //     fn(...args);
  //   })
  // }

}

EventEmitter.prototype.on = function(funcName, func) {
  if (!this.events[funcName]) this.events[funcName] = [func];
  else this.events[funcName].push(func);
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
var callbacks = this.events[funcName];
callbacks.forEach((fn) => {
  fn(...args);
})
};
// var instance = new EventEmitter();
// var counter = 0;
// instance.on('increment', function() {
//    counter++;
//  }); // counter should be 0
//  instance.trigger('increment'); // counter should be 1
//  instance.trigger('increment')
//  console.log(counter)
module.exports = EventEmitter;
