function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left, right);
  }
}
function merge(arrFirst, arrSecond) {
  const arrSort = [];
  let i = (j = 0);

  while (i < arrFirst.length && j < arrSecond.length) {
    arrSort.push(arrFirst[i] < arrSecond[j] ? arrFirst[i++] : arrSecond[j++]);
  }
  return [...arrSort, ...arrFirst.slice(i), ...arrSecond.slice(j)];
}
