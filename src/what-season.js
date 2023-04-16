const { NotImplementedError } = require('../extensions/index.js');


function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  let res = '';
  if (date === null){
    return ('Unable to determine the time of year!');
  }
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
