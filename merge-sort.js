function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const leftArray = mergeSort(array.slice(0, mid));
  const rightArray = mergeSort(array.slice(mid));

  return merge(leftArray, rightArray);
}

function merge(leftArray, rightArray) {
  const sortedArray = [];
  let i = 0; j = 0;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] <= rightArray[j]) {
      sortedArray.push(leftArray[i]);
      i++;
    } else {
      sortedArray.push(rightArray[j]);
      j++;
    }
  }
  return [
    ...sortedArray,
    ...leftArray.slice(i),
    ...rightArray.slice(j)
  ];
}

console.log(mergeSort([]));
console.log(mergeSort([1]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); 
console.log(mergeSort([105, 79, 100, 110]));