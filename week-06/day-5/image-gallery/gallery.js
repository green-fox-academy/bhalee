'use strict';
let imageList = ['/img/random1.jpg', '/img/random2.jpg', '/img/random3.jpg', '/img/random4.jpg', '/img/random5.jpg', '/img/random6.jpg', '/img/random7.jpg', '/img/random8.jpg'];
let imageTitle = ['The field', 'Sunset', 'The lake', 'Dream river', 'Montains', 'Snow white', 'Sloth life', 'Welcome to Africa'];
let imageDest = [
  `Field ipsum, dolor sit amet consectetur adipisicing elit. Voluptate modi deleniti iste laboriosam quasi dolores magnam ipsum eligendi obcaecati blanditiis repellendus id saepe tempore, asperiores eaque maxime exercitationem ducimus nisi.`,
  `Sunset ipsum, dolor sit amet consectetur adipisicing elit. Voluptate modi deleniti iste laboriosam quasi dolores magnam ipsum eligendi obcaecati blanditiis repellendus id saepe tempore, asperiores eaque maxime exercitationem ducimus nisi.`,
  `Lake ipsum, dolor sit amet consectetur adipisicing elit. Voluptate modi deleniti iste laboriosam quasi dolores magnam ipsum eligendi obcaecati blanditiis repellendus id saepe tempore, asperiores eaque maxime exercitationem ducimus nisi.`,
  `River ipsum, dolor sit amet consectetur adipisicing elit. Voluptate modi deleniti iste laboriosam quasi dolores magnam ipsum eligendi obcaecati blanditiis repellendus id saepe tempore, asperiores eaque maxime exercitationem ducimus nisi.`,
  `Montain ipsum, dolor sit amet consectetur adipisicing elit. Voluptate modi deleniti iste laboriosam quasi dolores magnam ipsum eligendi obcaecati blanditiis repellendus id saepe tempore, asperiores eaque maxime exercitationem ducimus nisi.`,
  `Snow ipsum, dolor sit amet consectetur adipisicing elit. Voluptate modi deleniti iste laboriosam quasi dolores magnam ipsum eligendi obcaecati blanditiis repellendus id saepe tempore, asperiores eaque maxime exercitationem ducimus nisi.`,
  `Sloth ipsum, dolor sit amet consectetur adipisicing elit. Voluptate modi deleniti iste laboriosam quasi dolores magnam ipsum eligendi obcaecati blanditiis repellendus id saepe tempore, asperiores eaque maxime exercitationem ducimus nisi.`,
  `Africa ipsum, dolor sit amet consectetur adipisicing elit. Voluptate modi deleniti iste laboriosam quasi dolores magnam ipsum eligendi obcaecati blanditiis repellendus id saepe tempore, asperiores eaque maxime exercitationem ducimus nisi.`,
];
let counter = 0;

const imageShow = document.querySelector('#image-show');
const theImage = document.createElement('img');
theImage.setAttribute('id', 'theImage');
theImage.setAttribute('src', imageList[0]);
imageShow.appendChild(theImage);

const imageDescription = document.querySelector('#image-description');
const title = document.createElement('h1');
title.setAttribute('class', 'imageTitle');
title.innerHTML = imageTitle[0];
imageDescription.appendChild(title);

const description = document.createElement('p');
description.setAttribute('class', 'imageDescription');
description.innerHTML = imageDest[0];
imageDescription.appendChild(description);

for (let i = 0; i < imageList.length; i++) {
  const icons = document.querySelector('#image-gallery-icons');
  const theIcons = document.createElement('img');
  theIcons.setAttribute('id', 'theIcons');
  theIcons.setAttribute('src', imageList[i]);
  if (i === 0) {
    theIcons.setAttribute('class', 'selected');
  } else {
    theIcons.setAttribute('class', 'notSelected');
  }

  icons.appendChild(theIcons);
}

const theIcons = document.querySelectorAll('#theIcons');

for (let i = 0; i < theIcons.length; i++) {
  theIcons[i].onclick = () => {
    const deleteTitle = document.querySelector('.imageTitle');
    deleteTitle.remove();
    const imageDescription = document.querySelector('#image-description');
    const title = document.createElement('h1');
    title.setAttribute('class', 'imageTitle');
    title.innerHTML = imageTitle[i];
    imageDescription.appendChild(title);

    const deleteDest = document.querySelector('.imageDescription');
    deleteDest.remove();
    const description = document.createElement('p');
    description.setAttribute('class', 'imageDescription');
    description.innerHTML = imageDest[i];
    imageDescription.appendChild(description);

    theIcons[i].setAttribute('class', 'selected');
    theIcons[counter].setAttribute('class', 'notSelected');
    const toShow = theIcons[i].getAttribute('src');
    for (let j = 0; j < imageList.length; j++) {
      if (toShow === imageList[i]) {
        counter = i;
      }
    }
    theImage.setAttribute('src', toShow);
  };
}

const leftButton = document.querySelector('#left-button');
const rightButton = document.querySelector('#right-button');

rightButton.onclick = () => {
  const deleteTitle = document.querySelector('.imageTitle');
  deleteTitle.remove();

  const deleteDest = document.querySelector('.imageDescription');
  deleteDest.remove();

  theIcons[counter].setAttribute('class', 'notSelected');
  
  if (counter === imageList.length - 1) {
    counter = 0;
  } else {
    counter += 1;
  }

  const imageDescription = document.querySelector('#image-description');
  const title = document.createElement('h1');
  title.setAttribute('class', 'imageTitle');
  title.innerHTML = imageTitle[counter];
  imageDescription.appendChild(title);

  const description = document.createElement('p');
  description.setAttribute('class', 'imageDescription');
  description.innerHTML = imageDest[counter];
  imageDescription.appendChild(description);

  theIcons[counter].setAttribute('class', 'selected');
  theImage.setAttribute('src', imageList[counter]);
  imageShow.appendChild(theImage);
};

leftButton.onclick = () => {
  const deleteTitle = document.querySelector('.imageTitle');
  deleteTitle.remove();

  const deleteDest = document.querySelector('.imageDescription');
  deleteDest.remove();

  theIcons[counter].setAttribute('class', 'notSelected');

  if (counter === 0) {
    counter = imageList.length - 1;
  } else {
    counter -= 1;
  }

  const imageDescription = document.querySelector('#image-description');
  const title = document.createElement('h1');
  title.setAttribute('class', 'imageTitle');
  title.innerHTML = imageTitle[counter];
  imageDescription.appendChild(title);

  const description = document.createElement('p');
  description.setAttribute('class', 'imageDescription');
  description.innerHTML = imageDest[counter];
  imageDescription.appendChild(description);

  theIcons[counter].setAttribute('class', 'selected');

  theImage.setAttribute('src', imageList[counter]);
  imageShow.appendChild(theImage);
};