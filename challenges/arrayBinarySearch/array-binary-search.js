'Use Strict';

//this is the function that will search an array for a given input
const BinarySearch = (array, input)=>{
  //answer by default will be -1 and that value will only change if the input exists in the array
  let answer = -1;
  //loops through the array and searches for the input value
  for (let i = 0; i < array.length; i++){
    if(array[i] === input){
      //if the input exists, update answer variable
      answer = i;
    }
  }
  //return the answer which is -1 if input DNE or the index of the input
  return answer;
};

module.exports = BinarySearch;
