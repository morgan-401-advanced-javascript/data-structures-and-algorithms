'Use Strict';
const Node = require('./node.js');

class BinaryTree {
  // A root property that stores a Node representing the start of the tree
  constructor() {
    this.root = null;
  }
  // A preOrder method that traverses the tree using the pattern root >> left >> right and returns an array of the traversed values

  preOrder() {
    let treeRoot = this.root;
    let array = [];
    array.push(treeRoot.data);

    if (treeRoot.left) {

      
      array.push(...treeRoot.left.preOrder());
    
    }

    if (treeRoot.right) {
      array.push(...treeRoot.right.preOrder());
    }
    return array;
  }

  inOrder() {
    let treeRoot = this.root;
    let array = [];

    if (treeRoot.left) {
      array.push(...treeRoot.left.inOrder());
    }

    array.push(treeRoot.value);

    if (treeRoot.right) {
      array.push(...treeRoot.right.inOrder());
    }
    return array;
  }

  postOrder() {
    let treeRoot = this.root;
    let array = [];

    if (treeRoot.left) {
      array.push(...treeRoot.left.postOrder());
    }

    if (treeRoot.right) {
      array.push(...treeRoot.right.postOrder());
    }

    array.push(treeRoot.value);
    return array;

  }

}

class BinarySearchTree extends BinaryTree {
  add(value) {
    let node = this.root;

    // if a root does not exist
    // set node as root
    if(!node) {
      this.root = new Node(value);
      return;
    }
    else {
      const search = function(node) {
        // if the value is less than the root
        // checking node.left
        if(value < node.data) {
          if(node.left === null) {
            node.left = new Node(value);
            return;
          }
          else {
            return search(node.left);
          }
        }

        // if value is greater than the root
        // checking node.right
        else if (value > node.data) {
          if(node.right === null) {
            node.right = new Node(value);
            return;
          }
          else {
            return search(node.right);
          }
        } else {
          return null;
        }
      };

      return search(node);
    }
  }

  contains(value) {
    let current = this.root;
    while(current) {
      if(value === current.data) {
        return true;
      }
      if(value < current.data) {
        current= current.left;
      }
      else {
        current = current.right;
      }
    }
    
    return false;
  }
}

module.exports = BinarySearchTree;


// An inOrder method that traverses the tree using the pattern left >> root >> right and returns an array of the traversed values
// A postOrder method that traverses the tree using the pattern left >> right >> root and returns an array of the traversed values