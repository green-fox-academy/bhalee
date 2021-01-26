'use strict'
// function timer(callback){
// setTimeout( ()=>{
// callback()
// },3000)
// }

// function log(){
//   console.log('TIMED OUT!');
// }

// timer(log)

function promiseWith() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      setTimeout (()=> resolve('TIMED OUT!'),300)
    })
  })
}

promiseWith()
.then(response => { console.log(response);})
.catch(function (err){
  console.log(err);
})