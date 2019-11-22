# Animal Shelter Queue

## Links

-   [PR](https://github.com/morgan-401-advanced-javascript/data-structures-and-algorithms/pull/10)
-   [Link to Travis](https://travis-ci.com/morgan-401-advanced-javascript/data-structures-and-algorithms/builds/135561004)

Build a a Queue that represents an animal shelter. Creat Dog and Cat classes. 

## Challenge

* Create a Dog and Cat class. These classes should share the following properties:
     * `name:` a string representing the name of this animal
     * `print():` a function that prints
     * `${name}` is a good dog! if this is a Dog object
     * `${name}` is a sweet cat! if this is a Cat object
* Create a Queue class called AnimalShelter which holds only Dogs and Cats
     * Add a function `enqueue(animal)` which adds the specified Dog or Cat object into the shelter
     * Add a function `dequeue(pref)` which dequeues either the first Dog or the first Cat object in the queue, depending on what pref is (pref may be a string that is either empty, 'cat' or 'dog')
     * If pref is an empty string, dequeue the first animal in the queue, regardless of if it’s a Dog or Cat
     * After you dequeue, call the `print()` function on the dequeued object
## Approach & Efficiency

print() Big O(1) this does not traverse through the input and only performs a single task
enqueue(animal) Big O(1) this will only add an item to the back of the queue and does not traverse through the entire list. 
dequeue(pref) Big O(n) this will potentially go through the entire queue if the pref animal is not actually in the queue. 

## API

class Dog {
  constructor(name){
    this.name = name;
  }
    <!-- return a string `${this.name} is a good dog!`; -->
  print()
}

class Cat {
  constructor(name){
    this.name = name;
  }
    <!-- return a string `${this.name} is a sweet cat!`; -->
  print()
  
}

class AnimalShelter {
  constructor(){
    this.front = null;
    this.rear = null;
  }
  <!-- adds an animal to the rear of the queue -->
  enqueue(animal)

  <!-- this will remove the first animal of pref or the first one seen if one is not specified. In addition it will print a string based on the class of animal dequeued -->
  dequeue(pref)

}
