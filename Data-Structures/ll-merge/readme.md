# Merging two Singly Linked Lists

Merge two linked lists into one.

## Challenge

* Write a method called mergeLists which takes two linked lists as arguments
* Merge the two lists together such that the final linked list has nodes that alternate between the nodes from each source list
* Return the head of the new merged list
* You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Approach & Efficiency
insert(data) O(1)

includes(searchValue) O(n)

toString() O(n)

append(data) O(n)

insertBefore(data, before) O(n)

insertAfter(data, after) O(n)

kthFromEnd(k) O(2n) that reduces to O(n)

mergeLists(list1, list2) O(2n) that will reduce to O(n)



## API

class LinkedList 

  insert(data)

  includes(searchValue)

  toString()
  
  append(data)
  
  insertBefore(data, before)

  insertAfter(data, after)

  kthFromEnd(k)

  mergeLists(list1, list2)