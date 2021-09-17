import { NotImplementedError } from "../extensions/index.js";

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arrA = s1.split("");
  let arrB = s2.split("");
  let sum = 0;

  for (let value of arrA) {
    point: for (let i = 0; i < arrB.length; i++) {
      if (value === arrB[i]) {
        sum += 1;
        arrB.splice(i, 1, null);
        break point;
      }
    }
  }

  return sum;
}
