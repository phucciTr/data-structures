// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
class Stack {

  constructor() {
    this.length = 0;
  }

  push(value) {
    let currentIndex = this.length;
    this[currentIndex] = value;
    this.length++;
  }

  pop() {
    if (this.size() > 0) { this.length--; }
    let currentIndex = this.length;
    let poppedVal = this[currentIndex];
    delete this[currentIndex];
    return poppedVal;
  }

  size() {
    return this.length;
  }

}