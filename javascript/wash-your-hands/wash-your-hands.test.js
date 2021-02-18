const washYourHands = require('./wash-your-hands');

test('returns minutes and zero seconds ', () => {
    expect(washYourHands(8, 7)).toBe("588 minutes and 0 seconds");
});

test('returns when input is zero', () => {
    expect(washYourHands(0, 0)).toBe("0 minutes and 0 seconds");
});
test('returns correct seconds amount and only minutes', () => {
    expect(washYourHands(7, 9)).toBe("661 minutes and 30 seconds");
});