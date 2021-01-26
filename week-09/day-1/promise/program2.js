'use strict';

let fulfilled = new Promise((resolve, reject) => {
    setTimeout(() => {
     resolve('FULFILLED!')},300)
  
  })
fulfilled.then(response => {console.log(response);})