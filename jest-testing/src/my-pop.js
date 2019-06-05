// myPop([1, 2, 3]);
function myPop(arr) {
  const arrLength = arr.length;
  if (arrLength === 0) {
    return undefined;
  } else {
    const last = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return last;
  }
}

export default myPop;
