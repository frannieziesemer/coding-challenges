// Understanding the input and output 
// ``` 
// Input: GraphMatrix, node
// GraphMatrix  = array of arrays 
// node = two points within the GraphMatrix - index of row(i), column(j) 
//     n = n * n
//     row = i 
//     column = j 
//     if index at matrix[i], matrix[i][j] is 0 then the nodes are not adjacent
//     if index at matrix[i], matrix[i][j] is 1 then the nodes ARE adjacent 
// Output: boolean 
// ```
// executing the function 
// ```
// loop through the matrix rows matrix[i]
//   loop through the matrix columns matrix[i][j]
//   if matrix[i][j] = 0 return false 
//   if matrix[i][j] = 1 return true 

// ```

const adjacentNodes = (matrix, node1, node2) => {
  for(let i = 0; i < matrix.length; i++) {
    const row = matrix[node1];
    for(let j = 0; j < row.length; j++) {
      if(row[node2] == 0) {
        return false;
      } else {
        return true;
      }
    }
  }

}



module.exports = adjacentNodes