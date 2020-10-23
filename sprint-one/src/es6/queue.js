// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
class Queue {

  constructor() {
    this.currentSize = 0;
    this.frontIndex = 0;
    this.rearIndex = 0;
  }

  enqueue(value) {
    let enqueueIndex = this.rearIndex;
    this[enqueueIndex] = value;
    this.currentSize++;
    this.rearIndex++;
  }

  dequeue() {
    if (this.size() > 0) {
      let dequeueIndex = this.frontIndex;
      let dequeuedVal = this[dequeueIndex];
      this.currentSize--;
      this.frontIndex++;
      delete this[dequeueIndex];
      return dequeuedVal;
    }
  }

  size() {
    return this.currentSize;
  }

}
