import pytest
from calc import adjacentNodes

matrix1 = [
  [ 0, 1, 0, 0 ],
  [ 1, 0, 1, 1 ],
  [ 0, 1, 0, 1 ],
  [ 0, 1, 1, 0 ]
]

matrix2 = [
  [ 0, 1, 0, 1, 1 ],
  [ 1, 0, 1, 0, 0 ],
  [ 0, 1, 0, 1, 0 ],
  [ 1, 0, 1, 0, 1 ],
  [ 1, 0, 0, 1, 0 ]
]

class TestClass:
  def test_matrix_one_true(self):
    assert adjacentNodes(matrix1, 0, 1) == True
  def test_matrix_one_false(self):
    assert adjacentNodes(matrix1, 0, 2) == False
  def test_matrix_two_true(self):
    assert adjacentNodes(matrix2, 0, 3) == True  
  def test_matrix_two_false(self):
    assert adjacentNodes(matrix2, 1, 4) == False