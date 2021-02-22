const neutralise = require('./neutralise');

test('converts all opposites - and + = 0', () => {
  expect(neutralise("--++--", "++--++")).toBe("000000");
});
test('matched strings remain the same', () => {
  expect(neutralise("-+-+-+", "-+-+-+")).toBe("-+-+-+");
});
test('combination of matched and converted characters', () => {
  expect(neutralise("-++-", "-+-+")).toBe("-+00");
});

