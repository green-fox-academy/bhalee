// On the click of the button,
// Count the items in the list
// And display the result in the result element.

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const ul = document.querySelector('ul');
  const result = document.querySelector('.result');
  result.innerHTML = `${ul.childElementCount} items in the list`;
});