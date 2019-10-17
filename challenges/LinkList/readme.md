# Singly Linked List

This challenge creates a linked list, searches to see if a specific value is present, and will return a string of all values in the list. 

## Challenge
Write tests to prove the following functionality:

* Can successfully instantiate an empty linked list
* Can properly insert into the linked list
* The head property will properly point to the first node in the linked list
* Can properly insert multiple nodes into the linked list
* Will return true when finding a value within the linked list that exists
* Will return false when searching for a value in the linked list that does not exist
* Can properly return a collection of all the values that exist in the linked list

## Approach & Efficiency
O(n)
The worst case scenario would occur while cycling through each item of the list.

## API

insert(data) - Creates a new Node Object. Appends the new Node object to the beginning of the linked list
includes(searchValue) - Takes in a paramenter and returns a boolean if the value exists in the linked list
toString() - Returns a string with all the values in the linked list