# Left Join Hash Tables

## Links

-   [Link to Pull Request](https://github.com/morgan-401-advanced-javascript/data-structures-and-algorithms/pull/20)
-   Link to Travis

<!-- Short summary or background information -->

## Whiteboard / Drawing

<!-- Photo of your whiteboard or drawing -->

## Challenge

Write a function that `LEFT JOIN`s two hash tables into a single data structure
Assume you know the hash function (use an existing one you’ve developed before)
The first parameter is a hash table that stores an object containing the original key (a word) and the key’s value (a word that is a synonym)
The second parameter is a hash table that stores an object containing the original key (a word), and a key’s value (a word that is an antonym)
Combine the key and corresponding values (if they exist) into a new data structure according to `LEFT JOIN` logic.
`LEFT JOIN` means all the values in the first “left” hash table are returned, and if values exist in the “right” hash table, they are appended to the result row. If no values exist in the “right” hashmap, then some flavor of NULL should be appended to the result row.
The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the `LEFT JOIN`logic
Avoid utilizing any of the library methods available to your language

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API

<!-- Description of each method publicly avai