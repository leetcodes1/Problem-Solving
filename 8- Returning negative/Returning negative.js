function ReturningNegative(array){
    for (let index = 0; index < array.length; index++) {
        if (array[index] == 'marwa') {
            return index
        }
    }
    // return array.indexOf("marwa")
}

let array = ['alaa','ibrahim','marwa']
console.log(ReturningNegative(array))