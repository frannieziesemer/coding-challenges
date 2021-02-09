function miniMaxSum(arr) {
    const sortedArray = arr.sort((a, b) => a - b);
    let minimumSum = 0; 
    let maximumSum = 0;
    for(let i = 0; i < arr.length - 1; i++) {
      minimumSum += arr[i];
    }
    for(let j = 1; j < arr.length; j++) {
      maximumSum += arr[j];
    }
    return `${minimumSum} ${maximumSum}`;
  }