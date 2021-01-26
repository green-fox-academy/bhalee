'use strict';

let rejected = new Promise((resolve, reject) => {
  setTimeout(() => {
   reject(new Error ('REJECTED!'))},300)
   
})
rejected
.then(function (err){
  console.log(err);
},err => {
  console.log(err.message);
})