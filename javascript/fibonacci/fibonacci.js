const fibonacci = function(nthNumber) {
    let a = 0;
    let b = 1;
    let fibNumber = 1;
    // calculate the fibonacci numbers using for loop
    // each loop add the previous sum 1 + 1 = 2 . 2+1=3. 3+2=5
    if(nthNumber < 0) {
        return 'OOPS';
    } else {
        for(i = 1; i < nthNumber; i++) {
            fibNumber = a + b;
            a = b;
            b = fibNumber;
         } 
    }
    return fibNumber;
}
module.exports = fibonacci
