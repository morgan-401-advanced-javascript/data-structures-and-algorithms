# Hashtables

[Link to PR](https://github.com/morgan-401-advanced-javascript/data-structures-and-algorithms/pull/19)
[Travis](https://travis-ci.com/morgan-401-advanced-javascript/data-structures-and-algorithms/builds/146334549)

## Challenge

Implement a Hashtable with methods that can add, contains, hash, and get. 

## Approach & Efficiency
`add`, `contains` & `hash` have a Big O(1) 
`get` has a little more complexity because it will have to search through as many collisions exist for that hashed key. This would be Big O(N) based on the size of the collision.

## API

`add`: takes in both a key and a value. This function should hash the key, and add the key and value pair to the table, handling collisions as needed.
`get`: takes in the key and returns the value from the table.
`contains`: takes in the key and returns a boolean, indicating if the key exists in the table already.
`hash`: takes in an arbitrary key and returns an index in the collection.