function financial(x) {
    return Number.parseFloat(x).toFixed(3);
  }
  
  console.log(financial(123.456));
 
  
  console.log(financial(0.004));
   
  console.log(financial('1.23e+5'));
