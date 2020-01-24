'use strict';
const node = require('./node');
const tree = require('./tree');


function tree_intersection(tree1, tree2){
  if(!tree1.root || !tree2.root){
    return 'invalid';
  }
  // loop through tree 1
  let tree1Array = tree1.inOrder();
  let tree2Array = tree2.inOrder();

  let newArray = [];

  for(let i = 0; i < tree1Array.length; i ++){
    // compare each node to tree2
    for(let j = 0; j <tree2Array.length; j++){
      // push dupes to an array
      if(tree1Array[i] === tree2Array[j]){
        newArray.push(tree1Array[i]);
      }
    }
  }
  return newArray;


}

module.exports = tree_intersection;