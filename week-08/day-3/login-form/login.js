'use strict'
const form = document.querySelector('form');

form.addEventListener('focus',(event) => {
  const classAtt = event.target.getAttribute('class')
  if(classAtt === 'input'){
    event.target.style.border = '1px solid green';
    event.target.style.outline = 'none'
  }
},true)

form.addEventListener('blur',(event) => {
  const classAtt = event.target.getAttribute('class')
  if(classAtt === 'input'){
    event.target.style.border = 'solid 1px lightgrey';
  }
},true)

form.addEventListener('click',(event) => {
  const classAtt = event.target.getAttribute('id')
  const passwordInput = document.querySelector('#password')
  if(classAtt === 'show-password' && passwordInput.type === 'password'){
    passwordInput.setAttribute('type', 'text')
  }else if(classAtt === 'show-password' && passwordInput.type === 'text'){
    passwordInput.setAttribute('type', 'password')
  }
},true)

form.addEventListener('submit',(event) => {
  event.preventDefault()
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  if (username && password){
    window.open('https://media.makeameme.org/created/if-you-logged.jpg');
    form.reset()
  }
},true)