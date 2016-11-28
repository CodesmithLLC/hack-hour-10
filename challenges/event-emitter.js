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
   this.functions = [];
 }

 EventEmitter.prototype.on = function(funcName, func) {
   const event = {
     function: funcName,
     callback: func
   };
   this.functions.push(event);
 };

 EventEmitter.prototype.trigger = function(funcName, ...args) {
   this.functions
     .filter(e => e.function === funcName)
     .forEach(e => e.callback(...args));
 };

 // var instance = new EventEmitter();
 // var counter = 0;
 // instance.on('increment', function() {
 //   counter++;
 // }); // counter should be 0
 // instance.trigger('increment'); // counter should be 1
 // console.log(counter);
 // instance.trigger('increment'); // counter should be 2
 // console.log(counter);
 //
 // instance.on('add', (x) => {counter += x});
 // instance.trigger('add', 10);
 // console.log(counter);
 //
 // instance.on('increment', () => {counter -= 2});
 // instance.trigger('increment');
 // console.log(counter);


module.exports = EventEmitter;
