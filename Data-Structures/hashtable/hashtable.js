'use strict';

class hashTable {
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
            
    return hash % 4; 
  } 
  add(keyItem, valueItem){
    let hashed = this.hashString(keyItem);
    if(this.bucket[hashed] === undefined){
      this.bucket[hashed] = [[keyItem, valueItem]];
    }
    else{
      let existing = false;
      for(var i = 0; i < this.bucket[hashed].length; i++){
        if(this.bucket[hashed][i][0]=== keyItem){
          this.bucket[hashed][i][1] = valueItem;
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
    
}
module.exports= hashTable;
// add: takes in both a key and a value. This function should hash the key, and add the key and value pair to the table, handling collisions as needed.
// get: takes in the key and returns the value from the table.
// contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
// hash: takes in an arbitrary key and returns an index in the collection.