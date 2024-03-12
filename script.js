const checkApprox = (num1, num2, epsilon) => { 
      
    // Calculating the absolute difference 
    // and compare with epsilon 
    return Math.abs(num1 - num2) < epsilon; 
  } 
    
  console.log(checkApprox(10.003, 10.001, 0.005)); 