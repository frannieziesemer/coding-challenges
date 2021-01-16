const ftoc = function(farenheit) {
  const celcius = (farenheit - 32) * 5/9;
  return Math.round(celcius * 10) / 10;
}

const ctof = function(celcius) {
  const farenheit = (celcius * 9/5) + 32;
  return Math.round(farenheit * 10) / 10;
}

console.log(ftoc(100)); //37.8
console.log(ftoc(-100)); //-37.8
console.log(ftoc(73.1)); //163.8




module.exports = {
  ftoc,
  ctof
}
