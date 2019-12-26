'use strict';

function insertionSort(array) {
  if(Array.isArray(array) != true){
    return('Not an array');
  }
  if(array.length === 0){
    return('Empty array');
  }
  let badArrayData = [];
  array.forEach(element => {
    if(typeof element != 'number'){
      badArrayData.push(element);
    }
  });
  if(badArrayData.length > 0){
    return('Array with non-numerical values');
  }
  let answer =[...array];
  let i = 1;
  while(i < answer.length){
    let j = i;
    while(j>0){
      if(answer[j-1]> answer[j]){
        let temp = answer[j];
        answer[j] = answer[j-1];
        answer[j-1] = temp;
      }
      j--; 
    }
    i++;
  }
  return answer;
}

module.exports = insertionSort;