// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
// If the first p has an 'apple' class, replace cat's content with 'dog'
// Make apple red by adding a .red class
// Make balloon less balloon-like (change its shape)

const dolphin = document.querySelector('.dolphin');
const apple = document.querySelector('.apple');
if (dolphin !== null) {
  apple.innerHTML = 'pear';
}

const cat = document.querySelector('.cat');
if (apple !== null) {
  cat.innerHTML = 'dog';
}

apple.setAttribute('class', 'red')

const balloon = document.querySelector('.balloon')
balloon.style.borderRadius = '50px'