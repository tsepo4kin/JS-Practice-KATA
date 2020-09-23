function insertionSort(arr) {
  for(let i = 1; i<arr.length; i++) {
    let curr = arr[i];
    let j = i;
    while(j > 0 && arr[j-1] > curr) {
      arr[j] = arr[j-1];
      j--;
    }
    arr[j] = curr
  }
  return arr;
}