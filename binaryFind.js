function binaryFind(arr, num) {
  let low = 0;
  let high = arr.length - 1;
  while(low <= high) {
    let middle = Math.floor((low+high)/2)
    if(num < arr[middle]) {
      high = middle-1;
    } else if(num > arr[middle]) {
      low = middle+1
    } else {
      return arr[middle]
    }
  }
}