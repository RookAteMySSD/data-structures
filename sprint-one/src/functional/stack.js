var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    let CurrentIndex = someInstance.size();
    storage[CurrentIndex] = value;
  };

  someInstance.pop = function() {
    let CurrentIndex = someInstance.size() - 1;
    let tempValue = storage[CurrentIndex];
    delete storage[CurrentIndex];
    return tempValue;
  };

  someInstance.size = function() {
    var size = 0;
    for (var key in storage) {
      size++;
    }
    return size;
  };

  return someInstance;
};