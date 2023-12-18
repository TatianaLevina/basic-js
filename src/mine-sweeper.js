const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arrResult = [];
  for (let x = 0; x < matrix.length; x++) {
    const arrLine = [];
    for (let y = 0; y < matrix[x].length; y++) {
      let minesInCell = 0;
      for (let xi = x - 1; xi <= x + 1; xi++) {
        if (matrix[xi] !== undefined) {
          for (let yi = y - 1; yi <= y + 1; yi++) {
            if ((xi !== x || yi !== y) && matrix[xi][yi] === true) {
              minesInCell++;
            }
          }
        }
      }
      arrLine.push(minesInCell);
    }
    arrResult.push(arrLine);
  }
  return arrResult;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  minesweeper
};
