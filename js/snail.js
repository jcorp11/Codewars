
const directionMap = {
    right: 'down',
    down: 'left',
    left: 'up',
    up: 'right'
}

function advance( i , j , direction){
    switch(direction){
        case 'right': return [i, ++j]
        case 'down': return [++i, j]
        case 'left': return [i, --j]
        case 'up': return [--i, j]
    }
}

function wallStop( i , j , arr){
    const booli = i >= arr.length || i < 0
    const boolj = j >= arr.length || j < 0
    return booli || boolj;
}

function includesElements(arr,el){
    for( const i of arr){
        if( i[0] === el[0] && i[1] === el[1]) return true
    }
    return false
}

const snail = function(arr) {
    if(arr[0].length == 0) return []
    const visited = [];
    result = [];
    const len = arr[0].length ** 2;
    let [i , j, direction] = [0 , 0, 'right'];


    while( visited.length < len){
        visited.push([i, j]);
        result.push(arr[i][j])
        if(includesElements(visited,advance(i, j,direction)) || wallStop(...advance(i , j, direction), arr) ){
            direction = directionMap[direction];
        }        
        [i, j] = advance(i ,j, direction);
    }

    return result
}

let arr = [
                [1,2,3],
                [4,5,6],
                [7,8,9]
            ];

// arr = [[]];
console.log(arr[0].length)
console.log(arr[0][0])
console.log(snail(arr))
// arr2 = [[0,0]];
// console.log(arr2.includesElements([0,0]))