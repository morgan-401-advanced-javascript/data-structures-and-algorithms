'use strict';
const Node = require('./node.js');

class BinaryTree {
  constructor() {
    this.root = null;
  }
  inOrder() {
    let result = [];
    const traverse = node => {
      if(node.left) {
        traverse(node.left);
      }
      result.push(node.data);
      if(node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }
}
class BinarySearchTree extends BinaryTree {
  add(value) {
    let node = this.root;
    if(!node) {
      this.root = new Node(value);
      return;
    }
    else {
      const search = function(node) {
        if(value < node.data) {
          if(node.left === null) {
            node.left = new Node(value);
            return;
          }
          else {
            return search(node.left);
          }
        }
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
}
module.exports = BinarySearchTree;