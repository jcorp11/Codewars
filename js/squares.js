function squareDigits(num){
    return +num.toString().split('').reduce((s,i)=>{
        // console.log(s, i)
        let sq = parseInt(i)**2;
        return s + sq
    },'')
}

console.log(squareDigits(81))