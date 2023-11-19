function CountOfPositivesSumOfNegatives(array){
    let count = 0;
    let sum = 0;
    let arrayResult = []
    for (let index = 0; index < array.length; index++) {
        if ( array[index] < 0 ) {
            sum += array[index];
        }else{
            count++;
        }   
    }
    arrayResult.push(sum)
    arrayResult.push(count)
    console.log(arrayResult)

    array.map( (a) =>  )
}

let array = [2,3,4,-9,-5,-2,4]
// console.log(CountOfPositivesSumOfNegatives(array))
CountOfPositivesSumOfNegatives(array)