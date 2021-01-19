let findTheOldest = function(array) {
    const today = new Date();
    const thisYear = today.getFullYear();
    //sort the array items 
    //sort the ages 
    array.sort((a, b) => {
        if((a.yearOfDeath === undefined) || (b.yearOfDeath === undefined)) {
            return (thisYear - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth); 
        }
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth); 

    } );
    return array[0];
    //add the age to array to find the index of 
    // return the object of oldest person
}

module.exports = findTheOldest
