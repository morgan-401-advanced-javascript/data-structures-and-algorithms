# Singly Linked List with K-th Search Method

More complex functions for singly linked lists

## Challenge

Write a method for the LinkedList class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the LinkedList class as well as the methods created in previous challenges.

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
kthFromEnd(k) - returns the value of a node at the kth index