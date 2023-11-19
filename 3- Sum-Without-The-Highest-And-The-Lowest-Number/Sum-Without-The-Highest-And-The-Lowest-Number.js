function SumWithoutHighestAndLowest(array) {
  // let sum = 0;
  // let arraySort = array.sort((a, b) => a - b);
  // arraySort.pop();
  // arraySort.shift();
  // console.log(arraySort);
  // for (let index = 0; index < arraySort.length; index++) {
  //   sum += arraySort[index];
  // }
  // console.log("Sum = " + sum);

  return array.filter((x) => x !== Math.max(...array) && x !== Math.min(...array))
  .reduce((acc,acurr) => acc + acurr , 0)
  /*  في هذا الكود العنصر الأول والثاني لانهم الأصغر في المصفوفة يتم إزالتهم ياستخدام الدالة فلتر 
   */
}

let array = [1, 1, 11, 2, 3];
// SumWithoutHighestAndLowest(array)
console.log(SumWithoutHighestAndLowest(array));

