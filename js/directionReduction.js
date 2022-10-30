// function dirReduc(arr){
//     const direction = {
//         hor: 0,
//         vert: 0,
//     }
//     arr.forEach(v=>{
//         switch(v){
//             case 'NORTH': 
//                 direction.vert++ 
//                 break;
//             case 'SOUTH': 
//                 direction.vert--
//                 break;
//             case 'WEST': 
//                 direction.hor--
//                 break;
//             case 'EAST': 
//                 direction.hor++
//                 break;
//         }
//     });
//     // console.log(direction)
//     const horStr = direction.hor > 0 ? 'EAST' : 'WEST';
//     const vertStr = direction.vert > 0 ? 'NORTH' : 'SOUTH';
//     const arrHort = Array.from({length: Math.abs(direction.hor)},v => horStr);
//     const arrVert = Array.from({length: Math.abs(direction.vert)},v => vertStr);
//     return arrVert.concat(arrHort);
// }

// // const a = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST", "NORTH"];
// const a = ["NORTH", "SOUTH"]
// console.log(dirReduc(a))
function dirReduc(arr){
    let arr2 = arr.slice(0);
    for(i = 0 ; i < arr.length - 1; i++){
        const vert1 =  arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH'
        const vert2 =  arr[i] === 'SOUTH' && arr[i + 1] === 'NORTH'
        const hor1 =  arr[i] === 'WEST' && arr[i + 1] === 'EAST'
        const hor2 =  arr[i] === 'EAST' && arr[i + 1] === 'WEST'
        if( vert1 || vert2 || hor1 || hor2){
            arr2 = arr.slice(0, i).concat(arr.slice(i+2))
            break;
        }
    }
    return arr.length > arr2.length ? dirReduc(arr2) : arr;
}

// const a = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
const a = ["NORTH","SOUTH","EAST","WEST","EAST","WEST"]
console.log(dirReduc(a))