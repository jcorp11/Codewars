

function generateHashtag (str) {
    if(str.length === 0) return false
    
    const arr = str.trim().split(' ').map(v=>v.slice(0,1).toUpperCase()+v.slice(1).toLowerCase()).join('');
    
    if (arr.length >= 140) return false
    if (arr.length === 0) return false

    return '#'+arr
    

}

const s = "a".repeat(140)

console.log(generateHashtag(s))