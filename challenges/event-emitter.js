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
}

EventEmitter.prototype.on = function(funcName, func) {
  if(this.events[funcName] === undefined){
    this.events[funcName] = [func];
  }else{
    this.events[funcName] = [...this.events[funcName], func];
  }
  // console.log(this.events);
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  if(this.events[funcName] === undefined) return;
  this.events[funcName].forEach( (fn) => {
    // console.log(args);s
    fn(...args);
  });
};

// let emitter = new EventEmitter();
// emitter.trigger('something');
// emitter.on('dean', () => {console.log('dean code!')});
// emitter.on('dean', () => {console.log('dean code code code code')});
// emitter.on('dean', () => {console.log('THIS IS DEANCODE')});
// emitter.trigger('dean');

// emitter.on('action', (item) => {console.log(item)});
// emitter.on('action', (item) => {console.log('this really works, for real ', item)});
// emitter.trigger('action', 'this is an item');

module.exports = EventEmitter;
