const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(members)){
    return false;
  }
  let name = '';
  let arrForName = [];
  members.forEach(element => {
    if (typeof(element) === 'string'){
      let curElement = element.trimStart();
      arrForName.push(curElement[0].toUpperCase());
    }
  });
  arrForName.sort();
  name = arrForName.join('');
  return name;

}

module.exports = {
  createDreamTeam
};
