var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value) {
  // create new node by invoking Tree constructor
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  // if (this.value === target) {
  //   return true;
  // }
  // while (this.children.length > 0) {
  //   if (this.value === target) {
  //     return true;
  //   }
  //   return false;
  // }

  // check root node value is target
  if (this.value === target) {
    // return true
    return true;
  }

  // check if children is not empty
  // iterate over children array
  for (let x = 0; x < this.children.length; x++) {
    // if children value contains target
    var child = this.children[x];
    if (child.contains(target)) {
      //return true
      return true;
    }
  }
  // return false
  return false;






  // return this.children.contains();

  // var containCheck = function(list) {
  //   // debugger;
  //   for (var key in list) {
  //     if (list[x].value === target) {
  //       return true;
  //     }
  //     if (typeof(list[x].children) === 'object') {
  //       return containCheck(list[x].children);
  //     }
  //   }
  //   return false;
  // };
  // return containCheck(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */