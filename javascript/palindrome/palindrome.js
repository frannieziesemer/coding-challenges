//**************palindrome checker */
const checkPalindrome = (palindrome) => {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g;
    //convert to string - and ignore punctuation and case -
    let originalString = palindrome.toString().replace(regex, '').toLowerCase()
    //convert to array - reverse then back to string
    let reversedString = originalString.split('').reverse().join('');
    
    if(reversedString === originalString) {
        return true;
    } else {
        return false;
    }

}
console.log(checkPalindrome(48984));
console.log(checkPalindrome('MAD Am'));

module.exports = checkPalindrome;