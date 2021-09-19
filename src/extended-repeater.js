import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let opt = new Object(options);
  let string = [];
  let additionString = [];
  if (!("repeatTimes" in opt)) {
    opt.repeatTimes = 1;
  }
  if (!("addition" in opt)) {
    opt.addition = "";
  }
  if (!("additionRepeatTimes" in opt)) {
    opt.additionRepeatTimes = 1;
  }

  if (!("separator" in opt)) {
    opt.separator = "+";
  }
  if (!("additionSeparator" in opt)) {
    opt.additionSeparator = "|";
  }

  for (let i = 0; i < opt.additionRepeatTimes; i++) {
    additionString.push(String(opt.addition));
  }
  for (let j = 0; j < opt.repeatTimes; j++) {
    string.push(`${str}${additionString.join(opt.additionSeparator)}`);
  }
  return string.join(opt.separator);
}
