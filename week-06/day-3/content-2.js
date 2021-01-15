// 1) replace the list items' content with items from this list:
// ['apple', 'banana', 'cat', 'dog']
// 2) change the <ul> element's background color to 'limegreen'
//   - use css class to change the color instead of the style property

const liTag = document.querySelectorAll('li');
const list = ['apple', 'banana', 'cat', 'dog'];

for (let i = 0; i < liTag.length; i++) {
  liTag[i].innerText = list[i];
}
const ulTag = document.querySelector('ul');
ulTag.style.backgroundColor = 'limegreen';
