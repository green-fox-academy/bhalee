// 1, Build up the necessary structure with JavaScript (try to use semantically correct elements)
// 2, Achive the same design by css
// 3, Try not to use css classes
// 4, Add some functionality to the buttons
//     - If "Up" is clicked the selection should move up by one
//     - If "Down" is clicked the selection should move down by one
//     - If "X" is clicked the selected item should be removed and the first item should be selected
//     - If ">" is clicked the selected item should be moved to the right side and the first item on the left side should be selected
// 5, Check all the edge cases, no error should be printed to the console
const ulShopList = document.querySelectorAll('#shoplist');
const ulDoneList = document.querySelectorAll('#doneList');
let list = ['bread', 'milk', 'orage', 'tomato'];
let doneList = [];

function start() {
  for (let i = 0; i < list.length; i++) {
    const liList = document.createElement('li');
    liList.innerText = list[i];
    liList.setAttribute('class', 'li notSelect');
    ulShopList[0].appendChild(liList);
  }
  let li = document.querySelectorAll('li');
  li[select].setAttribute('class', 'li select');
}
let select = 0;
start();

const buttonUp = document.querySelector('#up');
const buttonDown = document.querySelector('#down');
const buttonRight = document.querySelector('#right');
const buttonRemove = document.querySelector('#remove');

buttonDown.onclick = () => {
  li = document.querySelectorAll('li');
  if (select < list.length - 1) {
    select += 1;
    li[select].setAttribute('class', 'li select');
    li[select - 1].setAttribute('class', 'li notSelect');
  }
};

buttonUp.onclick = () => {
  li = document.querySelectorAll('li');
  if (select !== 0) {
    select -= 1;
    li[select].setAttribute('class', 'li select');
    li[select + 1].setAttribute('class', 'li notSelect');
  }
};

buttonRemove.onclick = () => {
  if (select === 0 && list.length > 1) {
    li = document.querySelectorAll('li');
    li[1].setAttribute('class', 'li select');
    li[select].remove();
    list.splice(select, 1);
    select = 0;
  } else if (select !== 0 && list.length > 1) {
    li = document.querySelectorAll('li');
    li[select].remove();
    li[0].setAttribute('class', 'li select');
    list.splice(select, 1);
    select = 0;
  } else if (list.length === 1) {
    li = document.querySelectorAll('li');
    li[select].remove();
    list.splice(select, 1);
    select = 0;
  }
};

buttonRight.onclick = () => {
  if (list.length === 1) {
    li = document.querySelectorAll('li');
    liShop = document.querySelectorAll('.notSelect');
    const listElem = document.querySelector('.select');
    li[select].setAttribute('class', 'li doneList');
    ulDoneList[0].appendChild(listElem);
    select = 0;
    doneList.push(list[select]);
    list.splice(select, 1);
  } else if (list.length > 1) {
    li = document.querySelectorAll('li');
    liShop = document.querySelectorAll('.notSelect');
    const listElem = document.querySelector('.select');
    li[select].setAttribute('class', 'li doneList');
    ulDoneList[0].appendChild(listElem);
    select = 0;
    liShop[select].setAttribute('class', 'li select');
    doneList.push(list[select]);
    list.splice(select, 1);
  }
};
