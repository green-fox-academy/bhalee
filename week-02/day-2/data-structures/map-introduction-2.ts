let bookNumber: { [key: string]: string } = {
  '978-1-60309-452-8': 'A Letter to Jo',
  '978-1-60309-459-7': 'Lupus',
  '978-1-60309-444-3': 'Red Panda and Moon Bear',
  '978-1-60309-461-0': 'The Lab',
};

for (let [key, value] of Object.entries(bookNumber)) {
  console.log(`${value} (ISBN: ${key})`);
}
delete bookNumber['978-1-60309-444-3'];

// function getKeyByValue(object, value) {
//   return Object.keys(object).find((key) => object[key] === value);
// }
// delete bookNumber[getKeyByValue(bookNumber, 'The Lab')];
for (let [key, value] of Object.entries(bookNumber)) {
  if (value === 'The Lab') {
    delete bookNumber[key];
  }
}

function addValue(value: string, key: string) {
  bookNumber[value] = key;
}
addValue('k978-1-60309-450-4', 'They Called Us Enemy');
addValue('978-1-60309-453-5', 'Why Did We Trust Him?');

function searchBook(bookId) {
  let find: boolean = false;
  for (let [key, value] of Object.entries(bookNumber)) {
    if (key === bookId) {
      find = true;
    }
  }
  if (find) {
    console.log('I found a book');
  } else {
    console.log('nooope');
  }
}
searchBook('478-0-61159-424-8');

console.log(bookNumber['978-1-60309-453-5']);
