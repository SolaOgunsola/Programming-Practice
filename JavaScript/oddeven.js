/*
Show all numbers up to the provided limit.
Display Odd of Even next to the number.
*/

function showNumbers(limit) {
  for (let index = 0; index <= limit; index++) {
    if (index % 2 === 0) {
      console.log(index, 'EVEN');
    } else {
      console.log(index, 'ODD');
    }
  }
}

showNumbers(1000);
