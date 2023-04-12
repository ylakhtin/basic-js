const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  let res = '';
  if (typeof date === 'string'){
    throw new NotImplementedError('Invalid date!');
  }
  if (date instanceof Date){
    if (date.getMonth()<2){res = 'winter'} else
    if (date.getMonth()<5){res = 'spring'} else
    if (date.getMonth()<8){res = 'summer'} else
    if (date.getMonth()<11){res = 'autumn'} else
    if (date.getMonth() === 11){res = 'winter'}
  } else {
    throw new NotImplementedError('Invalid date!');
    // res = 'Unable to determine the time of year!';
  }
  return res;
}

module.exports = {
  getSeason
};
