'use strict';
import { imageList } from './imageList.js';

let counter = 0;
const imageShow = document.querySelector('#image-show');
const theImage = document.createElement('img');
theImage.setAttribute('id', 'theImage');
theImage.setAttribute('src', imageList[0].url);
imageShow.appendChild(theImage);

const imageGalleryMain = document.querySelector('#image-gallery-main');
const imageDescription = document.querySelector('#image-description');
const title = document.createElement('h1');
title.setAttribute('class', 'imageTitle');
title.innerHTML = imageList[0].title;
imageDescription.appendChild(title);

const description = document.createElement('p');
description.setAttribute('class', 'imageDescription');
description.innerHTML = imageList[0].dest;
imageDescription.appendChild(description);

for (let i = 0; i < imageList.length; i++) {
  const icons = document.querySelector('#image-gallery-icons');

  const iconDiv = document.createElement('div');
  iconDiv.setAttribute('class', 'iconDiv');

  const imgIcons = document.createElement('img');
  imgIcons.setAttribute('id', 'theIcons');
  imgIcons.setAttribute('src', imageList[i].url);
  imgIcons.setAttribute('loading', 'lazy');
  const mouseOn = document.createElement('p');
  mouseOn.setAttribute('class', 'notVisible');
  mouseOn.setAttribute('id', 'tooltip');
  mouseOn.innerText = imageList[i].title;
  if (i === 0) {
    imgIcons.setAttribute('class', 'selected');
  } else {
    imgIcons.setAttribute('class', 'notSelected');
  }
  icons.appendChild(iconDiv);
  iconDiv.appendChild(mouseOn);
  iconDiv.appendChild(imgIcons);
}

const theIcons = document.querySelectorAll('#theIcons');
const deleteTitle = document.querySelector('.imageTitle');
const deleteDest = document.querySelector('.imageDescription');
for (let i = 0; i < theIcons.length; i++) {
  theIcons[i].onclick = () => {
    deleteTitle.remove();
    title.innerHTML = imageList[i].title;
    imageDescription.appendChild(title);

    deleteDest.remove();
    description.innerHTML = imageList[i].dest;
    imageDescription.appendChild(description);

    theIcons[i].setAttribute('class', 'selected');
    theIcons[counter].setAttribute('class', 'notSelected');
    const toShow = theIcons[i].getAttribute('src');
    for (let j = 0; j < imageList.length; j++) {
      if (toShow === imageList[i].url) {
        counter = i;
      }
    }
    theImage.setAttribute('src', toShow);
  };
}
function removeText(){
  deleteTitle.remove();
  deleteDest.remove();
}
function buttonsClick(){
  title.innerHTML = imageList[counter].title;
  imageDescription.appendChild(title);

  description.innerHTML = imageList[counter].dest;
  imageDescription.appendChild(description);

  theIcons[counter].setAttribute('class', 'selected');
  theImage.setAttribute('src', imageList[counter].url);
  imageShow.appendChild(theImage);
}

const rightButton = document.querySelector('#right-button');
rightButton.onclick = () => {
  removeText();

  theIcons[counter].setAttribute('class', 'notSelected');

  if (counter === imageList.length - 1) {
    counter = 0;
  } else {
    counter += 1;
  }
  buttonsClick()
};

const leftButton = document.querySelector('#left-button');
leftButton.onclick = () => {
  removeText();
  theIcons[counter].setAttribute('class', 'notSelected');

  if (counter === 0) {
    counter = imageList.length - 1;
  } else {
    counter -= 1;
  }
  buttonsClick()
};

for (let i = 0; i < theIcons.length; i++) {
  const tooltip = document.querySelectorAll('#tooltip');
  theIcons[i].onmouseenter = () => {
    tooltip[i].setAttribute('class', 'visible');
  };
  theIcons[i].onmouseleave = () => {
    tooltip[i].setAttribute('class', 'notVisible');
  };
}

const bigImage = document.createElement('img');
theImage.onclick = () => {
  const selected = document.querySelector('.selected');
  const toBigImage = selected.getAttribute('src');
  bigImage.setAttribute('id', 'bigImage');
  bigImage.setAttribute('src', toBigImage);
  imageGalleryMain.appendChild(bigImage);
};

bigImage.onclick = () => {
  bigImage.remove();
};
