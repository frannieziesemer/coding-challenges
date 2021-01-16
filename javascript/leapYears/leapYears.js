// leap years are years divisible by four (like 1984 and 2004). 
//However, years divisible by 100 are not leap years (such as 1800 and 1900) 
// unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). 


const leapYears = function(year) {
   // if it is divisible by 4 and not 100 return true
    if((year % 4 === 0) && !(year % 100 === 0)) {
        return true;
    } //if it is divisible by both 400 and 100 return true
    else if ((year % 400 === 0) && (year % 100 === 0)) {
        return true;
    } 
    else {
        return false;
    }

}
console.log(leapYears(1900));
console.log(leapYears(700));

leapYears(1996); //true
leapYears(1997); //false
leapYears(34992); //true 
module.exports = leapYears
