function pigIt(str){
    arr  = str.split(' ');
    arr = arr.map(v => {
        if( /\W/.test(v)) return v
        let result = v.slice(1) + v.slice(0,1) + 'ay'
        return result
    })
    return arr.join(' ');
}

const str = 'Hello world !'
console.log(pigIt(str))