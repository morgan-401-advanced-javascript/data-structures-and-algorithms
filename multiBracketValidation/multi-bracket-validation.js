'Use Strict';

// create a function called multiBracketValidation(input). Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:
function multiBracketValidation(input){
  let array = [];
  for( let i = 0; i< input.length; i++){
    if(
      input[i] === '(' 
      || 
      input[i] === ')' 
      || 
      input[i] === '{'
      || 
      input[i]=== '}'
      || 
      input[i] === '['
      || 
      input[i]=== ']'){
      array.push(input[i]);
    }
  }
  if(array.length < 2 || array.length % 2 === 1){
    return false;
  }
  let endLoop = 1 ;
  while(endLoop === 1){
    endLoop = 0;
    for( let i = 0; i< array.length-1; i++)
    {
      if(
        (array[i] === '(' && array[i+1] === ')')
      || 
      (array[i] === '[' && array[i+1] === ']') 
      || 
      (array[i] === '{' && array[i+1] === '}'))
      {
        array.splice(i, 2);
        endLoop = 1;
      }
    }
  }

  if(array.length === 0){
    return true;
  }else{
    return false;
  }
}

module.exports = multiBracketValidation; 
