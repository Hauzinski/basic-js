import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = [];
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      arr.push([count, str[i]]);
      count = 1;
    } else {
      count++;
    }
  }
  return arr
    .flat(1)
    .filter((value) => value != 1)
    .join("");
}
