const { NotImplementedError } = require('../extensions/index.js');

function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  let str = n.toString();
  let options = [];
  for (let i = 0; i < str.length; i++){
    let temp = '';
    for (let n = 0; n < str.length; n++){
      if (i !== n){
        temp = temp + str[n];
      }
    }
    options.push(parseInt(temp));
  };
  let max = 0;
  console.log(options);
  for (let i = 0; i < options.length; i++){
    if (max < options[i]){
      max = options[i];
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
