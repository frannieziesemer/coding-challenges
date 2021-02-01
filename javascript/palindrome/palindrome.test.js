const { TestScheduler } = require('jest');
const checkPalindrome = require('./palindrome');

test('string MADAM is palindrome', () => {
    expect(checkPalindrome('MADAM').toBeTruthy());
});
