/* Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an 
integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the 
second quarter; and month 11 (November), is part of the fourth quarter.

https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
*/

const quarterOf = (month) => {
  return [1, 2, 3].includes(month)
    ? 1
    : [4, 5, 6].includes(month)
    ? 2
    : [7, 8, 9].includes(month)
    ? 3
    : [10, 11, 12].includes(month)
    ? 4
    : false;
}

const quarterOf2 = (month) => {
    return Math.floor(month/3);
  }


console.log(quarterOf(9));
console.log(quarterOf2(8));
