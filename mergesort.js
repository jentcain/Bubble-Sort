function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  let midpoint = Math.round(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, midpoint);
  let secondHalf = wholeArray.slice(midpoint);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let sortedArr = [];
  let leftPoint = 0;
  let rightPoint = 0;
  while (leftPoint < arr1.length && rightPoint < arr2.length) {
    if (arr1[leftPoint] > arr2[rightPoint]) {
      sortedArr.push(arr2[rightPoint]);
      rightPoint++;
    } else {
      sortedArr.push(arr1[leftPoint]);
      leftPoint++;
    }
  }
  if (leftPoint === arr1.length) {
    for (let i = rightPoint; i < arr2.length; i++) {
      sortedArr.push(arr2[i]);
    }
  } else {
    for (let i = leftPoint; i < arr1.length; i++) {
      sortedArr.push(arr1[i]);
    }
  }
  return sortedArr;
}

function mergeSort(array) {
  if (array.length === 1){
    return array;
  }
  else {
    const splitArr = split(array);
    return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]));
  }
}

