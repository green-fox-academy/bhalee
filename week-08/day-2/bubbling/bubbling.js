// Here is an image inspector, but the buttons are not implemented yet, that will
// be your task!
//  - the nav buttons (up, down, left, right) move the background by 10px
//  - the zoom buttons increase/decrease the image by 20%
//  - attach only two event listeners to the nav element
//    - one for navigation
//    - one for zooming

let positionY = 0;
let positionX = 0;
let zoom = 200;
const nav = document.querySelector('nav');

nav.addEventListener('click', (event) => {
  const img = document.querySelector('.img-inspector');
  const dataAction = event.target.getAttribute('data-action');
  const dataDirection = event.target.getAttribute('data-direction');
  if (dataAction === 'move') {
    if (dataDirection === 'down') {
      positionY -= 10;
      img.style.backgroundPositionY = `${positionY}px`;
    } else if (dataDirection === 'up') {
      positionY += 10;
      img.style.backgroundPositionY = `${positionY}px`;
    } else if (dataDirection === 'right') {
      positionX -= 10;
      img.style.backgroundPositionX = `${positionX}px`;
    } else {
      positionX += 10;
      img.style.backgroundPositionX = `${positionX}px`;
    }
  } else {
    if (dataDirection === 'in') {
      zoom += 10;
      img.style.backgroundSize = `${zoom}%`;
    } else {
      zoom -= 10;
      img.style.backgroundSize = `${zoom}%`;
    }
  }
});
