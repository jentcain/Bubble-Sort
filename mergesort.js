// The mergeSort function takes an array argument and sorts it by implementing the Merge Sort algorithm. It returns a sorted array containing all of the elements of the original array.

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const splitArr = split(array);
    return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]));
  }
}

// The split function takes a single array argument and returns an array with two array elements, each of which has a length of 1/2 the length of the original array, if the length of the original array is even. If the length of the original array is odd, the first array element has one more element than the second.

function split(wholeArray) {
  let midpoint = Math.round(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, midpoint);
  let secondHalf = wholeArray.slice(midpoint);
  return [firstHalf, secondHalf];
}

// The merge function takes two SORTED arrays as arguments and merges them into a single sorted array

function merge(leftArr, rightArr) {
  let sortedArr = [];
  let leftIdx = 0;
  let rightIdx = 0;
  while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
    if (leftArr[leftIdx] > rightArr[rightIdx]) {
      sortedArr.push(rightArr[rightIdx++]);
    } else {
      sortedArr.push(leftArr[leftIdx++]);
    }
  }
  for (; rightIdx < rightArr.length; rightIdx++) {
    sortedArr.push(rightArr[rightIdx]);
  }
  for (; leftIdx < leftArr.length; leftIdx++) {
    sortedArr.push(leftArr[leftIdx]);
  }
  return sortedArr;
}

