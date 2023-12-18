const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
let arrOfChain = [];

const chainMaker = {
  getLength() {

    return arrOfChain.length;

  },
  addLink(value) {
    arrOfChain.push(`${value}`);
    return this;

  },
  removeLink(position) {

    if (typeof position !== 'number' || position > arrOfChain.length || position <= 0 || !Number.isInteger(position)) {
      arrOfChain = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    arrOfChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    arrOfChain.reverse();
    return this;

  },
  finishChain() {
    const chain = `( ${arrOfChain.join(' )~~( ')} )`;

    arrOfChain = [];
    return chain;
  }


};

module.exports = {
  chainMaker
};
