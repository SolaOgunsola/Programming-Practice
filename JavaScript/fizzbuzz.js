/*
  For "input", return one of the following:
  Divisible by 3 => Fizz
  Divisible by 5 => Buzz
  Divisible by both 3 and 5 => FizzBuzz
  Not divisible by 3 or 5 => input
  Not a number => Not a Number
 */

function fizzBuzz(input) {
  if (typeof input !== 'number') return NaN;
  if (input === 0) return 0;
  if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz';
  if (input % 3 === 0) return 'Fizz';
  if (input % 5 === 0) return 'Buzz';
  return input;
}

console.log(fizzBuzz(3));
