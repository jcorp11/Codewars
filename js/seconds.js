function formatDuration (seconds) {
    if(seconds === 0) return 'now'
    
    const keys = [ 
                ['year', 365*24*60*60],
                ['day', 24*60*60],
                ['hour', 60*60],
                ['minute', 60],
                ['second', 1],
             ]
    const arr =[]

    for( i of keys){
        const ammount = Math.floor(seconds/i[1]);
        seconds-= ammount*i[1];
        const str = ammount > 1 ? i[0]+'s' : i[0];
        if(ammount > 0) arr.push([str, ammount])
    }

    const result = arr.reduce((s,v,i, array)=>{
        let str = `${v[1]} ${v[0]}`
        let conector =
                 i === array.length - 1 ? ''  :
                 i === array.length - 2 ? ' and ' : ', '
        return s + str + conector ;
    }, '')
    
    return result;
}

const sec = 3662;
console.log(formatDuration(sec))