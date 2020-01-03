'use strict';
function quicksort(arr, sIndx, eIndx) {
  if(Array.isArray(arr) === false) {
    return 'Not an array';
  }
  if(!arr.every(el => typeof el === 'number')) {
    return 'Not an array of only numerical values';
  }
  if(!arr.length) {
    return 'Empty array';
  }
  if(arr.length === 1) {
    return arr;
  }
  if(sIndx < eIndx){
    let pivot = partition(arr, sIndx, eIndx);
    if (sIndx < pivot -1){
      quicksort(arr, sIndx, pivot-1);
    }
    if(pivot < eIndx){
      quicksort(arr, pivot + 1, eIndx);
    }
  }
  function swap(arr, sIndx, eIndx){
    let temp = arr[sIndx];
    arr[sIndx] = arr[eIndx];
    arr[eIndx] = temp;
  }
  function partition(arr, sIndx, eIndx){
    let pivot   = eIndx;
    let i       = sIndx;
    let j       = eIndx;
    while (i <= j) {
      while (arr[i] < pivot) {
        i++;
      }
      while (arr[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(arr, i, j);
        i++;
        j--;
      }
    }
    return i;
  }
  return arr;
}


module.exports = quicksort;