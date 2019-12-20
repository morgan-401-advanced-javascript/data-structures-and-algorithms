'use strict';

function insertionSort(array) {
  let answer =[...array];
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
    let i = 0;
    while(i <= answer.length){
      let j =1;
      while(j > 0){
        if(answer[j-1] > answer[j]){
          let temp = answer[j];
          answer[j] = answer[j-1];
          answer[j-1] = temp;
        }
        j = j-1;
      }
      i++;
    }
    return answer;
  }

}

module.exports = insertionSort;