// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
var Queue = function() {
  this.currentSize = 0;
  this.frontIndex = 0;
  this.rearIndex = 0;
};


Queue.prototype.enqueue = function(value) {
  let enqueueIndex = this.rearIndex;
  this[enqueueIndex] = value;
  this.currentSize++;
  this.rearIndex++;
};

Queue.prototype.dequeue = function() {
  if (this.size() > 0) {
    let dequeueIndex = this.frontIndex;
    let dequeuedValue = this[dequeueIndex];
    delete this[dequeueIndex];
    this.currentSize--;
    this.frontIndex++;
    return dequeuedValue;
  }
};

Queue.prototype.size = function() {
  return this.currentSize;
};