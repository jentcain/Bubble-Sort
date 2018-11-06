// The bubbleSort function takes an array argument and sorts it by implementing the Bubble Sort algorithm. It returns a sorted array containing all of the elements of the original array.

function bubbleSort(array) {
  let swapped = false;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i);
      swapped = true;
    }
  }
  if (swapped) {
    return bubbleSort(array);
  } else {
    return array;
  }
}

// The swap function takes an array argument and an index argument and swaps the position of two elements in the array, the element at index 'idx' and the element at index 'idx + 1'

function swap(array, idx) {
  let temp = array[idx];
  array[idx] = array[idx + 1];
  array[idx + 1] = temp;
}
