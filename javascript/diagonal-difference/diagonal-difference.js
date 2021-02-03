function diagonalDifference(arr) {
   
    let sumLeftToRight = 0;
    let sumRightToLeft = 0;
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
      let row = arr[i];
      let numbersToAddLtR = row[index];
      sumLeftToRight += numbersToAddLtR;
      let reversedRow = row.reverse();
      let numbersToAddRtL = reversedRow[index];
      sumRightToLeft += numbersToAddRtL;
      ++index;

    }
    let difference = Math.abs(sumLeftToRight - sumRightToLeft);
    return difference;
    

}