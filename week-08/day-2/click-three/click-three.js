// Create a simple HTML document with one button.
// If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded, a text should appear under the button:
// 5 seconds elapsed and clicked 3 times
// If the user starts clicking before the first 5 seconds, nothing should be printed

const button = document.querySelector('button');

setTimeout(() => {
  console.log('you can click now');
  let counter = 0;
  button.addEventListener('click', (event) => {
    counter += 1;
    if (counter > 2) {
      const body = document.querySelector('body');
      const text = document.createElement('p');
      text.innerHTML = '5 seconds elapsed and clicked 3 times';
      body.appendChild(text);
    }
  });
}, 5000);
