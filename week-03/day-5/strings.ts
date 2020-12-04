// Given a string, compute recursively (no loops) a new string where all 
// the lowercase 'x' chars have been changed to 'y' chars.
let x:string = 'xxxxxxx';
let y:string = 'y';
let index:number = 0;
function setCharAt(toX:string) {
  if(index > toX.length-1){
  return toX;
  }
  x = toX.substring(0,index) + 'y' + toX.substring(index+1);
  index++
  return setCharAt(x);
}
setCharAt(x)
console.log(x);

