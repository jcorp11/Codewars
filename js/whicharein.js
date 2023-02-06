const a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

const a1 = ["xyz", "live", "strong"]

const inArray = function(a1, a2){
    let a3 = [...a1].sort()
    const result = []
    a3.forEach(element => {
        if(a2.some(v => v.includes(element))) result.push(element)
    });
    return result
}

console.log(inArray(a1, a2))