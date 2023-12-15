const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== 'string' || +sampleActivity > MODERN_ACTIVITY || +sampleActivity <= 0 || isNaN(sampleActivity) || sampleActivity === '') {
    return false;
  }

  let age = Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD) / Math.log(2));

  return age;

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
}

module.exports = {
  dateSample
};
