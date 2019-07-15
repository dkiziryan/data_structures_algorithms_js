const merge = (left, right) => {
  let result = [],
    leftIdx = 0,
    rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }
  const item = result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
  return item;
};

const mergeSort = unsortedArray => {
  if (unsortedArray && unsortedArray.length <= 1) {
    return unsortedArray;
  }

  const middle = Math.floor(unsortedArray.length / 2);

  let left = unsortedArray.slice(0, middle);
  let right = unsortedArray.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};
