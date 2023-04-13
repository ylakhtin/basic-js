const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  setDefaults();
  console.log(options);
  let addition = createAddition();
  console.log('addition - ', addition);
  return getFinal();

  function getFinal(){
    let final = '';
    for (let i = 0; i < options.repeatTimes - 1; i++){
      final = final + str + addition + options.separator;
    }
    return final + str + addition;
  }

  function createAddition(){
    let add = '';
    for (let i = 0; i < options.additionRepeatTimes - 1; i++){
      add = add + options.addition + options.additionSeparator;
    }
    if (add + options.addition === 'undefined'){
      return '';
    }
    return add + options.addition;
  }

  function setDefaults(){
    if (!options.hasOwnProperty('separator')){
      options.separator = '+';
    }
    if (!options.hasOwnProperty('additionSeparator')){
      options.additionSeparator = '|';
    }
    if (!options.hasOwnProperty('repeatTimes')){
      options.repeatTimes  = -1;
    }
    if (!options.hasOwnProperty('additionRepeatTimes')){
      options.additionRepeatTimes  = -1;
    }
  }
}

module.exports = {
  repeater
};
