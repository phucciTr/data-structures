var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  let frontIndex = 0;
  let rearIndex = 0;
  var storage = {};
  storage['currentSize'] = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[rearIndex] = value;
    storage.currentSize++;
    rearIndex++;
  };

  someInstance.dequeue = function() {
    if (someInstance.size() > 0) {
      let dequeuedVal = storage[frontIndex];
      delete storage[frontIndex];
      frontIndex++;
      storage.currentSize--;
      return dequeuedVal;
    }
  };

  someInstance.size = function() {
    return storage.currentSize;
  };

  return someInstance;
};


