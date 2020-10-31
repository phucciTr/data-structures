// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
var Queue = function() {
  var queueInstance = Object.create(queueMethods);
  queueInstance.currentSize = 0;
  queueInstance.frontIndex = 0;
  queueInstance.rearIndex = 0;
  return queueInstance;
};

var queueMethods = {
  enqueue: function(value) {
    let enqueueIndex = this.rearIndex;
    this[enqueueIndex] = value;
    this.currentSize++;
    this.rearIndex++;
  },

  dequeue: function() {
    if (this.size() > 0) {
      let dequeueIndex = this.frontIndex;
      this.currentSize--;
      this.frontIndex++;
      let dequeueValue = this[dequeueIndex];
      delete this[dequeueIndex];
      return dequeueValue;
    }
  },

  size: function() {
    return this.currentSize;
  }
};


