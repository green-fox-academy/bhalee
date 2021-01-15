let telBook: { [key: string]: string } = {
  'William A. Lathan': '405-709-1865',
  'John K. Miller': '402-247-8568',
  'Hortensia E. Foster': '606-481-6467',
  'Amanda D. Newland': '319-243-5613',
  'Brooke P. Askew': '307-687-2982',
};

function searchName(telBookName) {
  let findName: boolean = false;
  for (let [key, value] of Object.entries(telBook)) {
    if (key === telBookName) {
      console.log(`${key}: ${value}`);
      findName = true;
    }
  }
  if (!findName) {
    console.log(`I didn't find phone number for this name: ${telBookName}`);
  }
}
searchName('John K. Miller');

function searchNumber(telBookNumber) {
  let findNumber: boolean = false;
  for (let [key, value] of Object.entries(telBook)) {
    if (value === telBookNumber) {
      console.log(`${key}: ${value}`);
      findNumber = true;
    }
  }
  if (!findNumber) {
    console.log(`I didn't find name for this number: ${telBookNumber}`);
  }
}
searchNumber('307-687-2982');
searchName('Chris E. Myers');