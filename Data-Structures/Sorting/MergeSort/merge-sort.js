'use strict';

function mergeSort(arr) {
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
  let temp = [...arr];

  function sort(temp, sIndx, eIndx) {
    if(sIndx >= eIndx) {
      return;
    }
    let mid = Math.floor((sIndx + eIndx)/2);
    sort(temp, sIndx, mid);
    sort(temp, mid + 1, eIndx);
    merge(temp, sIndx, mid, eIndx);
  }
  sort(temp, 0, temp.length - 1);
  return temp;
}

function merge(arr, sIndx, mid, eIndx) {
  let merged = [];
  let j = mid +1;
  for(let i = sIndx; i <= mid; i++){
    while(arr[i] > arr[j] && j <= eIndx) { 
      merged.push(arr[j]);
      j++;
    }
    
    merged.push(arr[i]);
  }
  for(let i = 0; i < merged.length; i++) {
    arr[sIndx + i] = merged[i];
  }
}

module.exports = mergeSort;