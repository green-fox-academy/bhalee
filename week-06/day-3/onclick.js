// Turn the party on and off by clicking the button. (the whole page)
const button = document.querySelector('button');

button.onclick = () => {
  const body = document.querySelector('body');
  
  if (body.classList[0] !== 'party') {
    body.setAttribute('class', 'party');
  } else {
    // body.setAttribute('class', '');
  body.removeAttribute('class');
  }
};
