const getSumAsync = (num1, num2, callback) => {
    // console.log(args)
    if (!num1 || !num2) {
      return callback(new Error("Missing arguments"), null);
    }
    return callback(null, num1 + num2);
}
// getSumAsync(1, 1, (err, result) => {
//     if (err){
//         doSomethingWithError(err)
//     }else {
//         console.log(result) // 2
//     }
// });

const myPromisify = (fn) => {
    return (...args) =>{
        // console.log(...args)
        return new Promise((resolve, reject) => {
            
            function customCallback(err, result) { // define una nueva funcion callback un reject o result
                if (err) {
                  reject(err)
                }else {
                  resolve(result);
                }
            }
            args.push(customCallback)
            // console.log(args)
            fn.call(this, ...args)
        })
    }
}
// const myPromisify = (fn) => {
//     return (...args) => {
//       return new Promise((resolve, reject) => {
//         function customCallback(err, ...results) {
//           if (err) {
//             return reject(err)
//           }
//           return resolve(results.length === 1 ? results[0] : results) 
//          }
//          args.push(customCallback)
//          fn.call(this, ...args)
//        })
//     }
//  }

const getSumPromise = myPromisify(getSumAsync)
getSumPromise(2,1)