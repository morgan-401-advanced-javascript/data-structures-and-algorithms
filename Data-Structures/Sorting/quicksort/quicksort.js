'use strict';
function quicksort(arr, sIndx, eIndx) {
  let pivot;
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
  if(arr.length > 1){
    pivot = partition(arr, sIndx, eIndx);
    if (sIndx < pivot - 1){
      quicksort(arr, sIndx, pivot - 1);
    }
    if(pivot < eIndx){
      quicksort(arr, pivot + 1, eIndx);
    }
  }
  return arr;
}
function swap(arr, left, right){
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}
function partition(arr, left, right){
  let pivot   = arr[Math.floor((left + right) / 2)];
  let i       = left;
  let j       = right;
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


module.exports = quicksort;