'use strict';

let counter = 0;
let body = document.querySelector('body');
body.addEventListener('submit', (event) => {
  event.preventDefault();
  append();
});
function append() {
  let className = `joke${counter}`
  let div = document.createElement('div');
  div.setAttribute('class', className)
  div.setAttribute('id', 'jokes')
  let forText = document.querySelector('.for-text');
  let loading = document.createElement('img');
  loading.setAttribute(
    'src',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/24a5439f-42c4-4cc0-ac08-6b064dd4eac5/diqxlb-a7c04866-2048-438c-b8cd-d63b39f3f108.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjRhNTQzOWYtNDJjNC00Y2MwLWFjMDgtNmIwNjRkZDRlYWM1XC9kaXF4bGItYTdjMDQ4NjYtMjA0OC00MzhjLWI4Y2QtZDYzYjM5ZjNmMTA4LmdpZiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl19.5UwoGzClaKXfC9KlJGPmGq5n8zr74XQ0JdRrgaYcBvQ'
  );
  loading.setAttribute('width', '50px');
  div.appendChild(loading)
  forText.appendChild(div);

  fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then((response) => {
      return response.value;
    })
    .then((response) => {
      let p = document.createElement('p');
      p.innerHTML = response;
      let img = document.querySelector(`.${className}`);
      img.insertBefore(p, img.childNodes[0]);
      let x = document.createElement('STYLE');
      let t = document.createTextNode(`@keyframes example2 {
      0%   {left:-450px; top:0px;}
      25%  {left:-350px; top:0px;}
      50%  {left:-250px; top:0px;}
      75%  {left:-150px; top:0px;}
      100% {left:0px; top:0px;}
    }`);
      x.appendChild(t);
      document.head.appendChild(x);
      counter+=1;
    })
    .then(
      setTimeout(() => {
        loading.style.display = 'none';
      }, 6000)
    )
    .catch((error) => {
      console.log(error.message);
    });
}
