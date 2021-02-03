
function compareTriplets(a, b) {
    let alice = a;
    let bob = b;
    let comparisonPoints = [0,0];
    //loop through the array and compare each item for points
    //this assumes bob array length will always be equal to alice array length
    for(let i = 0; i < a.length; i++) {
        if(alice[i] > bob[i]) {
            comparisonPoints[0] += 1; 
        } else if (alice[i] < bob[i]) {
            comparisonPoints[1] += 1;
        } 
    }
    return comparisonPoints;
}
compareTriplets([1,2,3], [3,2,1]);