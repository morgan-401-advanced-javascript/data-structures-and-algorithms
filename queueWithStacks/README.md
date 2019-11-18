# Pseudo Queue

## Links

-  [ Link to your Pull Request](https://github.com/morgan-401-advanced-javascript/data-structures-and-algorithms/pull/9)
-   [Link to your Travis](https://travis-ci.com/morgan-401-advanced-javascript/data-structures-and-algorithms/jobs/252463737)

Implement a Queue using two Stacks.

## Challenge
Create a brand new PseudoQueue class. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize two Stack objects. Ensure that you create your class with the following methods:

* enqueue(value) which inserts value into the PseudoQueue, using a last-in, last-out approach.
* dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out approach.

The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

## Approach & Efficiency

  enqueue(value) - O(1) This function simply adds a single value to the queue. Because it only does one action and no more it is Big O(1)
  dequeue() - O(n) This will have to shift the items in the queue between two stacks inorder to pop the first item off the queue. Because it will need to traverse through the entire queue it is Big O(n)


## API
class PsuedoQueue{
  
  `enqueue(value) `which inserts value into the PseudoQueue, using a last-in, last-out approach.
  `dequeue()` which extracts a value from the PseudoQueue, using a first-in, first-out approach.
}