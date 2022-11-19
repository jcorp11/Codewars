function validParentheses(parens) {
    if (parens.length%2 === 1) return false;
    let sum = parens.split('').reduce((s,v,i,arr) => {
        if ( v === '(' ){
            s.open++
        }
        else {
            if(s.open > 0){
                s.open--
            }
            else{
                s.open--
                arr.splice(i)
            }
        }
            
        console.log(s)
        return s
    }, {open: 0}) ;

    // console.log(sum)
    return sum.open == 0 ? true : false;
}

const str = '()()';
console.log(validParentheses(str));