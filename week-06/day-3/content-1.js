// 1)  Append every paragraph with the last one's content.
// 2)  Do the same again, but you should keep the cat strong.
const pTag = document.querySelectorAll('p');

pTag.forEach((element) => {
  console.log(element.innerText);
});
console.log('---------------');
pTag.forEach((element) => {
  console.log(element.innerHTML);
});