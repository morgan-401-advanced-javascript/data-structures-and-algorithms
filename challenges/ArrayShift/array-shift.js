'use strict';
const arrayShift = {}

arrayShift.insertShiftArray = (a, b)=>{
  let answer = [];
  let middle = 0;
  if(a.length % 2 === 0){
    middle = (a.length / 2);
  } else {
    middle = ((a.length + 1) / 2);
  }
  for (let i=0; i< middle; i++){
    answer[i] = a[i];
  }
  answer[middle]= b;
  for (let i=middle; i< a.length; i++){
    answer[i+1] = a[i];
  }
  return answer;
};



// let test1 = [2,4,6,8];
// let test1Insert = 5;

// let test2 = [4,8,15,23,42]; 
// let test2Insert = 16;
// console.log('test 1 ', insertShiftArray(test1, test1Insert));
// console.log('test 2 ', insertShiftArray(test2, test2Insert));

module.exports = arrayShift;