const body = document.querySelector('body');
const dog = document.querySelector('#dog');

body.addEventListener('change', (event) => {
  const signUp = document.querySelector('#sign-up');
  if (event.target.id === 'dog' || event.target.id === 'cat') {
    signUp.disabled = false;
  } else if (event.target.name === 'favourite-pet') {
    signUp.disabled = true;
  }

  const loveCats = document.querySelector('#love-cats');
  if (event.target.id === 'yes') {
    loveCats.disabled = false;
  } else if (event.target.name === 'sign-up') {
    loveCats.disabled = true;
  }

  const fish = document.querySelector('#fish').checked;
  const no = document.querySelector('#no').checked;
  console.log(fish.checked);
  if (fish && no) {
    signUp.disabled = false;
  } else if (fish && !no) {
    signUp.disabled = true;
  }
});

body.addEventListener('submit', (event) => {
  event.preventDefault();
  const buttonValue = event.submitter.attributes.id.value;

  if (buttonValue === 'sign-up') {
    const fish = document.querySelector('#fish').checked;
    const no = document.querySelector('#no').checked;
    if (fish && no) {
      alert(`Sigh, we still added you to the cat facts list`);
      window.open('https://www.youtube.com/watch?v=wW350_zku00&ab_channel=495Alex');
    } else {
      alert(`Thank you, you've successfully signed up for cat facts`);
      window.open('https://www.youtube.com/watch?v=mcUza_wWCfA&ab_channel=TheCureVEVO');
    }
  } else {
    alert(`Thank you, you've successfully signed up for cat facts`);
    window.open('https://www.youtube.com/watch?v=mcUza_wWCfA&ab_channel=TheCureVEVO');
  }
});
