function incrementString (strng) {
let [strResult, numStrResult] = getsubstring(strng)
    if(numStrResult == '') numStrResult = 0;
    let num = String(parseInt(numStrResult) + 1 );
    if( num.length < numStrResult.length) num = num.padStart( numStrResult.length, '0')

    return strResult + num
}

const str = '1';

function getsubstring(str){
    let arr = str.split('');
    let index = 0;
    for( i = arr.length - 1 ; i >= 0 ; i--){

        if( isNaN(arr[i]) ){
            index = i + 1;
            break;
        } 
    }
    return [ str.substring(0 , index), str.substring(index) ]    
}
console.log(getsubstring(str))

console.log(incrementString(str));