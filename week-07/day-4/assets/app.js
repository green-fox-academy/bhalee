'use strict';
let all;

const xhrList = new XMLHttpRequest();
xhrList.onload = () => {
  all = JSON.parse(xhrList.response);
  console.log(all);
};
xhrList.open('GET', '/api/all', true);
xhrList.send();

const xhr2 = new XMLHttpRequest();
xhr2.onload = () => {
  for (let i = 0; i < all.length; i++) {
    let all = JSON.parse(xhrList.response);
    let tr = document.createElement('tr');
    let thBook = document.createElement('th');
    let thePrice = document.createElement('th');
    let theAuthor = document.createElement('th');
    let theCategory = document.createElement('th');
    let thePublisher = document.createElement('th');
    thBook.innerHTML = all[i].book_name;
    theAuthor.innerHTML = all[i].aut_name;
    thePrice.innerHTML = all[i].book_price;
    theCategory.innerHTML = all[i].cate_descrip;
    thePublisher.innerHTML = all[i].pub_name;

    tr.appendChild(thBook);
    tr.appendChild(theAuthor);
    tr.appendChild(thePrice);
    tr.appendChild(theCategory);
    tr.appendChild(thePublisher);

    let body = document.querySelector('table');
    body.appendChild(tr);
  }
};
xhr2.open('GET', '/api/all', true);
xhr2.send();
