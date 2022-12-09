function smaller(arr) {
    const result  = []
    for( let i = 0 ; i < arr.length ; i++){
         let count = 0;
         const arrAux = arr.slice(i);
         arrAux.forEach(val => {
            if(val < arr[i]) count++
         });
         result.push(count);
    }
    return result
}



const arr = [5, 4, 3, 2, 1];
console.log(smaller(arr));