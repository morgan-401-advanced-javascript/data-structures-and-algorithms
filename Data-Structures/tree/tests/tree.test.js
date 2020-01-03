// const BinarySearchTree = require('../binary-search.js');
const BinaryTree = require('../tree.js');


xdescribe('Binary Search Tree', () => {
  it('Can successfully instantiate an empty tree', () => { 
    let tree = new BinaryTree;
    expect(tree).toBeTruthy();
  }); 
  
  it('Can successfully instantiate a tree with a single root node', () => { 
    let tree = new BinaryTree;
    tree.add(5);
    expect(tree.root.data).toBe(5);
  }); 
  
  it('Can successfully add a left child and right child to a single root node on a Binary Search Tree', () => { 
    let tree = new BinaryTree;
    tree.add(5);
    tree.add(7);
    tree.add(2);
    expect(tree.root.data).toBe(5);
    expect(tree.root.left.data).toBe(2);
    expect(tree.root.right.data).toBe(7);
  }); 
});
xdescribe('Search Tree', () => {
  let tree = new BinaryTree;
  tree.add(2);
  tree.add(1);
  tree.add(3);
  console.log(tree.preOrder());
  it('Can successfully return a collection from a pre-order traversal', () => { 
    expect(tree.preOrder()).toBeTruthy();
  }); 
});
// Can successfully instantiate an empty tree
// Can successfully instantiate a tree with a single root node
// Can successfully return a collection from a pre-order traversal
// Can successfully return a collection from an in-order traversal
// Can successfully return a collection from a post-order traversal
// Can successfully add a left child and right child to a single root node on a Binary Search Tree