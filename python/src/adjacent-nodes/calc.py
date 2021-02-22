def adjacentNodes(matrix, node1, node2):
  for i in range( len(matrix) ):
    row = matrix[node1]
    for j in range( len(row) ):
      if row[node2] == 0:
        return False
      else:
        return True
      
       
