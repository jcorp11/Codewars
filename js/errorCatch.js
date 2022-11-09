new Promise((resolve, reject) => {

    throw new Error("Whoops!");
  
  }).catch(function(error) {
  
    alert("The error is handled, continue normally");
    throw new Error('10');
  }).then((value) => alert("Next successful handler runs "+ value));