const diff = (arr) => Math.max(...arr) - Math.min(...arr);

const arr1 = [10, 4, 1, 4, -10, -50, 32, 21];
const arr2 = [44, 32, 86, 19];

console.log(diff(arr1)); // 82
console.log(diff(arr2)); // 67


// Create a function that takes an array and returns the difference between 
// the biggest and smallest numbers.