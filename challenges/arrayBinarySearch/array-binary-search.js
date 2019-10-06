'Use Strict';

//this is the function that will search an array for a given input
const BinarySearch = (arr, search)=>{
  //check if middle index matches key
  let firstIndex = 0;
  let lastIndex = arr.length - 1;
  while (firstIndex <= lastIndex) {
    let middle = Math.floor((firstIndex + lastIndex) / 2);
    if (arr[middle] === search) {
      return middle;
    }
    if (arr[middle] > search) {
    // if search is less, then firstIndex stays same
    // and lastIndex changes to middle minus 1
      lastIndex = --middle;
    // divide that by two, and make that new middle
    } else if (arr[middle] < search) {
      firstIndex = ++middle;
    }
  }
  return -1;
};

module.exports = BinarySearch;
