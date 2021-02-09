function timeConversion(s) {
    let time = s.slice(2, -2);
    let newTime = (parseInt(s.slice(0, 2))) + 12;
    toString(newTime);
    let millitaryTime = newTime + time;
    return millitaryTime;
  }
