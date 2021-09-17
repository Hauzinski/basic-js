import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = String(n).split("").map(Number);
  let minNumber = Math.min(...arr);
  let indexMin = arr.findIndex((value)=> value === minNumber);
  arr.splice(indexMin, 1);
  return +arr.join("");
}
