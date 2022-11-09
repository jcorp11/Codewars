// fetch('https://javascript.info/promise-chaining/article/promise-chaining/user.json')
//   // .then below runs when the remote server responds
//   .then(async function(response) {
//     // response.text() returns a new promise that resolves with the full response text
//     // when it loads
//     console.log( await response.text() );
//   })
user = {
  name:  'mac-kenzie-lee'
}

fetch(`https://api.github.com/users/${user.name}`)
  .then(response => {
    // console.log(response)
    return response.json()
  })
  .then(githubUser => {
    console.log(githubUser)
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
    // setTimeout(() => img.remove() , 5000)

    // return githubUser    
    return new Promise( (resolve, reject) => { // lo que quiero hacer es entregar el valor despues de que termine el timeout
      setTimeout(() => {
        img.remove();
        resolve(githubUser); // (**)
      }, 1000)
    })
  })
  // triggers after 3 seconds
  .then(githubUser => alert(`Finished showing ${githubUser.name}`));