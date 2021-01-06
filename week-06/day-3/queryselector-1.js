// 1. store the element that says 'The King' in the 'king' variable.
// console.log it.
// 2. store 'The Businessman' and 'The Lamplighter'
// in the 'businessLamp' variable.
// console.log each of them.
// 3. store 'The King' and 'The Conceited Man'
// in the 'conceitedKing' variable.
// alert them one by one.
// 4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
// in the 'noBusiness' variable.
// console.log each of them.

const king = document.getElementById('b325');
console.log(king);
const businessLamp = document.getElementsByClassName('big');
console.log(businessLamp[1].innerHTML);
const conceitedKing = document.querySelectorAll('.container');
// alert(conceitedKing[0].children[0].innerHTML);
// alert(conceitedKing[0].children[1].innerHTML);
let noBusiness = document.querySelectorAll('.b329, .b326, #b325');
noBusiness.forEach((element) => {
  console.log(element.innerHTML);
});
