const removeFromArray = function(...args) {
    // pull out original array 
    const array = args[0];
    //create empty array
    const newArray = [];
    array.forEach(item => {
        //if the array value (item) is not also in the arguments then push
        // to a new array and return that array
        if(!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
}

module.exports = removeFromArray
