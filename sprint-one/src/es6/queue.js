class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.CurrentSize = 0;
    this.CurrentIndex = 0;
    this.key = '';
    this.TempValue = '';
    this.storage = {};
  }
  enqueue(value) {
    this.CurrentIndex = 0;
    for (this.key in this.storage) {
      if (this.CurrentIndex < this.key) {
        this.CurrentIndex = this.key;
      }
    }
    this.CurrentIndex += 1;
    this.storage[this.CurrentIndex] = value;
  }
  dequeue() {
    this.CurrentIndex = -1;
    for (this.key in this.storage) {
      if (this.CurrentIndex === -1 || this.CurrentIndex > this.key) {
        this.CurrentIndex = this.key;
      }
    }
    this.TempValue = this.storage[this.CurrentIndex];
    delete this.storage[this.CurrentIndex];
    return this.TempValue;
  }
  size() {
    this.CurrentSize = 0;
    for (this.key in this.storage) {
      this.CurrentSize += 1;
    }
    return this.CurrentSize;
  }
}

var Instance = new Queue();