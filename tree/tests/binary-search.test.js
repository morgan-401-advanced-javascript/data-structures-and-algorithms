'use strict';

const BinarySearchTree = require('../binary-search.js');
const BinaryTree = require('../tree.js');


let tree = new BinarySearchTree;

describe('Binary Search Tree', () => {
  it('Can successfully instantiate an empty tree', () => { 
    expect(tree).toBeTruthy();
  }); 
  
  it('Can successfully instantiate a tree with a single root node', () => { 
    tree.add(5);
    expect(tree.root.data).toBe(5);
  }); 

  it('Can successfully add a left child and right child to a single root node on a Binary Search Tree', () => { 
    tree.add(5);
    tree.add(7);
    tree.add(2);
    expect(tree.root.data).toBe(5);
    expect(tree.root.left.data).toBe(2);
    expect(tree.root.right.data).toBe(7);
  }); 

  it('Can successfully return a collection from a pre-order traversal', () => { 
    tree.add(5);
    tree.add(7);
    tree.add(2);
    expect(tree.preOrder()).toBe(5);

  }); 
});


// Can successfully instantiate an empty tree
// Can successfully instantiate a tree with a single root node
// Can successfully return a collection from a pre-order traversal
// Can successfully return a collection from an in-order traversal
// Can successfully return a collection from a post-order traversal
// Can successfully add a left child and right child to a single root node on a Binary Search Tree