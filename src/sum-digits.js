const { NotImplementedError } = require('../extensions/index.js');


function getSumOfDigits(n) {
  //throw new NotImplementedError('Not implemented');
  while (n > 9){
    n = getSumOfDigits(n);
  }

  function getSumOfDigits(n){
    let temp = n.toString();
    let sum = 0;
    for (let i = 0; i < temp.length; i++){
      sum = sum + parseInt(temp[i]);
    }
    return sum;
  }
  return n;
}

module.exports = {
  getSumOfDigits
};
