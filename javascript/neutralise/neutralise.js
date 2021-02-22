const neutralise = (string1, string2) => {
  let arr = [];
  for(let i = 0; i < string1.length; i++) {
    if((string1[i] == '-' && string2[i] == '+') || (string1[i] == '+' && string2[i] == '-')) {
      arr.push('0');
    } else {
      arr.push(string1[i]);
    }
  }
  return arr.join('');
}



module.exports = neutralise