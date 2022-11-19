function comp(arr1, arr2){
    if(!arr1 || !arr2) return false
    if(arr1.length !== arr2.length) return false
    let bool2 = true
    arr1.forEach(el1 => {

        let squared = el1*el1;
        let bool = false;

        for( i = 0 ; i < arr2.length ; i++){
            if(squared === arr2[i]){
                arr2.splice(i,1);
                bool = true;

                break;
            }

        }
        
        if(!bool){
            

            bool2 = false
        }    
        

    });


    return bool2

}

const [ a, b] = [[1, 2],[1, 4]];
console.log(comp(a,b))