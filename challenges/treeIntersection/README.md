# Tree Intersection

## Links

-   [Link to Pull Request](https://github.com/morgan-401-advanced-javascript/data-structures-and-algorithms/pull/18)
-   [Link to Travis](https://travis-ci.com/morgan-401-advanced-javascript/data-structures-and-algorithms/builds/145869325)


## Whiteboard / Drawing

<!-- Photo of your whiteboard or drawing -->

## Challenge

Write a function called `tree_intersection `that takes two binary tree root nodes as parameters
Without utilizing any of the built-in library methods available to your language, return an array of values found in both trees

## Approach & Efficiency

Big O(n^2) The nested for loop causes the big O to become ^2. Space is 3n due to the 3 created arrays. 

## API

`tree_intersection(tree1, tree2)` function that takes in two trees and compares the values and returns an array of matching values. 