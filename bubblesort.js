function swap(arr, index){
  if (arr[index] > arr[index + 1]){
    var firstNum = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = firstNum;
    return true;
  }
  return false;
}

function bubbleSort(array){
  var swapping = true;

  while (swapping){
    swapping = false;
    for (var i = 0; i < array.length - 1; i++) {
      swapping = swap(array, i) || swapping;
    }
  }
  return array;
}
