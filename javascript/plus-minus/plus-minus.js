function plusMinus(arr) {
    let plus = 0;
    let minus = 0;
    let zero = 0;
    let ratios = [];
  
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
          minus += 1;
        } else if(arr[i] == 0) {
          zero += 1;
        } else {
          plus += 1;
        }    
    }
    minus /= arr.length;
    zero /= arr.length;
    plus /= arr.length;
    
    ratios.push(plus.toFixed(6), minus.toFixed(6), zero.toFixed(6),  );
    ratios.forEach((element) => {return element});
    for(let j = 0; j < ratios.length; j++) {
      console.log(ratios[j]);
    }
    
  
  }