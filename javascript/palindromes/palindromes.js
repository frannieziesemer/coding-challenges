const palindromes = function(string) {
// remove punctuation
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g;
//convert to lower case  
    const originalString = string.replace(regex, '').toLowerCase();

// split into array per letter    //reverse // join back to string 
    const reverseString = originalString.split('').reverse().join('');

    if (originalString === reverseString) {
        return true;
    }   else {
        return false;
    }

}
palindromes('Race Car.');
module.exports = palindromes
