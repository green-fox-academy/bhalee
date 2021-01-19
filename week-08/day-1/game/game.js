// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

const body = document.querySelector('body');
const addCandys = document.querySelector('.candies');
const speedShow = document.querySelector('.speed');

let lollypops = '';
let lollypopCounter = 0;
let speed = 1000;
let boostUsed = false;

function autoLollypop() {
  if (Number(addCandys.innerHTML) < 10000) {
    setTimeout(() => {
      addCandys.innerHTML = Number(addCandys.innerHTML) + 1;
      autoLollypop();
    }, speed);
  }
}

body.addEventListener('click', (event) => {
  const target = event.target.getAttribute('class');
  if (target === 'create-candies' && Number(addCandys.innerHTML) < 10000) {
    addCandys.innerHTML = Number(addCandys.innerHTML) + 1;
  }

  if (target === 'buy-lollypops' && Number(addCandys.innerHTML) >= 100 && Number(addCandys.innerHTML) < 10000) {
    lollypopCounter += 1;
    const addLollypops = document.querySelector('.lollypops');
    addCandys.innerHTML = Number(addCandys.innerHTML) - 100;
    lollypops += '🍭';
    addLollypops.innerHTML = lollypops;
    if (lollypopCounter >= 10) {
      lollypopCounter -= 10;
      autoLollypop();

      speedShow.innerHTML = Number(speedShow.innerHTML) + 1;
    }
  }

  if (target === 'candy-machine' && !boostUsed && Number(addCandys.innerHTML) < 10000) {
    speed = speed / 10;
    speedShow.innerHTML = Number(speedShow.innerHTML) * 10;
    boostUsed = true;
  }
});
