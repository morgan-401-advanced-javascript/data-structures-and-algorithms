'use strict';
function repeatedWord(str){

  if(str.length < 1){
    return 'empty';
  }
  if(typeof str !== 'string'){
    return 'Not a string';
  }

  let array= str.split(' ');
  let newArray = [];
  if(array.length === 1){
    return 'Nothing to compare';
  }
  for(let i = 0; i < array.length; i ++){
    for(let j = 0; j <newArray.length; j++){
      if(array[i] === newArray[j]){
        return array[i];
      }
    }
    newArray.push(array[i]);
  }
  return 'No repeated words';
}

module.exports = repeatedWord;