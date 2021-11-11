var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var Instance = Object.create(queueMethods);
  Instance.storage = {};
  return Instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  let HighKey = 0;
  for (var key in this.storage) {
    if (HighKey < key) {
      HighKey = key;
    }
  }
  HighKey += 1;
  this.storage[HighKey] = value;
};

queueMethods.dequeue = function() {
  let LowKey = -1;
  for (var key in this.storage) {
    if (LowKey === -1 || LowKey > key) {
      LowKey = key;
    }
  }
  let TempValue = this.storage[LowKey];
  delete this.storage[LowKey];
  return TempValue;
};

queueMethods.size = function() {
  var size = 0;
  for (var key in this.storage) {
    size++;
  }
  return size;
};