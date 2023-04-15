const { NotImplementedError } = require('../extensions/index.js');

function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  let res = '';
  let i = 0;
  if (str === ''){
    res = '';
  } else {
    while (i < str.length){
      iCounter = 1;
      let n = i + 1;
      while ((str[i] === str[n]) && (n < str.length)){
        iCounter++;
        n++;
      }
      if (iCounter < 2){
        res = res + str[i];
      } else {
        res = res + iCounter + str[i];
      }
      i = i + iCounter;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
