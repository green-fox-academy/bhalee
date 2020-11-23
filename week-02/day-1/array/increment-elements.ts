// -  Create a variable named `numbers` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element directly (without loops and without array methods: forEach, map, ...)
// -  Log the third element to the console
let numbers: number[] = [1, 2, 3, 4, 5];
let addNumber: number = 1;
let plusNumbers: number =  numbers[2] + addNumber;
numbers[2] = plusNumbers;

console.log(numbers[2]);
