const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
function square(x) {
  for (let i = 0, a = 0, b = 0; i < 6; i++, a += x, b += x, x += 15) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(a, b, x, x);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(a, b, x, x);
  }
}
square(20);