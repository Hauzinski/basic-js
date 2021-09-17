import { NotImplementedError } from "../extensions/index.js";

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  let discardNext = false;
  let doubleNext = false;
  let discardPrev = false;
  let doublePrev = false;

  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      discardNext = true;
    } else if (arr[i] === "--double-next") {
      doubleNext = true;
    } else if (arr[i] === "--discard-prev") {
      discardPrev = true;
    } else if (arr[i] === "--double-prev") {
      doublePrev = true;
    } else {
      if (discardNext === true) {
        if (arr[i + 1] === "--double-prev" || arr[i + 1] === "--discard-prev") {
          i++;
        }
        discardNext = false;
        continue;
      } else if (doubleNext === true) {
        newArray.push(arr[i]);
        newArray.push(arr[i]);
        doubleNext = false;
      } else if (discardPrev === true) {
        newArray.pop();
        newArray.push(arr[i]);
        discardPrev = false;
      } else if (doublePrev === true) {
        newArray.push(arr[i - 2]);
        newArray.push(arr[i]);
        doublePrev = false;
      } else {
        newArray.push(arr[i]);
      }
    }
  }
  return newArray.filter((val) => val !== undefined);
}
