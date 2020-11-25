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

console.log(Object.keys(myMap));

for(var property in myMap){
  console.log(myMap[property]);
  }

myMap['68'] = 'D'

console.log(Object.keys(myMap).length);

console.log(myMap[99]);

delete myMap['97'];


// nem múkodik

// irassuk ki az ertekeket a kulcsok segitsegevel



function isItIncluded(myNumber: string) {
  let checker: boolean = false;
for (const key in myMap)
  
if (key === myNumber) {
      checker = true;
    }
  

  if (checker) {
    console.log(`is in the array`)
  } else {
    console.log('No luck');
  }
  
}
isItIncluded('100')


myMap = {};
console.log(myMap);

