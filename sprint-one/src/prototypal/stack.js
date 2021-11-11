var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var Instance = Object.create(stackMethods);
  Instance.storage = {};
  return Instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  let CurrentIndex = 0;
  for (var key in this.storage) {
    if (key > CurrentIndex) {
      CurrentIndex = key;
    }
  }
  CurrentIndex += 1;
  this.storage[CurrentIndex] = value;
};

stackMethods.pop = function() {
  let CurrentIndex = -1;
  for (var key in this.storage) {
    if (key > CurrentIndex) {
      CurrentIndex = key;
    }
  }
  let TempValue = this.storage[CurrentIndex];
  delete this.storage[CurrentIndex];
  return TempValue;
};

stackMethods.size = function() {
  var size = 0;
  for (var key in this.storage) {
    size++;
  }
  return size;
};