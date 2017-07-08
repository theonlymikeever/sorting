function split(arr) {
    if (arr.length === 0)
        return [];

    var arr1 = arr2 = [];

    arr1 = arr.slice(0, Math.floor(arr.length/2));
    arr2 = arr.slice(Math.floor(arr.length/2));
    return [arr1, arr2];
}

function merge(arr1, arr2) {
    var outArr = [];

    while (arr1.length || arr2.length) {
        if (arr2.length === 0 || (arr1[0] < arr2[0])) {
            outArr.push(arr1.shift(1));
        }
        else {
            outArr.push(arr2.shift(1));
        }
    }

    return outArr;
}

function mergeSort(arr) {
    var allArr = [];
    console.log(arr);
    if (arr.length === 1) {
        return arr;
    }

    var resultArrays = split(arr);
    var arr1 = mergeSort(resultArrays[0]);
    var arr2 = mergeSort(resultArrays[1]);
    var mergedArr = merge(arr1,arr2);

    return mergedArr;
}