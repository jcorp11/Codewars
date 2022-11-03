function rgb(r, g, b){
    // complete this function  
    console.log(r,g,b);
    return numTohex(r) + numTohex(g) + numTohex(b);
}
arr = ['0' , '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
function numTohex(num){
    if(num > 255) num = 255;
    if(num < 0) num = 0;
    return arr[Math.floor(num/16)] + arr[num%16]
}