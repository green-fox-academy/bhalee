const button = document.querySelector('button');
button.addEventListener('click', () => {
  setTimeout(() => {
    const div = document.querySelector('#delay-button');
    const text = document.createElement('p');
    text.innerHTML = '2 seconds ellapsed';
    div.appendChild(text);
  }, 2000);
});

