function bubbleSort(arr) {
  for(let i in arr) {
    for(let j = 0; j<arr.length; j++) {
      if(arr[j] > arr[j+1] ) {
        let tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp
      }
    }
  }
  return arr;
}