const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  sample = parseFloat(sampleActivity);
  if ((typeof sampleActivity === 'string') && (!isNaN(sample)) && ((sample > 0) && (sample < 15)) ){
    const time = Math.ceil(Math.abs(Math.log(sample/MODERN_ACTIVITY)/(0.693/HALF_LIFE_PERIOD)));
    return time;
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
