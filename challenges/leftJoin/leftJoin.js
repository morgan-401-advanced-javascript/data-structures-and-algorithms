'use strict';

class hashtable{
  constructor(){
    this.bucket = [];
  }
  
  hashString(string) { 
      
    var hash = 0; 
      
    if (string.length == 0) return hash; 
      
    for (let i = 0; i < string.length; i++) { 
      let char = string.charCodeAt(i); 
      hash = ((hash << 5) - hash) + char; 
    } 
        
    return hash % 10; 
  } 
  add(keyItem, valueItem){
    let hashed = this.hashString(keyItem);
    if(this.bucket[hashed] === undefined){
      this.bucket[hashed] = [[keyItem, valueItem]];
    }
    else{
      let existing = false;
      for(var i = 0; i < this.bucket[hashed].length; i++){
        if(this.bucket[hashed][i][0] === keyItem){
          this.bucket[hashed][i][2] = valueItem;
          existing = true;
        }
        if(existing === false){
          this.bucket[hashed].push([keyItem, valueItem]);
        }
      }
    }
  }
  get(keyItem){
    let hashed = this.hashString(keyItem);
    let item = this.bucket[hashed];
    if(item === undefined){
      return null;
    }
    else{
      for(var i = 0; i < item.length; i++){
        if(item[i][0]=== keyItem){
          return item[i][1];
        }
      }
    }
  }
  contains(key){
    let hashed = this.hashString(key);
    if(this.bucket[hashed]){
      return true;
    } else {return false;}
  }
  hash(key){
    return this.hashString(key);
  }
  leftJoin(leftTable, rightTable){
    let newTable = new hashtable;
    console.log(leftTable.bucket[2]);
    for(let i=0; i < leftTable.bucket.length; i++) {
      console.log(leftTable.bucket[0][i]);
      newTable.add(leftTable.bucket[0][i][0], leftTable.bucket[0][i][1]);
    }
    for(let i=0; i < rightTable.bucket.length; i++) {
      newTable.add(rightTable.bucket[0][i][0], rightTable.bucket[0][i][1]);
    }
    return newTable;
  }
}
module.exports= hashtable;
// add: takes in both a key and a value. This function should hash the key, and add the key and value pair to the table, handling collisions as needed.
// get: takes in the key and returns the value from the table.
// contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
// hash: takes in an arbitrary key and returns an index in the collection.
