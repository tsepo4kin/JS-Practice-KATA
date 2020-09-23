function cocktailSort(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    for (let i = left; i < right; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
      }
    }
    right--;
    for (let i = right; i > left; i--) {
      if (arr[i] < arr[i - 1]) {
        let tmp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = tmp;
      }
    }
    left++;
  }
  return arr;
}