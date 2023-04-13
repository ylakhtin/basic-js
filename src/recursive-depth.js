const { NotImplementedError } = require('../extensions/index.js');


class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    let max;
    if (arr instanceof Array){
      max = 1;
      digArray(1, ...arr);
    }
  
    function digArray(d, ...nextArr){
      if (d > max){max = d;}
      console.log('array - ', nextArr, 'deep - ', d);
      // console.log('nextArr.length - ', nextArr.length);
      for (let i = 0; i < nextArr.length; i++){
        if (nextArr[i] instanceof Array){
          d++;
          digArray(d, ...nextArr[i]);
          d--;
        }
      }
    }
    return max;
  }
}

module.exports = {
  DepthCalculator
};
