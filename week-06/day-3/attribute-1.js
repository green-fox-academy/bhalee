// Write the image's url to the console.
// Replace the image with a picture of your favorite animal.
// Make the link point to the Green Fox Academy website.
// Disable the second button.
// Replace its text with 'Don't click me!'.

const imageUrl = document.querySelector('img')
console.log(imageUrl.src);
imageUrl.setAttribute('src', 'https://ichef.bbci.co.uk/news/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg');
const link = document.querySelector('a')
link.setAttribute('href', 'https://www.greenfoxacademy.com/')
const button = document.querySelector('.this-one')
button.remove()
const button2 = document.querySelector('button')
button2.innerHTML = `Don't click me!`
