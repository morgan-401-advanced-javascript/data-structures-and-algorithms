'Use Strict';
const arrayBinary = {};
arrayBinary.BinarySearch = (array, input)=>{
  let answer = -1;
  for (let i = 0; i < array.length; i++){
    if(array[i] === input){
      answer = i;
    }
  }
  return answer;
};

module.exports = arrayBinary;
