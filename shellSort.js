function shellSort(arr) {
  let gap = Math.floor(arr.length / 2);
  while (gap >= 1) {
    for (let i = gap; i < arr.length; i++) {
      const curr = arr[i];
      let j = i;
      while (j > 0 && arr[j - gap] > curr) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = curr;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}
