
// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    
    const m = apples.length 
    const n = oranges.length
    let fruitsOnHouse = [];
   
    let applesOnHouse = 0;
    //loop through the apples 
    for(let i = 0; i < m; i++) {
        let distance = apples[i] + a;
        if(distance >= s && distance <= t) {
          applesOnHouse++;
        }
    }
    let orangesOnHouse = 0;
    for(let j = 0; j < n; j++) {
        let distance = oranges[j] + b;
        if(distance >= s && distance <= t) {
          orangesOnHouse++;
        }
    }
    
    fruitsOnHouse.push(applesOnHouse);
    fruitsOnHouse.push(orangesOnHouse);
    
    fruitsOnHouse.forEach(element => console.log(element));
    
    
    }
    
    countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);