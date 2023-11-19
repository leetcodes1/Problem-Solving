function CountingSheep(array){
    let count = 0;
    // for (let index = 0; index < array.length; index++) {
    //     if (array[index] == true) {
    //         count++;
    //     }
        
    // }
    // console.log(count)

    array.map((x)=>{
        if(x==true) count++
    })
    return count;
}
let arr = [true,false,true,true]
// CountingSheep(arr)
console.log(CountingSheep(arr))