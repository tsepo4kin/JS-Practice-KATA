function gSort(arr) {
  let i = 1;
  while(i < arr.length) {
    if(arr[i-1]>arr[i]) {
      [arr[i-1], arr[i]] = [arr[i], arr[i-1]]
      i--;
    }else {
      i++
    }
  }
  return arr;
}