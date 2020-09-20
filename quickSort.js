function quickSort(arr) {
  if(arr.length < 2) {
    return arr;
  } else {
    let pivot = arr[Math.floor(Math.random() * arr.length)];
    let less = arr.filter(e => e < pivot);
    let greater = arr.filter(e => e > pivot);
    return [...quickSort(less), pivot, ...quickSort(greater) ]
  }
}