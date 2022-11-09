// class Waiter {
//   async wait() {
//     return (1);
//   }
// }

// new Waiter()
//   .wait()
//   .then(console.log); // 1 (this is the same as (result => alert(result)))

async function loadJson(url) {
    let res = await fetch(url)
    if(res.status == 200){
      let json = await res.json();
      return  json
    }
    throw new Error(res.status)    
}

loadJson('https://javascript.info/no-such-user.json')
  .catch(alert); // Error: 404