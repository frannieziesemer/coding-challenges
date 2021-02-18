const valid = require('./validate-pin');

test('1234 is true', () => {
    expect(valid('1234')).toBeTruthy();
});
test('string contains five numbers returns false', () => {
  expect(valid('12345')).toBeFalsy();
});
test('contains letters returns false', () => {
  expect(valid('89abc1')).toBeFalsy();
});
test('six digits returns true', () => {
  expect(valid('900876')).toBeTruthy();
});
test('contains whitespace returns false', () => {
  expect(valid(' 1233')).toBeFalsy();
});