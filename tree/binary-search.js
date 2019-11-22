'use strict';
const BinaryTree = require('./tree.js');
const Node = require('./node.js');


class BinarySearchTree extends BinaryTree {
  add(value){
    let node = this.root;
    if(this.root === null){
      this.root = new Node(value);
      return;
    }
    else{
      const addBranch = function(node) {
        if(value < node.data) {
          if(node.left === null) {
            node.left = new Node(value);
            return;
          }
          else {
            return addBranch(node.left);
          }
        }
        else if (value > node.data) {
          if(node.right === null) {
            node.right = new Node(value);
            return;
          }
          else {
            return addBranch(node.right);
          }
        } else {
          return null;
        }
      };
      return addBranch(node);
    }
  }
}



module.exports = BinarySearchTree;