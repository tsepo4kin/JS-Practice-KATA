function combSort(arr) {
  const factor = 1.247
  let gapFactor = arr.length/factor
  while(gapFactor > 1) {
    const gap = Math.round(gapFactor)
    for(let i = 0, j = gap; j < arr.length; i++, j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    gapFactor = gapFactor / factor;
  }
  return arr;
}