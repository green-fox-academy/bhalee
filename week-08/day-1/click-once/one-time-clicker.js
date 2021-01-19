// Create an event listener which logs the current timestamp to the console once the button is clicked.
// When the button is clicked for the second or any other times no event listener should be called.
// Try to solve this two different ways.
// hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button


//first way
// const button = document.querySelector('button');
// button.addEventListener('click', ()=>{
//   let timestamp = new Date().getTime();
//   console.log(timestamp);
// })

//second way
const body = document.querySelector('body');
body.addEventListener('click', (event) => {
  if (event.target.innerHTML === 'Click me') {
    let timestamp = new Date().getTime();
    console.log(timestamp);
  }
});
