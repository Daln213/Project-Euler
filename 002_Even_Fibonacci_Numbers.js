/* 
    Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
    1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
    By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.
*/

function fiboEvenSum(n) {
  let prevVal = 0;
  let val = 1;
  let sum = 0;
  while (val < n) {
    let temp = val;
    val += prevVal;
    prevVal = temp;

    if (val % 2 === 0) sum += val;
  }
  return sum;
}
