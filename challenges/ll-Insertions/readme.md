# Singly Linked List

More complex functions for singly linked lists

## Challenge
* Have a class named Node. This class should contain:
    A variable to hold data (i.e. this.data)
    A variable to hold the next Node object (i.e. this.next)
* Have a class named LinkedList. This class should contain:
    A variable named head which holds the Node object that starts the list
    A constructor that instantiates head as an empty linked list
    A function called insert which takes in a value. This function will then create a new Node object, sets the object’s data property equal to the value. The function then appends this new Node object to the beginning of the linked list (i.e. it sets a new head)
    A function called includes which takes in a value and returns a boolean if that value exists in the linked list
    A function called toString whcih takes in no arguments and returns a string representing all the values in the linked list
    A function called append which adds a Node to the end of the list
    A function called insertBefore which adds a Node before a certain Node in the list
    A function called insertAfter which adds a Node after a certain Node in the list
Implement good error checking throughout your code. Create custom errors that describe what went wrong.
Structure and Testing
Any functions you write should be clean, reusable and independent component parts to the whole program.

#### Write tests to prove the following functionality:

* Can successfully add a node to the end of the linked list
* Can successfully add multiple nodes to the end of a linked list
* Can successfully insert a node before a node located in the middle of a linked list
* Can successfully insert a node before the first node of a linked list
* Can successfully insert after a node in the middle of the linked list
* Can successfully insert a node after the last node of the linked list

## Approach & Efficiency

O(n)
We never go deeper than one interation of the list so Big O(n) is still applicable

## API

insert(data) - Creates a new Node Object. Appends the new Node object to the beginning of the linked list
includes(searchValue) - Takes in a value as a paramenter and returns a boolean if the value exists in the linked list
toString() - Returns a string with all the values in the linked list
append(data) - Adds a node to the end of the list
insertBefore(data, before) - Adds a Node before a certain Node in the list
insertAfter(data, after) - Adds a Node after a certain Node in the list