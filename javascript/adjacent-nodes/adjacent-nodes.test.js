const adjacentNodes = require('./adjacent-nodes');

const adjacencyMatrix1 = [
  [ 0, 1, 0, 0 ],
  [ 1, 0, 1, 1 ],
  [ 0, 1, 0, 1 ],
  [ 0, 1, 1, 0 ]
];

const adjacencyMatrix2 = [
  [ 0, 1, 0, 1, 1 ],
  [ 1, 0, 1, 0, 0 ],
  [ 0, 1, 0, 1, 0 ],
  [ 1, 0, 1, 0, 1 ],
  [ 1, 0, 0, 1, 0 ]
];



test('matrix one returns true', () => {
  expect(adjacentNodes(adjacencyMatrix1, 0, 1)).toBeTruthy();
});
test('matrix one returns false', () => {
expect(adjacentNodes(adjacencyMatrix1, 0, 2)).toBeFalsy();
});
test('matrix two returns true', () => {
expect(adjacentNodes(adjacencyMatrix2, 0, 3)).toBeTruthy();
});
test('matrix two returns false', () => {
expect(adjacentNodes(adjacencyMatrix2, 1, 4)).toBeFalsy();
});