function SumOfPositives(array) {
  //   let result = 0;
  //   for (let index = 0; index < array.length; index++) {
  //     if (array[index] > 0) {
  //       result += array[index];
  //     }
  //   }
  //   console.log("Result = " + result);
    return "Result = "+ array.filter((x) => x>0).reduce((acc,curr) => acc + curr , 0)
  }
  
  console.log(SumOfPositives([1, 2, -3, -4, 5]));
  // SumOfPositives([1, 2, -3, -4, 5])
  
  
  