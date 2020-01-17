'use strict';
function repeatedWord(str){
  let array= str.split(' ');
  let newArray = [];
  for(let i = 0; i < array.length; i ++){
    for(let j = 0; j <newArray.length; j++){
      if(array[i] === newArray[j]){
        return array[i];
      }
    }
    newArray.push(array[i]);
  }
  
}

module.exports = repeatedWord;