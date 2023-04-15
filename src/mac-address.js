const { NotImplementedError } = require('../extensions/index.js');

function isMAC48Address(n) {
  //throw new NotImplementedError('Not implemented');
  let res = true;
  if (n.length !== 17){
    return false;
  } else {
    if (n[2] !== '-'){res = false;}
    if (n[5] !== '-'){res = false;}
    if (n[8] !== '-'){res = false;}
    if (n[11] !== '-'){res = false;}
    if (n[14] !== '-'){res = false;}
    for (let i = 0; i < n.length; i++){
      if (n[i] !== '-') {
        if (!(((n[(i)] >= '0') && (n[(i)] <= '9')) || ((n[(i)] >= 'A') && (n[(i)] <= 'F'))))   {
          res = false;
        }
      }
    }
  }
  return res;
}

module.exports = {
  isMAC48Address
};
