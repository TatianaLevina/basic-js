const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(mode = true) {
    this.mode = mode;
  }

  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

  encrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }
    let mes = message.toString().toUpperCase().split('');
    let keys = key.toUpperCase().split('');

    if (!this.mode) {
      mes = mes.reverse();
      keys = keys.reverse();
    }
    let result = '';
    let j = 0;
    // for (let i = 0, j = 0; i < mes.length; i++){
    //   if (/^[\W\d]/.test(mes[i])){
    //     return result += mes[i];
    //   }
    //   result += this.alphabet[(mes[i].charCodeAt(0) + keys[j].charCodeAt(0)) % 26];
    //   j = ++j % keys.length;
    // }

    return mes.map(element => {
      if (/^[\W\d]/.test(element)) {
        return element;
      }
      result = this.alphabet[(element.charCodeAt(0) + keys[j].charCodeAt(0)) % 26];
      j = ++j % keys.length;
      return result;
    }).join('');


  }
  decrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }
    let mes = message.toString().toUpperCase().split('');
    let keys = key.toUpperCase().split('');

    if (!this.mode) {
      mes = mes.reverse();
      keys = keys.reverse();
    }
    let result = '';
    let j = 0;
    // for (let i = 0, j = 0; i < mes.length; i++) {
    //   if (/^[\W\d]/.test(mes[i])) {
    //     return result += mes[i];
    //   }
    //   result = this.alphabet[(mes[i].charCodeAt(0) + 26 - keys[j].charCodeAt(0)) % 26];
    //   j = ++j % keys.length;
    // }
    // return result;
    return mes.map(element => {
      if (/^[\W\d]/.test(element)) {
        return element;
      }
      result = this.alphabet[(element.charCodeAt(0) + 26 - keys[j].charCodeAt(0)) % 26];
      j = ++j % keys.length;
      return result;
    }).join('');


  }
}

module.exports = {
  VigenereCipheringMachine
};
