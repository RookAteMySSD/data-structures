

// Instantiate a new graph
var Graph = function() {

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {
    value: node,
    edge: []
  };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (this[key].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this[node].edge.length; i++) {
    var link = this[node].edge[i];
    for (var x = 0; x < this[link].edge.length; x++) {
      var delLink = this[link].edge;
      if (delLink[x] === node) {
        delLink.splice(x, 1);
      }
    }
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { // 5 // 6
// if node 2
  for (var i = 0; i < this[fromNode].edge.length; i++) {
    var curr = this[fromNode].edge[i];
    if (curr === toNode) {
      return true;
    }
  }
  return false;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { /* 3, 2*/
  // if node 2
  var nodeOne = this[fromNode].edge;
  var nodeTwo = this[toNode].edge;
  nodeOne.push(toNode);
  nodeTwo.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this[fromNode].edge.length; i++) {
    var current = this[fromNode].edge;
    if (current[i] === toNode) {
      current.splice(i, 1);
    }
  }
  for (var i = 0; i < this[toNode].edge.length; i++) {
    var current = this[toNode].edge;
    if (current[i] === fromNode) {
      current.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (this[key].value) {
      cb(key);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


