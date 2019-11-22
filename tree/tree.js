'Use Strict';
const Node = require('./node.js');

class BinaryTree {
  // A root property that stores a Node representing the start of the tree
  constructor() {
    this.root = null;
  }
  // A preOrder method that traverses the tree using the pattern root >> left >> right and returns an array of the traversed values

  preOrder() {
    let array = [];
    if(this.root === null){
      return 'empty tree';
    }
    array.push(this.root.data);
    if(this.root.left !== null){
      this.root.left.preOrder();
    }
    else{
      this.root.right.preOrder();
    }

    return array;
    




  }
  // An inOrder method that traverses the tree using the pattern left >> root >> right and returns an array of the traversed values
  inOrder(node){
    
  }
  // A postOrder method that traverses the tree using the pattern left >> right >> root and returns an array of the traversed values
  postOrder(node){

  }
  
}

module.exports = BinaryTree;

