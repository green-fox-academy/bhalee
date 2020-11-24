let myMap = {};

if (Object.keys(myMap).length === 0) {
  console.log('The map is empty')
} else {
  console.log('The map is not empty')
}
myMap['97'] = 'a'
myMap['98'] = 'b'
myMap['99'] = 'c'
myMap['65'] = 'A'
myMap['66'] = 'B'
myMap['67'] = 'C'
myMap['100'] = 'C'

console.log(Object.keys(myMap));

for(var property in myMap){
  console.log(myMap[property]);
  }

myMap['68'] = 'D'

console.log(Object.keys(myMap).length);

console.log(myMap[99]);

delete myMap['97'];

let keys = Object.keys(myMap);

for(let i:number = 0; i < keys.length; i++){
  let key = keys[i];
  if ( key === '100' ) {
    console.log('yaaay we have 100');
    let asd = true;
  }
}
// nemtom


myMap = {};
console.log(myMap);

