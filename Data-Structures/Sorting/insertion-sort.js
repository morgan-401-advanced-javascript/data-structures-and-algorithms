'use strict';

function insertionSort(array) {
  let answer =[];
  if(Array.isArray(array) != true){
    return('Not an array');
  }
  if(array.length === 0){
    return('Empty array');
  }
  if(typeof array[0] != 'number'){
    return('Array with non-numerical values');
  }
  else{
    answer.push(array[0]);
    for (let i = 0; i < array.length; i++) {
      let item = array[i];
      let j;
      for (j = i - 1; array[j] > item; j--) {
        answer[j + 1] = array[j];
      }
      answer[j + 1] = item;
    }
    return answer;
  }

}

module.exports = insertionSort;