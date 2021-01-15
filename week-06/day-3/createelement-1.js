// Add an item that says 'The Green Fox' to the asteroid list.
// Add an item that says 'The Lamplighter' to the asteroid list.
// Add a heading saying 'I can add elements to the DOM!' to the .container.
// Add an image, any image, to the container.

const ul = document.querySelector('ul');
const greenFox = document.createElement('li');
greenFox.innerHTML = 'The Green Fox';
ul.appendChild(greenFox);

const lampLighter = document.createElement('li');
lampLighter.innerText = 'The Lamplighter';
ul.prepend(lampLighter);

const container = document.querySelector('.container');
container.innerHTML = '<h1>I can add elements to the DOM!</h1>';

const image = document.createElement('img');
image.setAttribute('src', 'https://marmelab.com/images/blog/ascii-art-converter/homer.png');
container.appendChild(image);
