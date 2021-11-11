var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var Instance = {};

  Instance.storage = {};

  _.extend(Instance, queueMethods);

  return Instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var HighKey = 0;
  for (var key in this.storage) {
    if (key > HighKey) {
      HighKey = key;
    }
  }
  HighKey += 1;
  this.storage[HighKey] = value;
};

queueMethods.dequeue = function() {
  var LowKey = -1;
  for (var key in this.storage) {
    if (LowKey === -1 || key < LowKey) {
      LowKey = key;
    }
  }
  let tempValue = this.storage[LowKey];
  delete this.storage[LowKey];
  return tempValue;
};

queueMethods.size = function() {
  var size = 0;
  for (var key in this.storage) {
    size += 1;
  }
  return size;
};


