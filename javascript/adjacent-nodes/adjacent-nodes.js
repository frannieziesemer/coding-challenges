
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