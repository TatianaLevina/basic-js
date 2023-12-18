const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(n) {
  let res = 0;
  const numArr = Array.from(String(n), Number);
  for (let i = 0; i < numArr.length; i++) {
    let num = 0;
    for (let j = 0; j < numArr.length; j++) {
      if (j !== i) {
        num = num * 10 + numArr[j];
      }
    }
    res = Math.max(num, res);
  }
  return res;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
