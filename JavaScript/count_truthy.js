/*
Provide an array and return the number of truthy values in the array.
Falsy Values: false, undefined, null, '', 0, NaN
*/

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

//Expected number of truthy values: 6
const array = [1, 8, false, 10, true, undefined, 6, 0, 'Hello', null];

console.log(countTruthy(array));
