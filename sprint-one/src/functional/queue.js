var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var HighKey = 0;
    for (var key in storage) {
      if (key > HighKey) {
        HighKey = key;
      }
    }
    HighKey += 1;
    storage[HighKey] = value;
  };

  someInstance.dequeue = function() {
    var LowKey = -1;
    for (var key in storage) {
      if (LowKey === -1 || key < LowKey) {
        LowKey = key;
      }
    }
    let tempValue = storage[LowKey];
    delete storage[LowKey];
    return tempValue;
  };

  someInstance.size = function() {
    var size = 0;
    for (var key in storage) {
      size += 1;
    }
    return size;
  };

  return someInstance;
};
