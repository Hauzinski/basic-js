import { NotImplementedError } from "../extensions/index.js";

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sum = 0;
  let position = [];

  for (let value of matrix) {
    for (let i = 0; i < value.length; i++) {
      if (position.length === matrix[0].length) {
        return sum;
      } else if (position.includes(i)) {
        continue;
      } else if (value[i] === 0 && !position.includes(i)) {
        position.push(i);
      } else {
        sum += value[i];
      }
    }
  }
  return sum;
}
