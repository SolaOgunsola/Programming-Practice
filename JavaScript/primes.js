/*
Show all the prime numbers from 2 up to the provided limit.
*/

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (checkPrime(number)) console.log(number);
}

function checkPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;
  return true;
}

showPrimes(500);
