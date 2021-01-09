'use strict';
let imageList = [
  {
    url: '/img/random1.jpg',
    title: 'The field',
    dest: `Field ipsum, dolor sit amet consectetur adipisicing elit. Voluptate modi deleniti iste laboriosam quasi dolores magnam ipsum eligendi obcaecati blanditiis repellendus id saepe tempore, asperiores eaque maxime exercitationem ducimus nisi.`,
  },
  {
    url: '/img/random2.jpg',
    title: 'Sunset',
    dest: `Sunset ipsum, dolor sit amet consectetur adipisicing elit. Voluptate modi deleniti iste laboriosam quasi dolores magnam ipsum eligendi obcaecati blanditiis repellendus id saepe tempore, asperiores eaque maxime exercitationem ducimus nisi.`,
  },
  {
    url: '/img/random3.jpg',
    title: 'The lake',
    dest: `Lake ipsum, dolor sit amet consectetur adipisicing elit. Voluptate modi deleniti iste laboriosam quasi dolores magnam ipsum eligendi obcaecati blanditiis repellendus id saepe tempore, asperiores eaque maxime exercitationem ducimus nisi.`,
  },
  {
    url: '/img/random4.jpg',
    title: 'Dream river',
    dest: `River ipsum, dolor sit amet consectetur adipisicing elit. Voluptate modi deleniti iste laboriosam quasi dolores magnam ipsum eligendi obcaecati blanditiis repellendus id saepe tempore, asperiores eaque maxime exercitationem ducimus nisi.`,
  },
  {
    url: '/img/random5.jpg',
    title: 'Montains',
    dest: `Montain ipsum, dolor sit amet consectetur adipisicing elit. Voluptate modi deleniti iste laboriosam quasi dolores magnam ipsum eligendi obcaecati blanditiis repellendus id saepe tempore, asperiores eaque maxime exercitationem ducimus nisi.`,
  },
  {
    url: '/img/random6.jpg',
    title: 'Snow white',
    dest: `Snow ipsum, dolor sit amet consectetur adipisicing elit. Voluptate modi deleniti iste laboriosam quasi dolores magnam ipsum eligendi obcaecati blanditiis repellendus id saepe tempore, asperiores eaque maxime exercitationem ducimus nisi.`,
  },
  {
    url: '/img/random7.jpg',
    title: 'Sloth life',
    dest: `Sloth ipsum, dolor sit amet consectetur adipisicing elit. Voluptate modi deleniti iste laboriosam quasi dolores magnam ipsum eligendi obcaecati blanditiis repellendus id saepe tempore, asperiores eaque maxime exercitationem ducimus nisi.`,
  },
  {
    url: '/img/random8.jpg',
    title: 'Welcome to Africa',
    dest: `Africa ipsum, dolor sit amet consectetur adipisicing elit. Voluptate modi deleniti iste laboriosam quasi dolores magnam ipsum eligendi obcaecati blanditiis repellendus id saepe tempore, asperiores eaque maxime exercitationem ducimus nisi.`,
  },
]

let counter = 0;
const imageShow = document.querySelector('#image-show');
const theImage = document.createElement('img');
theImage.setAttribute('id', 'theImage');
theImage.setAttribute('src', imageList[0].url);
imageShow.appendChild(theImage);

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
  if (i === 0) {
    imgIcons.setAttribute('class', 'selected');
  } else {
    imgIcons.setAttribute('class', 'notSelected');
  }
  icons.appendChild(iconDiv);
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

const rightButton = document.querySelector('#right-button');
rightButton.onclick = () => {
  deleteTitle.remove();
  deleteDest.remove();

  theIcons[counter].setAttribute('class', 'notSelected');
  
  if (counter === imageList.length - 1) {
    counter = 0;
  } else {
    counter += 1;
  }

  title.innerHTML = imageList[counter].title;
  imageDescription.appendChild(title);
  
  description.innerHTML = imageList[counter].dest;
  imageDescription.appendChild(description);

  theIcons[counter].setAttribute('class', 'selected');
  theImage.setAttribute('src', imageList[counter].url);
  imageShow.appendChild(theImage);
};

const leftButton = document.querySelector('#left-button');
leftButton.onclick = () => {
  deleteTitle.remove();
  deleteDest.remove();

  theIcons[counter].setAttribute('class', 'notSelected');

  if (counter === 0) {
    counter = imageList.length - 1;
  } else {
    counter -= 1;
  }

  title.innerHTML = imageList[counter].title;
  imageDescription.appendChild(title);

  description.innerHTML = imageList[counter].dest;
  imageDescription.appendChild(description);

  theIcons[counter].setAttribute('class', 'selected');

  theImage.setAttribute('src', imageList[counter].url);
  imageShow.appendChild(theImage);
};