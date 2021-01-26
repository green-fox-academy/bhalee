let iFired = new Promise((resolve, reject) =>{
    resolve('I FIRED')
    
    reject(new Error ('I DID NOT FIRE'))
    
})
iFired.then(response => {console.log(response);},error => {
  console.log(error);
})