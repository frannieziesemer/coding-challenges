// if string.length = 4 or 6 return true
// if string regex matches 0-9 and not /s return true 
// if string.length = 0 return false


const valid = (pin) => {
  if(pin.length == 4 || pin.length == 6) {
    return (/\D/.test(pin)) ? false : true; 
  }
  else {
    return false;
  }
  }



module.exports = valid;